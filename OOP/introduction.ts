class Player {
  private health: number;
  private speed: number;

  constructor(health: number, speed: number) {
    this.health = health;
    this.speed = speed;
  }
  
  stats(): void {
    console.log(`Mario has ${this.health} health & ${this.speed} speed`)
  }

  set setHealth(health: number) {
    this.health = health
  }

  get getHealth(): number {
    return this.health
  }
}


const Mario = new Player(10, 20)
console.log(Mario.getHealth)