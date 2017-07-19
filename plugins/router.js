'use strict';

const router = require('hapi-router');

module.exports = {
  register: router,
  options: {
    routes: 'routes/**/*.js',
  },
};
