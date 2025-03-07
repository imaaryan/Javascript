let items = [2, 3, 4, 5];

function totalPrice(prices) {
  let total = prices.reduce((acc, num) => acc + num, 0);
  return total;
}

console.log(totalPrice(items));

