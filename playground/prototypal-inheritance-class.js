class Wolf {
  constructor (name) {
    this.name = name
  }
  howl () { console.log(this.name + ': awoooooooo') }
}

class Dog extends Wolf {
  constructor(name) {
    super(name + ' the dog')
  }
  woof () { console.log(this.name + ': woof') }
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

/**
 * 
 * Dog a la propriété "prototype" qui contient sa signature (classe parent + constructor + woof)
 * 
 * Mais Dog a aussi une propriété [[Prototype]] qui contient une référence vers 
 * la signature de la classe parent (ie une référence vers la signature de Wolf)
 * 
 * Ainsi, Dog.prototype renvoie la signature de Dog, et Object.getPrototypeOf(Dog) 
 * renvoie la référence vers la classe parent (qui est Wolf ici)
 * 
 */

console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true
console.log(Object.getPrototypeOf(Dog)) //[class Wolf]
console.log(Dog.prototype) //Wolf {}
console.log(Object.getPrototypeOf(Dog.prototype)) //{}
console.log(Object.getPrototypeOf(Wolf)) //{}
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true
