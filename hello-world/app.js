let response;
const AWS = require("aws-sdk");

exports.lambdaHandler = async (event, context, callback) => {
  try {
    console.log("start lambda");
    const sns = new AWS.SNS();
    var params = {
      Message: "the messsssssage",
      Subject: "Test SNS From Lambda",
      TopicArn:
        "arn:aws:sns:eu-west-2:925221024030:opop-pipeline-Prod-opopSNS-NCkubpVkvfKu",
    };
    sns.publish(params);

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: sns,
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
