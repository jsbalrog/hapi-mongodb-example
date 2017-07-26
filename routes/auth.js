const Boom = require('boom');
const User = require('../models/user').User;
const jwt = require('jsonwebtoken');

module.exports = {
  path: '/auth',
  method: 'POST',
  config: {
    tags: [ 'api' ],
    description: 'Find a user and authenticate',
    notes: 'Find a user and authenticate',
  },
  async handler(request, reply) {
    const { username, password } = request.payload;

    User.findOne({ username }, function(err, user) {
      if (!err && user) {
        if (user.password === password) {
          const token = jwt.sign({ // eslint-disable-line newline-after-var
            username,
            scope: user.id,
          },
          'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy', {
            algorithm: 'HS256',
            expiresIn: '1h',
          });
          reply({ token, scope: user.id });
        } else {
          reply(Boom.notFound());
        }
      } else if (err) {
        console.log(err); // eslint-disable-line
        reply(Boom.notFound());
      } else {
        reply(Boom.notFound());
      }
    });
  },
};
