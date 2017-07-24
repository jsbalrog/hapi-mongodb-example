'use strict';

const swagger = require('hapi-swagger');

module.exports = {
  register: swagger,

  options: {
    pathPrefixSize: 2,

    info: {
      title: 'Getting Started with Hapi Documentation',
    },
  },
};
