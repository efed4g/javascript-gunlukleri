/*
  Görev 3: Hava durumu asistanı

  Rüzgar ölçümü yoksa (null) 15 km/s kabul edilir, 0 geçerli bir ölçümdür.
  Bisiklet günü: sıcaklık 10 ile 30 arası, yağış yok ve rüzgar 40'tan az.
  Her hava durumu için sadece kendi tavsiyesi yazılır.

  Verilen koddaki 4 hata düzeltildi:
  - JavaScript'te or yok, || kullanıldı
  - windInput || 15 rüzgarı 0 olan ölçümü 15'e çeviriyordu, ?? kullanıldı
  - sıcaklık koşulunda || yerine && olmalıydı
  - "güneşli" case'inde break eksikti
*/

"use strict";

let temperature = 22;
let condition = "güneşli";
let windInput = 0;

let wind = windInput ?? 15;
console.log(`Rüzgâr: ${wind} km/s`);

let isRainy = condition === "yağmurlu" || condition === "sağanak";

let goodForBike = temperature >= 10 && temperature <= 30 && !isRainy && wind < 40;

if (goodForBike) {
  console.log("Bisiklet için harika bir gün!");
} else {
  console.log("Bugün bisiklet yok.");
}

switch (condition) {
  case "güneşli":
    console.log("Güneş kremi sür.");
    break;
  case "yağmurlu":
  case "sağanak":
    console.log("Şemsiye al.");
    break;
  case "karlı":
    console.log("Bot giy.");
    break;
  default:
    console.log("Bilinmeyen hava durumu!");
}
