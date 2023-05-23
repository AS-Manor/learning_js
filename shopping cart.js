let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "baguette", type: "food", quantity: 3, price: 1.29 },
    { name: "aubergine", type: "food", quantity: 4, price: 2.59 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 },
  ];
  const foodDiscount = 20 // declaring a variable to hold the discount

  function shopTotal (cart, foodDiscount, type) {
    let total = 0;
    for (const item of cart) {
        let itemTotal = item.price * item.quantity;
        if (type === "any"|| TYPE === item.type) {
            const discount = total * (foodDiscount) / 100; //calculation of the discount
            itemTotal -= discount;
        }
        total += itemTotal;
    }
    return total;
  }
  console.log(shopTotal(shoppingCart, 45, "any"))