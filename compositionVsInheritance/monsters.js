class Monster {
  constructor(name) {
    this.name = name;
  }
  attack() {
    console.log(`${this.name} attacked`);
  }
  walk() {
    console.log(`${this.name} walked`);
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonter extends Monster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

// class SwimmingFlyingMonster, it's nos possible because
// I can only extend one Class
