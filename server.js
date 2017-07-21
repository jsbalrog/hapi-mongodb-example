const { Server } = require('hapi');
const registerPlugins = require('./plugins');
const Mongoose = require('mongoose');

// Mongoose connection
Mongoose.connect('mongodb://localhost/hapi', {
  useMongoClient: true,
});

const server = new Server();

server.connection({ port: 3000 });

async function initialize() {
  try {
    await registerPlugins(server);
    await server.initialize();
    await server.start();
    console.log(`Sentinel server started at ${ server.info.uri }`); // eslint-disable-line

    return server;
  } catch (error) {
    throw error;
  }
}

module.exports = initialize();
