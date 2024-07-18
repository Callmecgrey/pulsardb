#ifndef USER_H
#define USER_H

#include <string>
#include <nlohmann/json.hpp>

class User {
public:
    std::string id;
    std::string username;
    std::string email;
    std::string password;
    std::string created_at;
    std::string updated_at;

    nlohmann::json toJson() const;
    static User fromJson(const nlohmann::json& json);
};

#endif // USER_H
