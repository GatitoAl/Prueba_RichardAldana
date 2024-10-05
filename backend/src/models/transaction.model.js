const mongoose = require('mongoose');

// Definir esquema del usuario
const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameCard: {
        type: String,
        required: true,
    },
    money: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);