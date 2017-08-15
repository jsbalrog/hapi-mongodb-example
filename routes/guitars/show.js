const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;

module.exports = {
  path: '/guitars/{id}',
  method: 'GET',
  config: {
    auth: {
      strategy: 'token',
    },
    tags: [ 'api' ],
    description: 'Show an individual guitar',
    notes: 'Show an individual guitar',
  },
  async handler(request, reply) {
    Guitar.findById(request.params.id, function(err, guitar) {
      if (err || !guitar) {
        reply(Boom.notFound('Guitar not found'));
      } else {
        reply(guitar);
      }
    });
  },
};
