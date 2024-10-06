
const Transaction = require('../models/transaction.model');
const axios = require('axios');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();


// Recuperar toda la colección
exports.allQueries = async () => {
    const transaction = await Transaction.find();
    return transaction;
};

// Registro de la transacción
exports.registerTransaction = async (type, date, name, nameCard, money, status) => {
    const transaction = new Transaction({ type, date, name, nameCard, money, status });
    await transaction.save();
    return transaction;
};


exports.getId = async (id) => {
    const url = `https://apipre.pagoplux.com/intv1/integrations/getTransactionByIdStateResource?idTransaction=${id}`;

    const auth = {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
    };

    try {
        const response = await axios.get(url, {
            auth: auth, // Autenticación básica
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Maneja la respuesta de la API
        console.log('Transacción obtenida:', response.data);
        return response.data;
    } catch (error) {
        // Maneja errores
        console.error('Error al obtener la transacción:', error.response ? error.response.data : error.message);
        throw error;
    }
};