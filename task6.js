export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
    this.party = [];
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
    this.experience = 0;
  }

  gainExperience(points) {
    this.experience += points;
    const explimit = 100;
    while (this.experience >= explimit) {
      this.experience -= explimit;
      this.levelUp();
    }
  }

  addToParty(player) {
    this.party.push(player);
  }

  removeFromParty(player) {
    this.party = this.party.filter(member => member !== player);
  }
}
