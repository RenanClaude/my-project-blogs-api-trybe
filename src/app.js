const express = require('express');
const { loginValidator } = require('./middlewares/loginMiddlewares');
const { loginController } = require('./controllers/loginController');
const { newUserValidator } = require('./middlewares/newUserMiddleware');
const { newUserController } = require('./controllers/newUserController');
const { tokenValidator } = require('./middlewares/tokenValidator');
const { getAllUsersController, getUserController } = require('./controllers/usersController');
const { newCategoryController } = require('./controllers/newCategoryController');
const { getAllCategoriesController } = require('./controllers/categoriesController');

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

// endpoint - requisito 6
app.get('/user/:id', tokenValidator, getUserController);

// endpoint - requisito 8
app.post('/categories', tokenValidator, newCategoryController);

// endpoint - requisito 9
app.get('/categories', tokenValidator, getAllCategoriesController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
