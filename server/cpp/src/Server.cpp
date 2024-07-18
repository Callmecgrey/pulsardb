#include "Server.h"
#include <nlohmann/json.hpp>

using json = nlohmann::json;

Server::Server(const std::string& dbPath, int port) : userService(dbPath), port(port) {
    setupRoutes();
}

void Server::setupRoutes() {
    server.Post("/api/signup", [&](const httplib::Request& req, httplib::Response& res) {
        try {
            json j = json::parse(req.body);
            User user = User::fromJson(j);
            User createdUser = userService.createUser(user);
            res.set_content(createdUser.toJson().dump(), "application/json");
            res.status = 201;
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(e.what(), "text/plain");
        }
    });

    server.Post("/api/login", [&](const httplib::Request& req, httplib::Response& res) {
        try {
            json j = json::parse(req.body);
            std::string email = j.at("email").get<std::string>();
            std::string password = j.at("password").get<std::string>();
            auto user = userService.authenticateUser(email, password);
            if (user) {
                res.set_content(user->toJson().dump(), "application/json");
                res.status = 200;
            } else {
                res.status = 401;
                res.set_content("Invalid email or password", "text/plain");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(e.what(), "text/plain");
        }
    });

    server.Get("/api/user/{id}", [&](const httplib::Request& req, httplib::Response& res) {
        try {
            std::string id = req.matches[1];
            auto user = userService.getUser(id);
            if (user) {
                res.set_content(user->toJson().dump(), "application/json");
                res.status = 200;
            } else {
                res.status = 404;
                res.set_content("User not found", "text/plain");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(e.what(), "text/plain");
        }
    });

    server.Put("/api/user/{id}", [&](const httplib::Request& req, httplib::Response& res) {
        try {
            std::string id = req.matches[1];
            json j = json::parse(req.body);
            User updates = User::fromJson(j);
            User updatedUser = userService.updateUser(id, updates);
            res.set_content(updatedUser.toJson().dump(), "application/json");
            res.status = 200;
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(e.what(), "text/plain");
        }
    });

    server.Delete("/api/user/{id}", [&](const httplib::Request& req, httplib::Response& res) {
        try {
            std::string id = req.matches[1];
            bool success = userService.deleteUser(id);
            if (success) {
                res.status = 200;
                res.set_content("User deleted", "text/plain");
            } else {
                res.status = 404;
                res.set_content("User not found", "text/plain");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content(e.what(), "text/plain");
        }
    });
}

void Server::start() {
    server.listen("0.0.0.0", port);
}
