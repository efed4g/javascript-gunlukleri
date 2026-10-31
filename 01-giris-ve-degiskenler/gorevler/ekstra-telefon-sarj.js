/*
  Ekstra: Telefon şarj takibi

  Gün içinde video izleme ve müzik dinlemeyle şarjın nasıl azaldığını
  hesapla, en sonda bugün harcanan şarjı yazdır.
*/

"use strict";

const FULL_CHARGE = 100;
const ownerName = "Deniz";
const videoCost = 35;
const musicCost = 10;

let battery = FULL_CHARGE;
console.log("Günaydın " + ownerName + "! Şarj: %" + battery);

battery = battery - videoCost;
console.log("Video sonrası şarj: %" + battery);

battery = battery - musicCost;
let lastActivity = "müzik";
console.log("Son etkinlik:", lastActivity);
console.log("Kalan şarj: %" + battery);

const usedCharge = FULL_CHARGE - battery;
console.log("Bugün harcanan şarj:", usedCharge);
