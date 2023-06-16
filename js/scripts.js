// Business Logic

//Create a Pizza constructor 
//Pizza (toppings, size)
function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size;
}

//prototype.addToppings()
//takes user input of toppings selected
// Pizza.prototype.addToppings(topping) = function(){

// }

//prototype.selectSize()
//takes user input for size


//prototype.calculate total price
//takes number of toppings and size selected and returns a total price.
//Price calculation: enter toppings into an array
//if toppingsArray.length === 3 then price = 3
//if toppingsArray.length === 2 then price = 2
//if toppingsArray.length === 1 then price = 1
Pizza.prototype.calculatePrice = function(){
    if (this.size === "small"){
        pizzaPrice = 10;
        
    }
    else if(this.size === "medium"){
        pizzaPrice = 15;
    }
    else if(this.size === "large"){
        pizzaPrice = 20;
    }
    return pizzaPrice;
}




// UI Logic