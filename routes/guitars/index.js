const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;
const getErrorMessageFrom = require('../../utils').getErrorMessageFrom;

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
        reply(Boom.badImplementation(getErrorMessageFrom(err))); // 500
      } else {
        reply(guitars);
      }
    });
  },
};
