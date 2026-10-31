/*
  Ekstra (Zor): Oyun XP barı ve seviye atlama

  Kazanılan XP metin olarak geliyor; çift XP etkinliği varsa 2 katına çıkar.
  Gereken XP = seviye * 100. XP yetiyorsa seviye atlanır (en fazla 2 kez,
  ikinci kontrol yeni seviyenin gereken XP'siyle yapılır).
  Sonra "Seviye L: xp/gereken XP (%yüzde)" ve rütbe yazılır:
  5'in altı Çaylak, 10'un altı Savaşçı, değilse Efsane.
*/

"use strict";

let level = 3;
let xp = 250;
let gainedXPText = "180";
let isDoubleXP = false;

let gained = +gainedXPText;
if (isDoubleXP) {
  gained *= 2;
}

console.log(gained === 0 ? "Bu maçta XP kazanılmadı." : `Kazanılan XP: ${gained}`);

xp += gained;

let needed = level * 100;
if (xp >= needed) {
  xp -= needed;
  level++;
  console.log(`Seviye atladın! Yeni seviye: ${level}`);
  needed = level * 100;

  if (xp >= needed) {
    xp -= needed;
    level++;
    console.log(`Seviye atladın! Yeni seviye: ${level}`);
    needed = level * 100;
  }
}

let raw = xp * 100;
let percent = (raw - raw % needed) / needed;
console.log(`Seviye ${level}: ${xp}/${needed} XP (%${percent})`);

let rank = level < 5 ? "Çaylak" : level < 10 ? "Savaşçı" : "Efsane";
console.log(`Rütbe: ${rank}`);
