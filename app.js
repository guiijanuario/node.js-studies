// app.js
const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação Express!');
});

app.get('/about', (req, res) => {
  res.send('Página Sobre');
});

app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
