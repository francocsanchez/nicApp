const { body } = require('express-validator');

exports.createDamage = [
    body('vin').notEmpty().withMessage('El VIN no puede estar vacio'),
    body('vin').isLength({ min: 8 }).withMessage('El VIN debe tener 8 caracteres'),
]