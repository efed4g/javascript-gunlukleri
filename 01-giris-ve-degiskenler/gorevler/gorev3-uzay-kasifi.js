/*
  Görev 3: Uzay Kaşifi seviye raporu

  Verilen koddaki 4 hatayı bul ve düzelt.
  Düzeltilen hatalar:
  - "use strict" dosyanın en üstünde değildi
  - lives sonradan değiştiği halde const ile tanımlanmıştı
  - score yerine scroe yazılmıştı
  - aynı satırdaki iki console.log arasında noktalı virgül yoktu
*/

"use strict";

const playerName = "Mira";
const startScore = 120;
let lives = 3;
let score = startScore;

score = score + 50;

lives = lives - 1;

console.log("Oyuncu: " + playerName);
console.log("Puan:", score);
console.log("Kalan can:", lives);
console.log("Seviye bitti!");
console.log("Tebrikler!");
