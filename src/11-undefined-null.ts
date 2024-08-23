(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Hi';

  function hi(name: string | null) {
    let hello = 'Hi ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiSimple(name: string | null) {
    let hello = 'Hi ';
    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }

  hi('Alvaro');
  hi(null);
  console.log('********');
  hiSimple('Alvaro');
  hiSimple(null);
})();
