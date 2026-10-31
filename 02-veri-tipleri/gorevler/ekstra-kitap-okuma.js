/*
  Ekstra: Kitap okuma takibi

  Formdan metin olarak gelen sayfa bilgilerini sayıya çevirip okuma
  ilerlemesini yüzde olarak hesapla. Boş metin, null ve undefined
  değerlerin çıktıda nasıl göründüğünü ve dönüştürmeden toplamanın
  neden hatalı sonuç verdiğini göster.
*/

"use strict";

const readerName = "Efe";
const pagesReadInput = "45 sayfa";
const yesterdayInput = "30";
const totalPagesInput = "300";
const dailyGoalInput = "";
const favoriteQuote = null;
let lastReadDate;

const pagesRead = parseInt(pagesReadInput);
const totalPages = Number(totalPagesInput);
const progress = pagesRead * 100 / totalPages;

console.log(`Okuyucu: ${readerName}`);
console.log(`İlerleme: %${progress} (${pagesRead}/${totalPages} sayfa)`);
console.log(`Hedef girildi mi: ${Boolean(dailyGoalInput)}`);
console.log(`Kitap bitti mi: ${pagesRead === totalPages}`);
console.log(`Alıntı: ${favoriteQuote} | Son okuma: ${lastReadDate}`);
console.log(`İlerlemenin tipi: ${typeof progress}`);
console.log(`İki günde (hatalı): ${yesterdayInput + pagesRead} sayfa`);
console.log(`İki günde (doğru): ${Number(yesterdayInput) + pagesRead} sayfa`);
