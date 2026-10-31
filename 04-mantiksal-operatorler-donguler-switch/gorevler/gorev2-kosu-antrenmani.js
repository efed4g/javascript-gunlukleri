/*
  Görev 2: Koşu antrenmanı

  Hedef mesafe targetInput'tan gelir, null ise 2000 olur (0 da geçerli bir hedef).
  Enerji 100'den başlar, her tur 12 azalır. Her 3. turun sonunda "Su molası!".
  Su molasından sonra enerji 30'un altındaysa antrenman bırakılır.
  En sonda kaç tur koşulduğu yazılır.
*/

"use strict";

let targetInput = 3000;

let targetMeters = targetInput ?? 2000;

let lap = 0;
let distance = 0;
let energy = 100;

while (distance < targetMeters) {
  lap++;
  distance += 400;
  energy -= 12;
  console.log(`${lap}. tur bitti, toplam: ${distance} m, enerji: ${energy}`);

  if (lap % 3 === 0) {
    console.log("Su molası!");
  }

  if (energy < 30) {
    console.log("Çok yoruldun, antrenmanı bırakıyorsun!");
    break;
  }
}

console.log(`Antrenman bitti! ${lap} tur koştun.`);
