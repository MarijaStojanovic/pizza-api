const pizzas = require('../data/pizzas.json');

module.export.getPizzas = (id) => {
  if (!id) {
    return pizzas;
  }
  const pizza = pizzas.find(pizza => pizza.id == id);

  if (pizza) {
    return pizza;
  }
  throw new Error('The pizza you requested was not found');
};