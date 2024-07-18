const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const dbConfig = require('../config/dbConfig');
const userSchema = require('../models/userSchema');

const dbPath = path.join(__dirname, `../../data/${dbConfig.databaseUrl}/users.json`);

// Ensure the data directory exists
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

// Initialize an empty JSON file if it doesn't exist
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
}

function readUsers() {
    return JSON.parse(fs.readFileSync(dbPath));
}

function writeUsers(users) {
    fs.writeFileSync(dbPath, JSON.stringify(users));
}

async function createUser(user) {
    const users = readUsers();

    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    user.id = uuidv4();
    user.password = await bcrypt.hash(user.password, 10);
    const { error } = userSchema.validate(user);
    if (error) throw error;

    users.push(user);
    writeUsers(users);
    return user;
}

function getUser(id) {
    const users = readUsers();
    return users.find(user => user.id === id);
}

function updateUser(id, updates) {
    const users = readUsers();
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        throw new Error('User not found');
    }

    const updatedUser = { ...users[userIndex], ...updates, updated_at: new Date() };
    const { error } = userSchema.validate(updatedUser);
    if (error) throw error;

    users[userIndex] = updatedUser;
    writeUsers(users);
    return updatedUser;
}

function deleteUser(id) {
    const users = readUsers();
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        throw new Error('User not found');
    }

    const [deletedUser] = users.splice(userIndex, 1);
    writeUsers(users);
    return deletedUser;
}

async function authenticateUser(email, password) {
    const users = readUsers();
    const user = users.find(user => user.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    return user;
}

module.exports = { createUser, getUser, updateUser, deleteUser, authenticateUser };
