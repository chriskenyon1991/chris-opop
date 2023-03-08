let response;

exports.lambdaHandler = async (event, context, callback) => {
  try {
    // console.log('Received event:', JSON.stringify(event, null, 4));

    var message = event.Records[0].Sns.Message;
    console.log("Message received from SNS:", message);
    callback(null, "Success");
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
