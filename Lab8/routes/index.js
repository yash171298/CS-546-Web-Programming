const showRoutes = require('./shows');

const path = require('path');

const constructorMethod = (app) => {
  app.use('/', showRoutes);
  //app.use('/shows', showRoutes);
  
  

  app.use('*', (req, res) => {
    res.redirect('/shows');
  });
};

module.exports = constructorMethod;