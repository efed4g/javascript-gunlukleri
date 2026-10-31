/*
  Ekstra (Zor): Nabız bölgesi hesaplayıcı

  Nabız boşsa "Nabız okunamadı, saati kontrol et." yazılır.
  Maksimum nabız = 220 - yaş. Nabız maksimumun üstündeyse uyarı verilir ve
  başka bir şey yazılmaz. Değilse tam sayı yüzde, bölge, kondisyon aralığı
  (maksimumun %70 - %80'i) ve durum yazılır.
*/

"use strict";

let age = 20;
let heartRateText = "150";

if (heartRateText === "") {
  console.log("Nabız okunamadı, saati kontrol et.");
} else {
  let heartRate = +heartRateText;
  let maxHR = 220 - age;
  console.log(`Maksimum nabız: ${maxHR}`);

  if (heartRate > maxHR) {
    console.log("Dur! Nabzın maksimumun üstünde, yavaşla.");
  } else {
    let raw = heartRate * 100;
    let percent = (raw - raw % maxHR) / maxHR;

    let zone;
    if (percent < 50) {
      zone = "Isınma bile değil";
    } else if (percent < 60) {
      zone = "Bölge 1: Isınma";
    } else if (percent < 70) {
      zone = "Bölge 2: Yağ yakımı";
    } else if (percent < 80) {
      zone = "Bölge 3: Kondisyon";
    } else if (percent < 90) {
      zone = "Bölge 4: Eşik";
    } else {
      zone = "Bölge 5: Maksimum";
    }
    console.log(`Şu anki nabız: %${percent} → ${zone}`);

    let low = maxHR * 70;
    low = (low - low % 100) / 100;
    let high = maxHR * 80;
    high = (high - high % 100) / 100;

    let status = percent < 70 ? "Hedefin altında" : percent < 80 ? "Hedefte" : "Hedefin üstünde";
    console.log(`Kondisyon aralığın: ${low}-${high} (${status})`);
  }
}
