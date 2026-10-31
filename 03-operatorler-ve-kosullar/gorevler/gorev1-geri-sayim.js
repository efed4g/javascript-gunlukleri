/*
  Görev 1: Geri sayım sayacı

  secondsLeft değerini gün, saat, dakika ve saniyeye çevir.
  Hiçbir sonuç ondalıklı olmasın, hesapta en az bir -= ve bir /= kullan.
  Örnek: 200000 için "Kalan süre: 2 gün 7 saat 33 dakika 20 saniye"
*/

"use strict";

let secondsLeft = 200000;

let seconds = secondsLeft % 60;
let rest = secondsLeft - seconds;
rest /= 60;

let minutes = rest % 60;
rest -= minutes;
rest /= 60;

let hours = rest % 24;
rest -= hours;
rest /= 24;

let days = rest;
console.log(`Kalan süre: ${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`);
