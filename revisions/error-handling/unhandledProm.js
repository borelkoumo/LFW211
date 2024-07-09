// Fonction qui retourne une promesse qui sera rejetée
function createRejectedPromise (val) {
  return new Promise((resolve, reject) => {
    if (val > 0) {
      resolve(val)
    } else {
      reject(new Error("This promise will be rejected"));
    }
  });
}

// Appel de la fonction sans gestionnaire de rejet
createRejectedPromise(1);

// process.on('unhandledPromiseRejection')
