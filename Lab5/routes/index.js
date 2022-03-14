const aboutmeRoutes = require('./aboutme');
const showsRoutes = require('./shows');
//const userRoutes = require('./users');

const constructorMethod = (app) => {
  app.use('/aboutme', aboutmeRoutes);
  app.use('/shows',showsRoutes);

  

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;