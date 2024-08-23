(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });

    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`The total is ${rta}`);
  };

  printTotal([1, 2, 3, 4, 5, 6]);
})();
