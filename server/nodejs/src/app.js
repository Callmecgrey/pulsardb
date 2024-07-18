const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
});

module.exports = app;
