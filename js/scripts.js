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
Pizza.prototype.calculatePrice = function(){
    let pizzaPrice = 0;
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