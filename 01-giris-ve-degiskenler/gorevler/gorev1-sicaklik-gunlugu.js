/*
  Görev 1: Sıcaklık günlüğü

  Bir şehrin sabah, öğlen ve akşam sıcaklığını tek bir temperature
  değişkeniyle takip edip ekrana yazdır.
  Girilen değerler: cityName, morningTemp, noonIncrease, eveningDecrease
*/

"use strict";

const cityName = "İzmir";
const morningTemp = 20;
const noonIncrease = 0;
const eveningDecrease = 0;

console.log("Şehir : " + cityName);

let temperature = morningTemp;
console.log("Sabah : " + temperature + " derece");

temperature = temperature + noonIncrease;
console.log("Öğlen : " + temperature + " derece");

temperature = temperature - eveningDecrease;
console.log("Akşam : " + temperature + " derece");
