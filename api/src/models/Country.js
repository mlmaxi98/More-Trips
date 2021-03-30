const { DataTypes:S } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: S.STRING,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: S.STRING,
      allowNull: false,
    },
    Bandera: {
      type: S.STRING,
      allowNull: false,
    },
    Continente: {
      type: S.STRING,
      allowNull: false,
    },
    Capital: {
      type: S.STRING,
      allowNull: false,
    },
    Subregion: {
      type: S.STRING,
    },
    Area: {
      type: S.INTEGER,
    },
    Poblacion: {
      type: S.INTEGER,
    },
  }, { timestamps: false });
};
