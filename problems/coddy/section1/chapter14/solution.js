function analyzeBudget(prices, items, budget) {
  // Write code here
  // prices에서 budget 보다 작은 값의 Index 찾기
  // 해당 index로 items에서 요소 찾기
  let pricesWithinBudgetIdx = [];
  prices.forEach((price, idx) => {
    if (price <= budget) {
      pricesWithinBudgetIdx.push(idx);
    }
  });

  let affordableItems = [];
  pricesWithinBudgetIdx.forEach((idx) => {
    affordableItems.push(`${items[idx]}`);
  });
  affordableItems = affordableItems.join(',');

  const pricesWithinBudget = prices.filter((price) => price <= budget);
  const totalBudgetNeeded = pricesWithinBudget.reduce(
    (prev, curr) => prev + curr,
  );
  const numOfItemsOutOfBudget = items.length - pricesWithinBudget.length;

  const prompt = `Affordable items: ${affordableItems}
Total budget needed: ${totalBudgetNeeded}
Items out of budget: ${numOfItemsOutOfBudget}`;
  console.log(prompt);
}

// Test cases
// analyzeBudget([10, 20, 5, 15], ['Notebook', 'Pen', 'Eraser', 'Bag'], 10);
// analyzeBudget([50, 30, 15, 40, 25], ['Shoes', 'Hat', 'Socks', 'Jacket', 'Gloves'], 25);
// analyzeBudget([100, 200, 50, 80, 90], ['TV', 'Phone', 'Book', 'Lamp', 'Fan'], 100);
// analyzeBudget([10, 20, 30, 40, 50], ['A', 'B', 'C', 'D', 'E'], 15);
