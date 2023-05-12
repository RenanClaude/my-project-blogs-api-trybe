const express = require('express');
const { loginValidator } = require('./middlewares');
const { loginController } = require('./controllers/loginController');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
// docker-compose up -d --build
// docker exec -it blogs_api bash

// endpoint - requisito 3
app.post('/login', loginValidator, loginController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
