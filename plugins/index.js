'use strict';

const jwt = require('./jwt');

const plugins = [
  './router',
  './blipp',
  './swagger',
  'inert',
  'vision',
].map(require);

module.exports = {
  async registerPlugins(server) {
    try {
      await jwt.setUpAuth(server);
      await server.register(plugins);
    } catch (error) {
      console.log(error); // eslint-disable-line
      throw error;
    }
  },
};
