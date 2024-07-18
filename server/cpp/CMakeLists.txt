cmake_minimum_required(VERSION 3.10)

project(PulserDB)

set(CMAKE_CXX_STANDARD 17)

# Add httplib
add_subdirectory(external/httplib)

# Add nlohmann_json
add_subdirectory(external/nlohmann_json)

# Add sources
add_executable(PulserDB
    src/main.cpp
    src/User.cpp
    src/UserService.cpp
    src/Server.cpp
)

# Link libraries
target_link_libraries(PulserDB
    PRIVATE
    httplib
    nlohmann_json::nlohmann_json
    OpenSSL::SSL
    OpenSSL::Crypto
)
