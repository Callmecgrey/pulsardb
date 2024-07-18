const express = require('express');
const { createUser, getUser, updateUser, deleteUser, authenticateUser } = require('../services/userService');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await createUser(user);
        res.status(201).send(createdUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authenticateUser(email, password);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get('/user/:id', (req, res) => {
    try {
        const user = getUser(req.params.id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.put('/user/:id', (req, res) => {
    try {
        const updates = req.body;
        const updatedUser = updateUser(req.params.id, updates);
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.delete('/user/:id', (req, res) => {
    try {
        const deletedUser = deleteUser(req.params.id);
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
