/*
  Görev 4 (Zor): Basketbol skorbordu

  Takımların skorlarını sabitlerle hesapla ve aradaki farkı yaz.
  Devre arasında leftSide ve rightSide değerlerini yer değiştir,
  üçüncü çeyrekte ev sahibinin skorunu güncelle.
*/

"use strict";

const homeTwos = 8;
const homeThrees = 3;
const awayTwos = 6;
const awayThrees = 5;
const extraThrees = 2;

const TWO_POINTS = 2;
const THREE_POINTS = 3;
const homeTeam = "Kartallar";
const awayTeam = "Aslanlar";

let homeScore = homeTwos * TWO_POINTS + homeThrees * THREE_POINTS;
const awayScore = awayTwos * TWO_POINTS + awayThrees * THREE_POINTS;

console.log("Skor:", homeTeam, homeScore, "-", awayScore, awayTeam);
console.log("Fark:", homeScore - awayScore);

let leftSide = homeTeam;
let rightSide = awayTeam;
console.log("Sol taraf:", leftSide);
console.log("Sağ taraf:", rightSide);

console.log("--- Devre arası: taraflar değişti ---");
const temp = leftSide;
leftSide = rightSide;
rightSide = temp;
console.log("Sol taraf:", leftSide);
console.log("Sağ taraf:", rightSide);

homeScore = homeScore + extraThrees * THREE_POINTS;
console.log("Güncel skor:", homeTeam, homeScore, "-", awayScore, awayTeam);
