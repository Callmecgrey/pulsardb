#include "User.h"
#include <chrono>
#include <ctime>

using json = nlohmann::json;

json User::toJson() const {
    return json{
        {"id", id},
        {"username", username},
        {"email", email},
        {"password", password},
        {"created_at", created_at},
        {"updated_at", updated_at}
    };
}

User User::fromJson(const json& j) {
    User user;
    user.id = j.at("id").get<std::string>();
    user.username = j.at("username").get<std::string>();
    user.email = j.at("email").get<std::string>();
    user.password = j.at("password").get<std::string>();
    user.created_at = j.at("created_at").get<std::string>();
    user.updated_at = j.at("updated_at").get<std::string>();
    return user;
}

std::string getCurrentTime() {
    auto now = std::chrono::system_clock::now();
    std::time_t now_c = std::chrono::system_clock::to_time_t(now);
    char buffer[26];
    ctime_r(&now_c, buffer);
    buffer[24] = '\0'; // Remove newline
    return std::string(buffer);
}
