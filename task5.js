export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
    this.experience = 0; // Se reinicia al subir de lvl
  }

  gainExperience(points) {
    this.experience += points;
    const explimit = 100;
    while (this.experience >= explimit) {
      this.experience -= explimit;
      this.levelUp();
    }
  }
}