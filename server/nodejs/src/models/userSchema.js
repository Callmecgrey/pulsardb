const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    created_at: Joi.date().default(() => new Date(), 'current date'),
    updated_at: Joi.date().default(() => new Date(), 'current date')
});

module.exports = userSchema;
