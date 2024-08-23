(() => {
  let _userId: string | number | boolean;

  function _greeting(myText: string | number | boolean) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  // Creating own type for not rewrite code
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSizes: Sizes;
  shirtSizes = 'S';

  function greeting2(myText: UserID, sizes: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }
  const x = greeting2(111, 'S');
  const x2 = greeting2('Hola', 'L');
})();
