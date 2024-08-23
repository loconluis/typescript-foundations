// Modules

import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Prod1',
  createdAt: new Date(),
  stock: 100,
});
addProduct({
  title: 'Prod1',
  createdAt: new Date(),
  stock: 1001,
  size: 'L',
});

console.log(products);
const total = calcStock();
console.log('Total', total);
