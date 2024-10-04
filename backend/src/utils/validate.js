// Validar formato de email
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

// Validar que la contraseña tenga al menos 6 caracteres
const validatePassword = (password) => {
    return password.length >= 6;
};

// Validar que los campos no estén vacíos
const validateFields = (fields) => {
    console.log(fields)
    return Object.values(fields).every(field => field.trim() !== '');
};

module.exports = {
    validateEmail,
    validatePassword,
    validateFields,
};