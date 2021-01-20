exports.handler = (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hi Hello World',
        event: event,
      }),
    }
    /** Node style callback(error, response) */
    return callback(null, response)
  }