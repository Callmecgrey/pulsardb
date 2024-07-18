#include "Server.h"

int main() {
    Server server("data/users.json", 3000);
    server.start();
    return 0;
}
