/*
  Görev 2: Hava durumu panosu

  Sensörden metin olarak gelen sıcaklık ve nem değerlerini sayıya çevir,
  çıktıları şablon metinle yaz, Fahrenheit karşılığını ve iki kontrolü
  (donma riski, nem yüksek mi) ekle.

  Not: Nem sensörü boş metin ("") gönderirse Number("") 0 verdiği için
  program bunu %0 nem sanıyor, oysa sensör hiç veri göndermemiş.
*/

"use strict";

const temperatureInput = "18";
const humidityInput = "45";

const temperature = Number(temperatureInput);
const humidity = Number(humidityInput);

const fahrenheit = temperature * 9 / 5 + 32;

const city = "Ankara";
console.log(`Şehir: ${city}`);
console.log(`Sıcaklık: ${temperature} °C (${fahrenheit} °F)`);
console.log(`Nem: ${humidity}`);
console.log(`Sıcaklığın tipi: ${typeof temperature}`);

console.log(`Donma riski var mı: ${temperature <= 0}`);
console.log(`Nem yüksek mi: ${humidity > 70}`);
