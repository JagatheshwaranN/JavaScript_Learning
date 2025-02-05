// Class

// Before Class
const pizza = {
    size: "medium",
    crust: "original",
    bake: function() {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    }
}
pizza.bake();

// After Class
// class Pizza {
//     constructor(pizzaType, pizzaSize, pizzaFlavour) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.flavour = pizzaFlavour;
//         this.toppings = "olives";
//     }

//     getToppings() {
//         return this.toppings;
//     }

//     setToppings(pizzaTopping) {
//         this.toppings = pizzaTopping;
//     }

//     bake() {
//         return console.log(`Baking a ${this.type} ${this.size} ${this.flavour} crust pizza with ${this.toppings}`);
//     }
// }

// const anotherPizza = new Pizza("Margarita", "Medium", "Original");
// anotherPizza.bake();
// const anotherPizza1 = new Pizza("Cheese", "Small", "Thin");
// anotherPizza1.setToppings("sausage");
// anotherPizza1.bake();

// Parent & Child Concepts

class Pizza {

    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class SpecialPizza extends Pizza {
     
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "Margarita";
    }

    slice() {
        console.log(`Your ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
    }
}

const specialPizza = new SpecialPizza("medium");
specialPizza.slice();

// Data Abstraction

// Factory Function

// function pizzaFactory(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//     return {
//         bake: () => {
//             console.log(`Baking a ${size} ${this.crust} crust pizza`);
//         }
//     }
// }

// const myPizza = pizzaFactory("large");
// myPizza.bake();
// console.log(myPizza.crust);

class MyPizza {

    crust = "original"; // Public Variable
    #sauce = "tomato"; // Private Variable
    constructor(pizzaSize) {
        this.size = pizzaSize;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getCrust(){
        return this.crust;
    }

    bake() {
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
}

const myPizza = new MyPizza("medium");
myPizza.bake();
// console.log(myPizza.#sauce); - Private Can't be accessed from Outside