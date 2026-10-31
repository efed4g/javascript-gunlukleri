/*
  Görev 4 (Zor): Boss savaşı hesaplayıcı

  Hasar = saldırı gücü - zırh. Kritik vuruşta hasar 2 katına çıkar.
  Hasar 0 veya altındaysa sadece "Zırh çok güçlü, boss'a hasar veremiyorsun!" yaz.
  Değilse vuruş başına hasarı, gereken vuruş sayısını (can 1 bile kalsa bir vuruş daha),
  zorluğu (1-3 Kolay, 4-6 Orta, 7 ve üstü Zor) ve son vuruştan önce boss'un canını yaz.
*/

"use strict";

let bossHealth = 250;
let attackPower = 55;
let bossArmor = 15;
let isCritical = true;

let damage = attackPower - bossArmor;
if (isCritical) {
  damage *= 2;
}

if (damage <= 0) {
  console.log("Zırh çok güçlü, boss'a hasar veremiyorsun!");
} else {
  let rest = bossHealth % damage;
  let hits = (bossHealth - rest) / damage + (rest === 0 ? 0 : 1);
  let difficulty = hits <= 3 ? "Kolay" : hits <= 6 ? "Orta" : "Zor";
  let lastHealth = rest === 0 ? damage : rest;

  console.log(`Vuruş başına hasar: ${damage}`);
  console.log(`Gereken vuruş: ${hits}`);
  console.log(`Zorluk: ${difficulty}`);
  console.log(`Son vuruştan önce boss'un canı: ${lastHealth}`);
}
