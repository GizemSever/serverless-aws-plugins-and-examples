'use strict';

module.exports.handle = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Response message',
      input: event,
    }),
  };

  callback(null, response);
}