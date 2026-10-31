/*
  Görev 2: Maç sonucu ve puan

  Başlangıç kodundaki galibiyet kontrolüne şunları ekle:
  - goller eşitse "Berabere!"
  - kazanan 3 veya daha fazla farkla kazandıysa "Farklı galibiyet!"
  - ev sahibinin puanı (galibiyet 3, beraberlik 1, mağlubiyet 0) ? ile hesaplanıp yazılsın
*/

"use strict";

let homeGoals = 1;
let awayGoals = 4;

if (homeGoals > awayGoals) {
  console.log("Ev sahibi kazandı!");
  if (homeGoals - awayGoals >= 3) {
    console.log("Farklı galibiyet!");
  }
} else if (homeGoals === awayGoals) {
  console.log("Berabere!");
} else {
  console.log("Deplasman kazandı!");
  if (awayGoals - homeGoals >= 3) {
    console.log("Farklı galibiyet!");
  }
}

let homePoints = homeGoals > awayGoals ? 3 : homeGoals === awayGoals ? 1 : 0;
console.log(`Ev sahibi bu maçtan ${homePoints} puan aldı.`);
