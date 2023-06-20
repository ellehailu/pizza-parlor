// Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.calculatePrice = function() {
    let pizzaPrice;
    const checkedToppings = document.querySelectorAll('input[name="topping"]:checked');
    let toppingsArray = 0;

    checkedToppings.forEach((checkbox) => {
        if(checkbox.checked){
            toppingsArray++;
        }
    })
   //try to consolidate this logic and express it more conscisely
    if (this.size === "small"){
        pizzaPrice = 10;
        
    }
    else if(this.size === "medium"){
        pizzaPrice = 12
    }
    else if(this.size === "large"){
        pizzaPrice = 14;
    }

    if(toppingsArray <= 2){
        return pizzaPrice;
    }
    else if(toppingsArray <= 4){
        pizzaPrice = pizzaPrice + 2;
    }
    else if(toppingsArray <= 6){
        pizzaPrice = pizzaPrice + 4;
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
    p.append("your order is coming right up! \nYour total cost is: $", cost);
    priceDiv.append(p);
}

function handleForm(event){
        event.preventDefault();
        const selectedToppings = document.getElementsByName("topping");
        const selectedSize = document.querySelector("input[name='size']:checked").value;
        myPizza = new Pizza(selectedToppings, selectedSize);
        showPrice(myPizza);
        document.getElementById("customOrder").reset();
    }
    
window.addEventListener("load", function(){
    document.getElementById("customOrder").addEventListener("submit", handleForm);
})
