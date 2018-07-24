const pizzas = require('../data');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.export.getPizzas = (id) => {
  if (typeof orderId === 'undefined') {
    return docClient.scan({
      TableName: 'pizza-orders'
    }).promise()
    .then(result => result.Items);
  }
  return docClient.get({
    TableName: 'pizza-orders',
    Key: {
      orderId: orderId
    }
  }).promise()
  .then(result => result.Item);
};