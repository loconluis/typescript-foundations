(() => {
  const login = (data: { email: string; password: string }) => {
    console.log('email & pwd', data.email, data.password);
  };

  login({ email: '1@e.net', password: '122' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
