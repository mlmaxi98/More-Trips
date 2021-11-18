const { DataTypes: S } = require('sequelize');
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
    name: {
      type: S.STRING,
      allowNull: false,
    },
    flag: {
      type: S.STRING,
      allowNull: false,
    },
    region: {
      type: S.STRING,
      allowNull: false,
    },
    capital: {
      type: S.STRING,
      allowNull: false,
    },
    subregion: {
      type: S.STRING,
    },
    area: {
      type: S.DECIMAL,
    },
    population: {
      type: S.INTEGER,
    },
  }, { timestamps: false });
};
