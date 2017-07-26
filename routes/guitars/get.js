const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;

module.exports = {
  path: '/guitars',
  method: 'GET',
  config: {
    auth: {
      strategy: 'token',
    },
    tags: [ 'api' ],
    description: 'Get all guitars',
    notes: 'Get all guitars',
  },
  async handler(request, reply) {
    Guitar.find({}, function(err, guitars) {
      if (err) {
        reply(Boom.badImplementation(err)); // 500
      } else {
        reply(guitars);
      }
    });
  },
};
