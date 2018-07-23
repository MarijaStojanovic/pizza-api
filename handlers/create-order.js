const pizzas = require('../data');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require('minimal-request-promise');

module.export.createOrder = (order) => {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error('To order pizza please provide pizza type and address where pizza should be delivered');
  }
  return {};
};
