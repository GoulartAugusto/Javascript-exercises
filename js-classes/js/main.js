// Javascript Classes

//This is an example of what a Class is and what can it do.

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust() {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
        );
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();

// This is an more complicated example of class with the same funciton

/*

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
myPizza.bake();

*/