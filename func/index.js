exports.handler = function(event, context, callback) {
  const { token } = event;
  console.log(event);

  if (token === 'ABCD') {
    callback(null, {
      statusCode: 307,
      headers: {
        location: [
          /** 'AWS_S3_ENDPOINT' will be packed by webpack */
          /* eslint-disable-next-line no-undef */
          { key: 'Location', value: 'https://elated-joliot-752915.netlify.app/files/5_6330189367990026289.mp4' },
        ],
      },
    });
  } else {
    callback(null, {
      statusCode: 200,
      body: 'no token',
    });
  }
};
