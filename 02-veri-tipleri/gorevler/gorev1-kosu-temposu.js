/*
  Görev 1: Koşu temposu

  Kullanıcı mesafeyi (km) ve süreyi (dakika) metin olarak giriyor.
  Metinleri sayıya çevirip tempoyu (dakika/km) hesapla.
  Ekrana şunlar yazılmalı: mesafe girdisinin tipi, dönüşümden sonraki tipi,
  mesafe ve süre, tempo, temponun NaN olup olmadığı.
*/

"use strict";

const distanceInput = "5.5";
const minutesInput = "33";

const distance = Number(distanceInput);
const minutes = Number(minutesInput);

const pace = minutes / distance;

console.log(`Mesafe girdisinin tipi: ${typeof distanceInput}`);
console.log(`Dönüşümden sonra tipi: ${typeof distance}`);
console.log(`Mesafe: ${distance} km | Süre: ${minutes} dakika`);
console.log(`Tempo: ${pace} dakika/km`);
console.log(`Tempo hatalı mı (NaN): ${Number.isNaN(pace)}`);
