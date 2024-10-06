const queriesService = require('../services/queries.service');

exports.ids = async (req, res) => {
    const { type } = req.body;
    if (type === "all") {
        try {
            const transactions = await queriesService.allQueries();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las transacciones', error });
        }
    }
}

exports.registerTransaction = async (req, res) => {
    const { type, date, name, nameCard, money, status } = req.body;
    // Crear nueva transaccion
    try {
        const transaction = await queriesService.registerTransaction(type, date, name, nameCard, money, status);
        res.status(201).json({ message: 'Transacción guardada', transaction });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.id = async (req, res) => {
    const { id } = req.body;
    // Crear nueva transaccion
    try {
        const transaction = await queriesService.getId(id);
        res.status(201).json({ message: 'data obtenida', transaction });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}