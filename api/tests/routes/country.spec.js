/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Rutas', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Country.sync({ force: false })
    .then(() => Country.findOne({
      where: {
        Nombre: country.name
      }
    })));
  describe('GETs de prueba', () => {
    it('Debe retornar un 200 si encuentran paises que incluyan la letra "A"', () =>
      agent.get('/countries?name=A').expect(200)
    );
    it('Debe retornar un 200 si encuentran los datos del id "ARG"', () =>
      agent.get('/countries/ARG').expect(200)
    );
  });
});
