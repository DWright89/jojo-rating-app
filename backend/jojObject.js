class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Jojo extends Character {
  constructor(name, age, pack, luck, image) {
    super (name, age);
    this.pack = pack;
    this.luck = luck;
    this.image = image;
  }
}


export { Character, Jojo } 