const sequelize = require('./sequelize');
const User = require('./models/user');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await User.sync({ force: true });
    console.log('Modelos sincronizados com o banco de dados.');

    process.exit(0);
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error);
    process.exit(1);
  }
})();
