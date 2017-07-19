const { Server } = require('hapi');
const registerPlugins = require('./plugins');
const Mongoose = require('mongoose');

// Mongoose connection
Mongoose.connect('mongodb://localhost/hapi', {
  useMongoClient: true,
});

const server = new Server();

server.connection({ port: 3000 });

module.exports = registerPlugins(server)
  .then(() => {
    return server.initialize();
  })
  .then(() => {
    return server.start()
      .then(() => {
        console.log(`Sentinel server started at ${ server.info.uri }`); // eslint-disable-line

        return null;
      });
  })
  .then(() => {
    return server;
  })
  .catch((e) => {
    throw e;
  });
