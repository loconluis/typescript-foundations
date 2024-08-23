(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };

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

  console.log('products', products);
})();
