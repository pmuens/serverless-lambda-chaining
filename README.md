# Serverless Lambda chaining

Serverless service which shows how one can chain Lambdas through SNS.
The [configuration](https://serverless.com/framework/docs/providers/aws/events/sns/#sns) which triggers the chain mechanims is defined on [serverless.yml](/serverless.yml). 

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-lambda-chaining` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-lambda-chaining`
3. Run `npm install`
4. Replace the `accountId` in the `handler.js` file with your AWS account id
5. Deploy with `serverless deploy`

## How to use

1. Run `serverless invoke --function firstLambda` to trigger the chaining process (this will publish a message to the SNS topic called `dispatcher` the `secondLambda` will listen to)
2. Run `serverless logs --function secondLambda` to see that the message which was send to the `dispatcher` topic successfully triggered the `secondLambda` function

## AWS services used

- Lambda
- SNS

## References
https://serverless.com/framework/docs/providers/aws/events/sns/#sns
