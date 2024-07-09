function Wolf (name) {
  this.name = name
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooo')
}

function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

function inherit (proto) {
  function ChainLink () { }
  ChainLink.prototype = proto
  return new ChainLink()
}

Dog.prototype = inherit(Wolf.prototype)