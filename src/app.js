const express = require('express');
const { loginValidator } = require('./middlewares/loginMiddlewares');
const { loginController } = require('./controllers/loginController');
const { newUserValidator } = require('./middlewares/newUserMiddleware');
const { newUserController } = require('./controllers/newUserController');
const { tokenValidator } = require('./middlewares/tokenValidator');
const { getAllUsersController } = require('./controllers/usersController');

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

// endpoint - requisito 4
app.post('/user', newUserValidator, newUserController);

// endpoint - requisito 5
app.get('/user', tokenValidator, getAllUsersController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
