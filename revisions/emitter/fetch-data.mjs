import EventEmitter, { once } from "events";

const myEE = new EventEmitter();

// Création d'une fonction async pour gérer le flux avec await
async function fetchData () {
  try {
    const data = await once(myEE, 'data');
    console.log('hello', data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Appel de la fonction fetchData
fetchData();

// Simulation de l'émission de l'événement 'data'
setTimeout(() => {
  myEE.emit('data', 1, 2, 3);
}, 1000);
