/**
 * Exercice 3 : Tableaux
 * Calculs sur un tableau de notes.
 */
const notes = [12, 8, 15, 10, 7];

// 1. Moyenne
const somme = notes.reduce((acc, val) => acc + val, 0);
const moyenne = somme / notes.length;

// 2. Meilleure note
const meilleureNote = Math.max(...notes);

// 3. Nombre de notes >= 10
const nbAdmis = notes.filter(note => note >= 10).length;

// Résumé
console.log("Notes :", notes);
console.log(`Moyenne : ${moyenne.toFixed(2)}`);
console.log(`Meilleure note : ${meilleureNote}`);
console.log(`Nombre de notes ≥ 10 : ${nbAdmis}`);