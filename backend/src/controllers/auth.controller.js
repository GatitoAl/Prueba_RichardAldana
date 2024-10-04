const User = require('../models/user.model');
const authService = require('../services/auth.service');
const { validateEmail, validatePassword, validateFields } = require('../utils/validate');

// Registro de usuario
exports.register = async (req, res) => {
    const { email, password } = req.body;

    // Validación de campos
    if (!validateFields({ email, password })) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ error: 'Email no válido' });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    }

    // Crear usuario
    try {
        const user = await authService.registerUser(email, password);
        res.status(201).json({ message: 'Usuario registrado con éxito', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};