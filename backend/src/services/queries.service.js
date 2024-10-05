
const Transaction = require('../models/transaction.model');
// Registro de usuario
exports.allQueries = async (email) => {

    return "";
};

// Registro de usuario
exports.registerTransaction = async (type, date, name, nameCard, money, status) => {
    const transaction = new Transaction({ type, date, name, nameCard, money, status });
    await transaction.save();
    return transaction;
};