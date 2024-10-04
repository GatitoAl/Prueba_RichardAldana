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