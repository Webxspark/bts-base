// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BreakTheSilence {
    struct UserData {
        uint256 id;
        string userData;
        string reportedAbuseCases;
        string token;
        string phone;
    }

    mapping(string => UserData) private usersMap;
    string[] private userPhones;
    string private admin = "0xd156D3731EE08B5d07758686cD2De516F4AeCfDB";
    string private APP_NAME = "BreakTheSilence";

    function addNewUser(
        uint256 id,
        string memory userData,
        string memory reportedAbuseCases,
        string memory token,
        string memory phone
    ) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length != 0) {
            return "{\"error\": \"Phone number already exists\", \"status\": 400}";
        }

        UserData memory user = UserData(id, userData, reportedAbuseCases, token, phone);
        usersMap[phone] = user;
        userPhones.push(phone);
        return "{\"message\": \"User added successfully\", \"status\": 200}";
    }

    function getUser(string memory phone) public view returns (UserData memory) {
        return usersMap[phone];
    }

    function getAdmin() public view returns (string memory) {
        return admin;
    }

    function setAdmin(string memory phone) public returns (string memory) {
        admin = phone;
        return "{\"message\": \"Admin set successfully\", \"status\": 200}";
    }

    function fetchAllUsers() public view returns (UserData[] memory) {
        UserData[] memory users = new UserData[](userPhones.length);
        for (uint256 i = 0; i < userPhones.length; i++) {
            users[i] = usersMap[userPhones[i]];
        }
        return users;
    }

    function updateUser(
        uint256 id,
        string memory userData,
        string memory reportedAbuseCases,
        string memory token,
        string memory phone
    ) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        UserData memory user = UserData(id, userData, reportedAbuseCases, token, phone);
        usersMap[phone] = user;
        return "{\"message\": \"User updated successfully\", \"status\": 200}";
    }

    function removeUser(string memory phone) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        delete usersMap[phone];
        // Remove phone from userPhones array
        for (uint256 i = 0; i < userPhones.length; i++) {
            if (keccak256(abi.encodePacked(userPhones[i])) == keccak256(abi.encodePacked(phone))) {
                userPhones[i] = userPhones[userPhones.length - 1];
                userPhones.pop();
                break;
            }
        }
        return "{\"message\": \"User removed successfully\", \"status\": 200}";
    }

    function login_init(string memory phone, string memory token) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        UserData storage user = usersMap[phone];
        user.token = token;

        return "{'message': 'OTP sent to your phone number! Please verify the OTP', 'status': 200}";
    }

    function verifyToken(string memory phone, string memory token) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        UserData storage user = usersMap[phone];
        if (keccak256(abi.encodePacked(user.token)) == keccak256(abi.encodePacked(token))) {
            user.token = "0000";
            return "{\"message\": \"OTP verified successfully\", \"status\": 200}";
        } else {
            return "{\"error\": \"OTP does not match\", \"status\": 400}";
        }
    }

    function updateUserData(string memory phone, string memory userData) public returns (string memory) {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        UserData storage user = usersMap[phone];
        user.userData = userData;
        return "{\"message\": \"User data updated successfully\", \"status\": 200}";
    }

    function updateReportedAbuseCases(string memory phone, string memory reportedAbuseCases)
        public
        returns (string memory)
    {
        if (bytes(usersMap[phone].phone).length == 0) {
            return "{\"error\": \"User does not exist\", \"status\": 400}";
        }

        UserData storage user = usersMap[phone];
        user.reportedAbuseCases = reportedAbuseCases;
        return "{\"message\": \"Reported abuse cases updated successfully\", \"status\": 200}";
    }
}
