/**Polymorphism*/

abstract class Hero {
  hunger: number
  health: number

  abstract attack(): void

  move() {
    console.log("I'm moving")
  }

  eat() {
    console.log("I'm eating")
  }
}

class Archer extends Hero {
  arrows: number

  attack(): void {
    console.log("I'm firing arrows!")
    this.arrows -= 1
  }
}

class Mage extends Hero {
  mana: number

  attack(): void {
    console.log("I'm using magic!")
    this.mana -= 1
  }
}


class Knight extends Hero {
  shield: number
  
  attack(): void {
    console.log("I'm swinging my sword")
  }
}

class Tribe {
  private heroes: Hero[]

  set setHeros(heroes: Hero[]) {
    this.heroes = heroes
  }

  attack(): void {
    for(let hero of this.heroes) {
      hero.attack()
    }
  }
}

const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

archer.attack()
mage.attack()
knight.attack()

let herroArray: Hero[] = [archer, mage, knight]
const tribe = new Tribe()

tribe.setHeros = herroArray
tribe.attack()