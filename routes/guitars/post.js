const Boom = require('boom');
const Guitar = require('../../models/guitar').Guitar;

module.exports = {
  path: '/guitars',
  method: 'POST',
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

/**
 * Formats an error message that is returned from Mongoose.
 *
 * @param err The error object
 * @returns {string} The error message string.
 */
function getErrorMessageFrom(err) {
  let errorMessage = '';

  if (err.errors) {
    for (const prop in err.errors) {
      if (err.errors.hasOwnProperty(prop)) {
        errorMessage += err.errors[prop].message + ' '; // eslint-disable-line
      }
    }
  } else {
    errorMessage = err.message;
  }

  return errorMessage;
}
