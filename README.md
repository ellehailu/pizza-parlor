# _Pizza Parlor_

#### By _**Elle Hailu**_

#### _A website for a pizza company to recieve online orders._

## Technologies Used

- _JavaScript_
- _HTML_
- _CSS_

## Description

- A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

- The application allows the user to choose toppings and size for the pizza they'd like to order.
- The application includes a pizza object constructor with properties for toppings and size.
It also includes a prototype method for the cost of a pizza depending on the selections chosen.

## Setup/Installation Requirements

- _Clone this repository to your desktop_
- _Navigate to the top level of the directory_
- _Open the index.html file in your browser_

## Known Bugs

- _No known bugs in the current version._

## Tests

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

## License

_If you run into any issues or have any questions, ideas, or concerns please reach out to Elle Hailu (hailu.elle@gmail.com)._

_MIT_[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) _2023_ _Elle Hailu_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
