Describe Pizza()
Test: "It should return a pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.toppings;
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" };
['anchovies, pineapple'];

Test: "It should return a price for the pizza based on the selection of toppings and size the user has made"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.calculatePrice();
Expected Output: Pizza {toppings: ["anchovies", "pineapple"], size: "medium"};
15;
