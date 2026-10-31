/*
  Görev 3: Takdir mi, teşekkür mü?

  Disiplin cezası olan belge alamaz. Ceza yoksa ortalama 85 ve üstü Takdir,
  70 ile 85 arası (85 hariç) Teşekkür, 70'in altı belge yok.
  Dönem ortalamaları sistemden metin olarak geliyor.

  Verilen koddaki 4 hata düzeltildi:
  - metin olan ortalamalar toplanmak yerine birleşiyordu, tekli + ile sayıya çevrildi
  - if içinde === yerine = (atama) kullanılmıştı
  - else if satırında kapanış parantezi eksikti
  - 85 kontrolü 70 kontrolünün altında kaldığı için hiç çalışmıyordu, üste alındı
*/

"use strict";

let term1Text = "88";
let term2Text = "92";
let hasPenalty = false;

let average = (+term1Text + +term2Text) / 2;
console.log("Yıl sonu ortalaması: " + average);

if (hasPenalty === true) {
  console.log("Disiplin cezası olduğu için belge verilemez.");
} else if (average >= 85) {
  console.log("Takdir belgesi kazandın!");
} else if (average >= 70) {
  console.log("Teşekkür belgesi kazandın!");
} else {
  console.log("Bu yıl belge yok, seneye!");
}
