const path = require('path');

module.exports = {
    main: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    },
    contact: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/contact.html'));
    },
    services: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/services.html'));
    }
};