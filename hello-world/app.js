let response;

exports.lambdaHandler = async (event, context) => {
  try {
    // response = {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     message: "pipeline works",
    //   }),
    // };
    var eventText = JSON.stringify(event, null, 2);
    console.log("Received event:", eventText);
    var sns = new AWS.SNS();
    var params = {
      Message: eventText,
      Subject: "Test SNS From Lambda",
      TopicArn: "arn:aws:sns:us-west-2:123456789012:test-topic1",
    };
    sns.publish(params, context.done);
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
