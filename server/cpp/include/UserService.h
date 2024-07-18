#ifndef SERVER_H
#define SERVER_H

#include <httplib.h>
#include "UserService.h"

class Server {
public:
    Server(const std::string& dbPath, int port);
    void start();

private:
    httplib::Server server;
    UserService userService;
    int port;

    void setupRoutes();
};

#endif // SERVER_H
