const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;
const getErrorMessageFrom = require('../../utils').getErrorMessageFrom;

module.exports = {
  path: '/guitars',
  method: 'POST',
  config: {
    auth: {
      strategy: 'token',
    },
    tags: [ 'api' ],
    description: 'Create a new guitar',
    notes: 'Create a new guitar',
  },
  async handler(request, reply) {
    const guitar = new Guitar();

    guitar.type = request.payload.type;
    guitar.make = request.payload.make;
    guitar.model = request.payload.model;

    guitar.save(function(err) {
      if (err) {
        // HTTP 403
        reply(Boom.forbidden(getErrorMessageFrom(err)));
      } else {
        // HTTP 201
        reply(guitar).created('/guitars/' + guitar._id); // eslint-disable-line
      }
    });
  },
};
