const pizzas = require('../data');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.export.updatePizzas = (id, updates) => {
  if (!id || !updates || !updates.pizza || !updates.address) {
    throw new Error('Order ID and updates object are required for updating the order');
  }
  return docClient.update({
    TableName: 'pizza-orders',
    Key: {
      orderId: id,
      orderStatus: 'pending',
    },
    // Item: {
    //   pizza: request.pizza,
    //   address: request.address,
    //   orderStatus: 'pending',
    // },
    UpdateExpression: 'set pizza = :p, address=:a',
    ExpressionAttributeValues: {
      ':p': updates.pizza,
      ':a': updates.address
    },
    ReturnValues: 'ALL_NEW'
  }).promise()
  .then((result) => {
    console.log('Order is updated!', result);
    return result.Attributes;
  })
  .catch((updateError) => {
    console.log(`Oops, order is not updated :(`, saveError);
    throw updateError;
  });
};