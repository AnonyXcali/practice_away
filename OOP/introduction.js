"use strict";
class Player {
    constructor(health, speed) {
        this.health = health;
        this.speed = speed;
    }
    stats() {
        console.log(`Mario has ${this.health} health & ${this.speed} speed`);
    }
    set setHealth(health) {
        this.health = health;
    }
    get getHealth() {
        return this.health;
    }
}
const Mario = new Player(10, 20);
console.log(Mario.getHealth);
