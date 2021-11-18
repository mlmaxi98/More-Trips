const { DataTypes: S } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: S.STRING
        },
        difficult: {
            type: S.INTEGER
        },
        duration: {
            type: S.INTEGER
        },
        season: {
            type: S.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        },
    }, { timestamps: false });
};
