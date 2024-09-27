const path = require('path');

module.exports = {
    getAllUsers: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/user/index.html'));
    },
    getUserById: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/user/index.html'));
    },
    createUser: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/user/index.html'));
    },
    updateUser: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/user/index.html'));
    },
    deleteUser: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/user/index.html'));
    }
};