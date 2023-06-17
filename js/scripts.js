// Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.calculatePrice = function() {
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
let myPizza = new Pizza();

function showPrice(priceToDisplay){
    let priceDiv = document.querySelector("div#totalCost");
    priceDiv.innerText = null;
    const p = document.createElement("p");
    const cost = priceToDisplay.calculatePrice();
    p.append(cost);
    priceDiv.append(p);
}

function handleForm(event){
    event.preventDefault();
    const selectedToppings = document.getElementsByName("topping");
    const selectedSize = document.querySelector("input[name='size']:checked").value;
    myPizza = new Pizza(selectedToppings, selectedSize);
    showPrice(myPizza);
    
}
window.addEventListener("load", function(){
    document.getElementById("customOrder").addEventListener("submit", handleForm);
})