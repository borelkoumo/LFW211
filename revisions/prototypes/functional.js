const wolf = {
  howl: function () { console.log(this.name + ': awoooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function () { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
  name: { value: 'Rufus the dog' }
})

rufus.woof()
rufus.howl()
