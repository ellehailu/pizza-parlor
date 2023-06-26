// Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.price = this.calculatePrice()
}

Pizza.prototype.calculatePrice = function() {
    let pizzaPrice = 0;
    const toppingsCount = this.toppings.length;

//maybe try switch cases
    if (this.size === "small"){
        pizzaPrice = 10;
        
    }
    else if(this.size === "medium"){
        pizzaPrice = 12
    }
    else if(this.size === "large"){
        pizzaPrice = 14;
    }

    if(toppingsCount <= 2){
        return pizzaPrice;
    }
    else if(toppingsCount <= 4){
        pizzaPrice += 2;
    }
    else if(toppingsCount <= 6){
        pizzaPrice += 4;
    }
    return pizzaPrice;
}
// UI Logic
let myPizza = new Pizza([], "");

function showPrice(priceToDisplay){
    let priceDiv = document.querySelector("div#totalCost");
    priceDiv.innerText = null;
    const p = document.createElement("p");
    const cost = priceToDisplay.price;
    p.append("your order is coming right up! \nYour total cost is: $" + cost.toString());
    priceDiv.append(p);
}

function handleForm(event){
        event.preventDefault();
        const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'));
        const selectedSize = document.querySelector("input[name='size']:checked").value;
        myPizza = new Pizza(selectedToppings, selectedSize);
        showPrice(myPizza);
        document.getElementById("customOrder").reset();
    }
    
window.addEventListener("load", function(){
    document.getElementById("customOrder").addEventListener("submit", handleForm);
})