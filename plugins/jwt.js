'use strict';

const jwt = require('hapi-auth-jwt');

module.exports = {
  async setUpAuth(server) {
    try {
      server.register(jwt, function() {
        server.auth.strategy('token', 'jwt', {
          key: 'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy',
          verifyOptions: {
            algorithms: [ 'HS256' ],
          },
        });
      });
    } catch (error) {
      console.log(error); // eslint-disable-line
      throw error;
    }
  },
};
