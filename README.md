# Aplicação com Express.js e Sequelize

## Configuração Inicial 🔧

Antes de começar, certifique-se de ter o Node.js e o PostgreSQL instalados na sua máquina.

1. **Instale as dependências:**
   ```bash
   npm install

2. **Configure o banco de dados:**

 - Crie um banco de dados PostgreSQL chamado dbnode.
 - Atualize as configurações do banco de dados no arquivo config/database.js.

 3. **Execute as migrações:**
    ```bash
    npx sequelize-cli db:migrate

# Estrutura do Projeto 🏗️

- **app.js: Ponto de entrada da aplicação Express.js.**
- **config/: Contém as configurações, incluindo a configuração do banco de dados.**
- **models/: Define os modelos Sequelize para interagir com o banco de dados.**
- **routes/: Contém as definições de rotas da aplicação.**
- **controllers/: Lógica de controle para manipulação de dados.**
- **middlewares/: Middlewares personalizados.**

# Endpoints 🚀

1. **Criar Usuário**

- Método: `POST`
- URL: `/users`
- Corpo da Requisição:

```bash
{
  "firstName": "John",
  "lastName": "Doe"
} 
```

- Resposta de Sucesso:
    - Código: 201 Created
    - Corpo:

```bash
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe"
}
```

2. **Obter Todos os Usuários**
- Método: `GET`
- URL: `/users`
- Resposta de Sucesso:
  - Código: 200 OK
  - Corpo:

```bash
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe"
  }
]
```

3. **Obter Usuário por ID**
- Método: `GET`
- URL: `/users/:id`
- Resposta de Sucesso:
  - Código: 200 OK
  - Corpo:
```bash
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe"
}
```

4. **Atualizar Usuário por ID**
- Método: `PUT`
- URL: `/users/:id`
- Corpo da Requisição::
```bash
{
  "firstName": "Updated",
  "lastName": "User"
}
```
- Corpo da Requisição:
    - Código: 200 OK
    - Corpo:
```bash
{
  "id": 1,
  "firstName": "Updated",
  "lastName": "User"
}
```
5. **Obter Usuário por ID**
- Método: `DELETE`
- URL: `/users/:id`
- Resposta de Sucesso:
  - Código: 204 No Content

# Executando a Aplicação 🚀

1. Inicie o servidor:
```bash
npm start
```
2. Acesse a API:
    - URL: http://localhost:3000


---

## 👨‍💻 Autor

Nome: Guilherme Januário <br>Linkedin: https://www.linkedin.com/in/guilherme-janu%C3%A1rio/

---

<h4 align=center>©️ Made with 💚 by <a href="https://github.com/guiijanuario">Guilherme Januário</a></h4>