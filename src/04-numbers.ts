(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice", productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log("CustomerAge", customerAge);

  // No se hace el tipado por inferencia sino detallado porque
  // la variable no esta iniciada
  let productInStock: number;
  productInStock = 2;
  console.log("productInStock", productInStock);
  if (productInStock > 10) {
    console.log("is Greater");
  }
  let discount = parseInt("100");
  console.log("discount", discount);
  if (discount <= 200) {
    console.log("apply");
  } else {
    console.log("not apply");
  }

  let hex = 0xfff;
  console.log("hex", hex);

  let bin = 0b1010;
  console.log("Bin", bin);
})();
