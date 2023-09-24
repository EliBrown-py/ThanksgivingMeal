
const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },
    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost: 25.0,
    senior_discount: .10,

    prettyPrint: function () {
        // Collate the menu here
        let starterFruit = this.starter.fruit;
        let starterWine = this.starter.wine;
        let entreeMeat = this.entree.meat;
        let entreeAlt = this.entree.alt;
        let entreePotato = this.entree.vegetables.potatoes;
        let entreeGreen = this.entree.vegetables.greens;
        let entreeSalad = this.entree.vegetables.salad;
        let entreeBread = this.entree.sides.bread;
        let entreePasta = this.entree.sides.pasta;
        let dessertIce = this.dessert.ice_cream;
        let dessertCake = this.dessert.cake;

        // display the content of the starter, the entree and the dessert
        let menuStr = `</br>Starters: ${starterFruit}, ${starterWine} </br>Entrees: ${entreeMeat}, 
        or ${entreeAlt}, ${entreePotato}, ${entreeGreen}, ${entreeSalad}, ${entreeBread}, ${entreePasta} </br>Dessert: ${dessertIce}, ${dessertCake}`;
        return menuStr;

    },
    totalPrice(isSenior) {
        let total = null;
        // display the total price, given indicator isSenior - true or false
        if (isSenior) {
            total = this.total_cost - (this.total_cost * this.senior_discount);
        } else {
            total = this.total_cost
        }
        return total;
    },
    totalCalories: function () {
        // Add the total calories
        return (this.starter.calories + this.entree.calories + this.dessert.calories)
    },
    caloriesFrom: function (indicator) {
        let cals = null;
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        if (indicator == 1) {
            cals = this.starter.calories;
        } else if (indicator == 2) {
            cals = this.entree.calories;
        } else if (indicator == 3) {
            cals = this.dessert.calories
        }
        return cals;
    }
};

let price = document.querySelector(".priceInfo");
let greet = document.querySelector(".greeting");
let meal = document.querySelector(".fullMeal");
let cal = document.querySelector(".calorieInfo");


greet.innerHTML = `Enjoy Your Thanksgiving This Year!`
meal.innerHTML = `Our menu includes: </br> ${thanksgivingMeal.prettyPrint()}`;
console.log(thanksgivingMeal.prettyPrint());
price.innerHTML = `Cost:$${thanksgivingMeal.totalPrice(false)}
</font> </br> Seniors get a 10% discount!</br> Senior cost: $${thanksgivingMeal.totalPrice(true)}`;
console.log("Regular Price: " + thanksgivingMeal.totalPrice(false));
console.log("Senior Price: " + thanksgivingMeal.totalPrice(true));
cal.innerHTML = `Worried about the calories? total damage calorie count is about ${thanksgivingMeal.totalCalories()}. 
</br>Calories are as follows: </br>Starter:${thanksgivingMeal.caloriesFrom(1)} calories</br>Entree: ${thanksgivingMeal.caloriesFrom(2)}
calories</br>Dessert: ${thanksgivingMeal.caloriesFrom(3)} calories`

console.log(thanksgivingMeal.caloriesFrom(1) + " Starter");
console.log(thanksgivingMeal.caloriesFrom(2) + " Entree");
console.log(thanksgivingMeal.caloriesFrom(3) + " Dessert");
console.log(thanksgivingMeal.totalCalories() + " total calories.");