const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        phone: {
            type: String,
            required: [true, 'Email is required'],
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
        },
        siteId: {
            type: String,
            required: [true, 'siteId is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
