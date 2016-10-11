'use strict';

const AWS = require('aws-sdk');

module.exports.firstLambda = (event, context, callback) => {
  const sns = new AWS.SNS();

  const accountId = '<account-id>';

  const params = {
    Message: 'triggering other Lambda(s)',
    TopicArn: `arn:aws:sns:us-east-1:${accountId}:dispatcher`
  };

  sns.publish(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(null, { message: 'Message successfully published to SNS topic "dispatcher"', event });
  });
};

module.exports.secondLambda = (event, context, callback) => {
  // print out the event information on the console (so that we can see it in the CloudWatch logs)
  console.log(`I'm triggered by "firstLambda" through the SNS topic "dispatcher":\n${JSON.stringify(event, null, 2)}`);

  callback(null, { event });
};
