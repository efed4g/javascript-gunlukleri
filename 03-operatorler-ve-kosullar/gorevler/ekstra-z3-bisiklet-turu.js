/*
  Ekstra (Zor): Bisiklet turu kararı

  Rüzgar sensörü boş metin gönderirse tur ertelenir ("0" geçerli bir değerdir).
  Öğleden sonra hava 3 derece ısınır. Uygunluk puanı 100'den başlar, yağmur
  ihtimali kadar düşer; rüzgar 30'dan fazlaysa -25, tur gecedeyse -20.
  60 ve üstü "Harika gün", 30-59 "dikkatli ol", altı "evde kal".

  Verilen koddaki 6 hata düzeltildi:
  - sıcaklık metni sayıya çevrilmediği için "18" + 3 = "183" oluyordu
  - windText == 0 kontrolü rüzgarsız havayı ("0") bozuk sensör sanıyordu, === "" yapıldı
  - score =- rainChance yerine score -= rainChance
  - ? operatöründe eksik olan : eklendi
  - else if sırası büyükten küçüğe düzeltildi
  - tourCount++ eski değeri yazıyordu, ++tourCount yapıldı
*/

"use strict";

let temperatureText = "18";
let windText = "12";
let rainChance = 30;
let isNight = false;
let tourCount = 4;

let temperature = +temperatureText;
let wind = +windText;

if (windText === "") {
  console.log("Rüzgâr verisi yok, tur ertelendi.");
} else {
  temperature += 3;
  console.log("Öğleden sonra: " + temperature + "°C");

  let score = 100;
  score -= rainChance;
  if (wind > 30) {
    score -= 25;
  }
  if (isNight) {
    score -= 20;
  }
  console.log("Uygunluk puanı: " + score);

  let item = temperature < 15 ? "mont" : "tişört";
  console.log("Yanına al: " + item);

  if (score >= 60) {
    console.log(`Harika gün! Bu yılki ${++tourCount}. turun olacak.`);
  } else if (score >= 30) {
    console.log("Gidebilirsin ama dikkatli ol.");
  } else {
    console.log("Bugün evde kal.");
  }
}
