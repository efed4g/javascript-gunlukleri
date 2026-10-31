/*
  Görev 1: Kar tatili var mı?

  isSnowDay(snow, temp) fonksiyonu kar 20 cm veya üstündeyse ya da kar en az
  10 cm ve sıcaklık -5 derece veya altındaysa true, değilse false döndürür.
  Mesaj fonksiyonun dışında, dönen cevaba göre yazdırılır.
*/

"use strict";

let snowCm = 25;
let temperature = -2;

function isSnowDay(snow, temp) {
    return snow >= 20 || (snow >= 10 && temp <= -5);
}

if (isSnowDay(snowCm, temperature)) {
    console.log(snowCm + " cm kar, " + temperature + "°C: Okullar tatil!");
} else {
    console.log(snowCm + "cm kar, " + temperature + "°C: Okula gidiyoruz.");
}
