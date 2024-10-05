const queriesService = require('../services/queries.service');

exports.ids = async (req, res) => {
    const { type } = req.body;
    // Crear usuario
    // try {
    if (type === "all") {
        res.status(200).json({ message: 'Petición exitosa' });
        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
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