const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;

module.exports = {
  method: 'GET',
  path: '/guitars',
  handler: (request, reply) => {
    Guitar.find({}, function(err, guitars) {
      if (err) {
        reply(Boom.badImplementation(err)); // 500
      } else {
        reply(guitars);
      }
    });
  },
};
