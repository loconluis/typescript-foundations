(() => {
  let productTitle = 'MyAmazingProduct';
  productTitle = 'My amazing Product Changed';

  console.log('ProductTitle', productTitle);

  const productDescription = "I'm bla bla bla bla";
  console.log('productDescription', productDescription);

  const summary = `The summary for this Product
  named: ${productTitle} and
  the description: ${productDescription}`;

  console.log('summary', summary);
})();
