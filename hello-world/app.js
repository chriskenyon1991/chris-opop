let response;
var AWS = require("aws-sdk");

exports.lambdaHandler = async (event, context) => {
  try {
    console.log("start lambda");
    // response = {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     message: "pipeline works",
    //   }),
    // };

    var sns = new AWS.SNS();
    var params = {
      Message: "test",
      Subject: "Test SNS From Lambda",
      TopicArn:
        "arn:aws:sns:eu-west-2:925221024030:opop-pipeline-Gamma-opopSNS-GX3dgGmSrBVw",
    };
    sns.publish(params, context.done);
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
