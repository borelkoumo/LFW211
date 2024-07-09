const EventEmitter = require('events');
const { once } = require('events');
const emitter = new EventEmitter();

// Simuler un événement de connexion
setTimeout(() => {
  emitter.emit('login', { username: 'exampleUser' });
}, 1000);

try {
  const [user] = await once(emitter, 'login');
  console.log('L\'utilisateur connecté est: ', user);
} catch (error) {
  console.error('Erreur lors de l\'écoute de l\'événement:', error);
}
