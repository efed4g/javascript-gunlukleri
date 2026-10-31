// =====================================================================
// 04 - Katı mod: "use strict"
// Notlar: javascript-giris-ve-degiskenler.md → 1.7
// Çalıştır: node 01-giris-ve-degiskenler/notlar/04-use-strict.js
//
// "use strict" dosyanın 1. satırında olmalı (üstünde sadece yorum olabilir).
// Ortasına yazılırsa görmezden gelinir. Bu yüzden aşağıdaki örneklerin
// her biri ayrı bir dosyada denenmeli; burada yorum olarak duruyorlar.
// =====================================================================


// ---------------------------------------------------------------------
// 1) Gevşek mod: let/const unutulsa da sessizce kabul eder
// ---------------------------------------------------------------------
/*
city = "Ankara";    // let/const yok! Gevşek mod bunu sessizce kabul eder
console.log(city);  // değeri yazdırır
*/


// ---------------------------------------------------------------------
// 2) Katı mod: aynı kod hata verir
// ---------------------------------------------------------------------
/*
"use strict";
city = "Ankara";    // ReferenceError: city is not defined
console.log(city);
*/


// ---------------------------------------------------------------------
// 3) Katı modda doğru yazım
// ---------------------------------------------------------------------
/*
"use strict";                // katı mod açık: yazım hatalarını yakalar
let score = 100;             // skor 100 ile başlıyor
// TODO: score'u 50 artıran satırı buraya DOĞRU yazımla yaz
score = score + 50;
console.log("Skor:", score); // 150 bekliyoruz
*/


// ---------------------------------------------------------------------
// 4) "use strict" ilk satırda değilse işe yaramaz
// ---------------------------------------------------------------------
/*
console.log("Başlıyoruz");
"use strict";       // ikinci satırda → görmezden gelinir
level = 5;          // hata vermesi gerekirdi ama vermez
console.log(level);
*/
