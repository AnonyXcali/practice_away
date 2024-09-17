abstract class Character {
  hunger: number
  health: number

  abstract eat(): void
}

interface Human extends Character {
  heroId: number
}

interface Enemy extends Character {
  enemyId: number
}

class Spy implements Human, Enemy {
  heroId: number
  enemyId: number
  hunger: number
  health: number

  eat(): void {
    this.hunger -= 1
  }
}

const SpyOne: Human = new Spy()
const SpyTwo: Enemy = new Spy()