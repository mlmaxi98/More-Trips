const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Modelos', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validaciones', () => {
    beforeEach(() => Activity.sync({ force: false }));
    describe('name', () => {
      it('Debes crear una nueva actividad llamada Prueba', () => {
        Activity.create({ name: 'Prueba' });
      });
      it('La actividad Prueba debe estar creada', () => {
        Activity.findOne({
          where: { name: 'Prueba' }
        })
      });
    });
  });
});
