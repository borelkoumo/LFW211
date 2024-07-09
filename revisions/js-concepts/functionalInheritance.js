'use strict';

const wolf = {
  howl() {
    console.log(`${this.name}: howllllll`);
  },
};

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(`${this.name}: wooofffffff`);
    },
  },
});

const romulus = Object.create(dog, {
  name: {
    value: 'Romulus le chien',
  },
});


romulus.woof()
romulus.howl()