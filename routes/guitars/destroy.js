const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;
const getErrorMessageFrom = require('../../utils').getErrorMessageFrom;

module.exports = {
  path: '/guitars/{id}',
  method: 'DELETE',
  config: {
    auth: {
      strategy: 'token',
    },
    tags: [ 'api' ],
    description: 'Delete an individual guitar',
    notes: 'Delete an individual guitar',
  },
  async handler(request, reply) {
    Guitar.findById(request.params.id, function(err, guitar) {
      if (err || !guitar) {
        reply(Boom.notFound(getErrorMessageFrom(err)));
      }
      guitar.remove(function(error) {
        if (error) {
          reply(Boom.badImplementation(getErrorMessageFrom(error)));
        } else {
          reply({
            message: 'Successfully deleted',
          }).code(204);
        }
      });
    });
  },
};
