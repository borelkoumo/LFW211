'use strict'
const { readdirSync, statSync } = require('fs')
const { resolve, basename, join, sep } = require('path')

function printDirectory (path) {
  // Utilisation de `resolve` pour obtenir un chemin absolu et normalisé
  const normalizedPath = resolve(path);

  try {
    const stat = statSync(normalizedPath);
    if (stat.isDirectory()) {
      // Affichage du nom du répertoire avec un '/' à la fin pour indiquer un dossier
      console.group(basename(normalizedPath) + sep);
      // Lecture et traitement récursif de chaque fichier/dossier dans le répertoire
      const files = readdirSync(normalizedPath);
      files.forEach(file => {
        printDirectory(join(normalizedPath, file));  // Appel récursif avec le chemin complet
      });
      console.groupEnd();
    } else if (stat.isFile()) {
      // Affichage du nom de fichier simple
      console.log(basename(normalizedPath));
    } else {
      console.log('Unknown type:', basename(normalizedPath));
    }
  } catch (error) {
    console.error('Error accessing:', normalizedPath, error.message);
  }
}

// Utilisation du premier argument de la ligne de commande comme chemin d'entrée
printDirectory(process.argv[2]);
