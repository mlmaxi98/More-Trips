const { DataTypes: S } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        Nombre: {
            type: S.STRING
        },
        Dificultad: {
            type: S.INTEGER
        },
        Duracion: {
            type: S.INTEGER
        },
        Temporada: {
            type: S.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        },
    }, { timestamps: false });
};
