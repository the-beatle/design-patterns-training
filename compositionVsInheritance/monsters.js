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

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name };
  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name };
  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster),
  };
}

const obj = flyingSwimmingMonsterCreator("Monster");
obj.swim();
obj.fly();
