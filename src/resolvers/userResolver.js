// src/resolvers/userResolver.js
const axios = require('axios');

const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
];

module.exports = {
    getUser: async ({ id }) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    },
    getUsers: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    },
    createUser: ({ name, email }) => {
        const user = { id: String(users.length + 1), name, email };
        users.push(user);
        return user;
    },
};
