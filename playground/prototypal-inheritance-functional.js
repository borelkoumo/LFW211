const Person = {
  sayHello: function () {
    console.log(`Hello. My name is ${this.name}. I come from ${this.country}`)
  }
}

const Cameroonian = Object.create(Person, {
  country: { value: 'Cameroon' }
})

const French = Object.create(Person, {
  country: { value: 'France' }
})

const borel = Object.create(Cameroonian, {
  name: { value: 'Borel' }
})

const marcon = Object.create(French, {
  name: { value: 'Macron' }
})

borel.sayHello()
marcon.sayHello()

console.log(Object.getOwnPropertyNames(borel))
console.log(Object.getPrototypeOf(borel))
console.log(Object.getOwnPropertyDescriptors(borel))
console.log(borel.country)
console.log(Person.isPrototypeOf(borel))
console.log(Cameroonian.isPrototypeOf(borel))
console.log(French.isPrototypeOf(borel))

const nehemie = Object.create(borel, {
  name: { value: 'Nehemie' }
})
nehemie.sayHello()
  
const kumba = Object.create(borel, {
  name: { value: 'Kumba', writable: true }
})
kumba.sayHello()
kumba.name = 'Kumbo'
kumba.sayHello()