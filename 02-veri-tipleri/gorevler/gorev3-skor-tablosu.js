/*
  Görev 3: Oyun skor tablosu

  Verilen koddaki 5 hatayı (1 tanesi hata mesajı veriyor, 4 tanesi sessiz)
  bul ve düzelt.
*/

"use strict";

const level1Score = 1200;
const level2Score = 850;

const playerName = 'Ali\'nin Ejderhası';
let bonusScore = 0;

const totalScore = level1Score + level2Score + bonusScore;

console.log(`Oyuncu: ${playerName}`);
console.log(`Toplam puan: ${totalScore}`);
console.log("Puan tipi: " + typeof totalScore);
console.log("Tam 2050 puan mı: " + (totalScore === 2050));
