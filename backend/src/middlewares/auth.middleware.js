const jwt = require('jsonwebtoken');

// Middleware para proteger rutas
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado, no hay token' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Añadir la información del usuario a la solicitud
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token no válido' });
    }
};

module.exports = authMiddleware;