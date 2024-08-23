// DO NOT USE ANY

(() => {
  let myDynamicVar: any;
  myDynamicVar = 1;
  myDynamicVar = '2';

  myDynamicVar = 'Hola';
  // Forcing any type variable into a types
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log('rta', rta);
})();
