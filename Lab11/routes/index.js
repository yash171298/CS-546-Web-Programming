const apiRoutes = require('./api');
const todoData = require('../data');

const constructorMethod = (app) => {
  app.use('/api', apiRoutes);

  app.get('/', function (request, response) {
    response.render('layouts/main', {
      pageTitle: 'So Much ToDo!',
      
    });
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;