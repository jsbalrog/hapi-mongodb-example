'use strict';

const plugins = [
  './router',
  './blipp',
  './swagger',
  'inert',
  'vision',
].map(require);

async function registerPlugins(server) {
  try {
    const register = await server.register(plugins);

    return register;
  } catch (error) {
    throw error;
  }
}

module.exports = registerPlugins;
