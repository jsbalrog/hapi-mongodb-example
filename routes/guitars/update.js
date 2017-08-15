const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;
const _ = require('lodash');
const getErrorMessageFrom = require('../../utils').getErrorMessageFrom;

module.exports = {
  path: '/guitars/{id}',
  method: 'PUT',
  config: {
    auth: {
      strategy: 'token',
    },
    tags: [ 'api' ],
    description: 'Update an individual guitar',
    notes: 'Update an individual guitar',
  },
  async handler(request, reply) {
    if (request.body._id) { // eslint-disable-line
      delete request.body._id; // eslint-disable-line
    }
    Guitar.findById(request.params.id, function(err, guitar) {
      if (err || !guitar) {
        reply(Boom.notFound(getErrorMessageFrom(err)));
      }
      const updated = _.merge(guitar, request.body);

      updated.save(function(error) {
        if (error) {
          reply(Boom.badImplementation(getErrorMessageFrom(error)));
        } else {
          reply(guitar);
        }
      });
    });
  },
};
