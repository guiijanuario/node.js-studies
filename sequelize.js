const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'admin', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
