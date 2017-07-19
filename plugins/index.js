'use strict';

const plugins = [
  './router',
  './blipp',
  'inert',
  'vision',
].map(require);

module.exports = (server) => {
  return Promise.resolve(server.register(plugins));
};
