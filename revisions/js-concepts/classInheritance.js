class Wolf {
  constructor(name) {
    this.name = name;
  }
  howl() {
    console.log(this.name + ': howllllllll');
  }
}
class Dog extends Wolf {
  constructor(name) {
    super(name);
  }
  woof() {
    console.log(this.name + ': wooooffff');
  }
}

const romulus = new Dog('Romulus');
romulus.woof();
romulus.howl();

console.log(Object.getPrototypeOf(romulus) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype);
