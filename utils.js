'use strict';

module.exports = {
  getErrorMessageFrom,
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
