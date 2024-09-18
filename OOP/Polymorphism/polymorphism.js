"use strict";
/**Polymorphism*/
class Hero {
    move() {
        console.log("I'm moving");
    }
    eat() {
        console.log("I'm eating");
    }
}
class Archer extends Hero {
    attack() {
        console.log("I'm firing arrows!");
        this.arrows -= 1;
    }
}
class Mage extends Hero {
    attack() {
        console.log("I'm using magic!");
        this.mana -= 1;
    }
}
class Knight extends Hero {
    attack() {
        console.log("I'm swinging my sword");
    }
}
class Tribe {
    set setHeros(heroes) {
        this.heroes = heroes;
    }
    attack() {
        for (let hero of this.heroes) {
            hero.attack();
        }
    }
}
const archer = new Archer();
const mage = new Mage();
const knight = new Knight();
archer.attack();
mage.attack();
knight.attack();
let herroArray = [archer, mage, knight];
const tribe = new Tribe();
tribe.setHeros = herroArray;
tribe.attack();
