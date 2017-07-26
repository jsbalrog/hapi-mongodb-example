const { Server } = require('hapi');
const plugins = require('./plugins');
const Mongoose = require('mongoose');
const server = new Server();

server.connection({ port: 3000 });

async function initialize() {
  try {
    await plugins.registerPlugins(server);
    await server.initialize();
    await server.start();
    // Mongoose connection
    Mongoose.connect('mongodb://localhost/hapi', {
      useMongoClient: true,
    });

    console.log(`Server started at ${ server.info.uri }`); // eslint-disable-line

    return server;
  } catch (error) {
    console.log(error); // eslint-disable-line
    throw error;
  }
}

module.exports = initialize();
