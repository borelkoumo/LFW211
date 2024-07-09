function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': howlllllll');
};

function Dog(name) {
  Wolf.call(this, name);
}

function inherits(parent) {
  function ChainLink() {}
  ChainLink.prototype = parent;
  return new ChainLink();
}

Dog.prototype = inherits(Wolf);

Dog.prototype.woof = function () {
  console.log(this.name + ': wooofffff');
};

const rufus = new Dog('Rufus');

rufus.woof(); // affiche "Rufus le chien : woof"
rufus.howl(); // affiche "Rufus le chien : awoooooooo"
