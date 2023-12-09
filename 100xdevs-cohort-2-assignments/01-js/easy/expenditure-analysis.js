/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let map = new Map();
    const n = transactions.length
    for (let i = 0; i < n; i++) {
        let category = transactions[i].category
        let price = transactions[i].price
        let toAdd = 0;
        if (map.has(category))
            toAdd = map.get(category)
        map.set(category, toAdd + price);
    }
    let result = [];
    for (let [category, totalSpent] of map.entries()) {
        result.push({ category, totalSpent });
    }
    return result;
}

module.exports = calculateTotalSpentByCategory;
