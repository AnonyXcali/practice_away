"use strict";
class Animal {
    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    move() {
        console.log("I am moving");
    }
    makeNoise() {
        console.log("I am making noise");
    }
    set setCoordX(x) {
        this.coordX = x;
    }
    set setCoordY(y) {
        this.coordY = y;
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("I'm barking!");
    }
    returnToOwner() {
        console.log(`I'm at ${this.coordX}, ${this.coordY}`);
    }
}
class Cat extends Animal {
}
const dog = new Dog();
dog.makeNoise();
dog.setCoordX = 10;
dog.setCoordY = 20;
dog.returnToOwner();
