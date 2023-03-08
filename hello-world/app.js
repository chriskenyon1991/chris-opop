let response;

exports.lambdaHandler = async (event, context) => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "============================================== pipe works",
      }),
    };
    // var eventText = JSON.stringify(event, null, 2);
    // console.log("Received event:", eventText);
    // var sns = new AWS.SNS();
    // var params = {
    //   Message: eventText,
    //   Subject: "Test SNS From Lambda",
    //   TopicArn:
    //     "arn:aws:sns:eu-west-2:925221024030:opop-pipeline-Gamma-opopSNS-GX3dgGmSrBVw",
    // };
    sns.publish(params, context.done);
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
