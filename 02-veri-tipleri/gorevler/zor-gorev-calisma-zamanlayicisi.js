/*
  Zor Görev: Çalışma zamanlayıcısı

  Metin olarak gelen oturum süresi ("25 dk"), oturum sayısı ve mola süresinden
  toplam çalışma, toplam mola ve toplam süreyi hesapla.
  Kullanıcı adının girilip girilmediğini, sürenin NaN olup olmadığını ve
  hedefe (120 dk) ulaşılıp ulaşılmadığını yazdır. Son satırda dönüştürmeden
  toplasaydık ne çıkacağını göster.
*/

"use strict";

const userName = "Deniz";
const sessionInput = "25 dk";
const sessionCountInput = "4";
const breakInput = "5";

const sessionLength = parseInt(sessionInput);
const sessionCount = Number(sessionCountInput);
const breakLength = Number(breakInput);

const totalWork = sessionLength * sessionCount;
const totalBreak = breakLength * sessionCount;
const totalTime = totalWork + totalBreak;
const hours = totalTime / 60;

console.log(`Kullanıcı adı girildi mi: ${Boolean(userName)}`);
console.log(`Bir oturum: ${sessionLength} dakika`);
console.log(`Toplam çalışma: ${totalWork} dakika`);
console.log(`Toplam mola: ${totalBreak} dakika`);
console.log(`Toplam süre: ${totalTime} dakika (${hours} saat)`);
console.log(`Toplam sürenin tipi: ${typeof totalTime}`);
console.log(`Süre hatalı mı (NaN): ${Number.isNaN(totalTime)}`);
console.log(`Hedefe ulaşıldı mı (120 dk ve üstü): ${totalTime >= 120}`);
console.log(`Dönüştürmeden toplasaydık: ${sessionCountInput + breakInput}`);
