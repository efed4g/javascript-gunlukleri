/*
  Görev 1: Pomodoro planlayıcı

  Oturum sayısı 0 veya negatifse "Geçerli bir oturum sayısı gir!" yazılır.
  Her oturum 25 dakika çalışma. Her oturumdan sonra 5 dakika mola, oturum
  numarası 4'ün katıysa 15 dakika uzun mola. Son oturumdan sonra mola yok.
  En sonda toplam süre yazılır.
*/

"use strict";

let sessions = 4;

if (sessions <= 0) {
  console.log("Geçerli bir oturum sayısı gir!");
} else {
  let total = 0;

  for (let i = 1; i <= sessions; i++) {
    console.log(`${i}. oturum: 25 dk çalışma`);
    total += 25;

    if (i === sessions) {
      continue;
    }

    if (i % 4 === 0) {
      console.log("Uzun mola: 15 dk");
      total += 15;
    } else {
      console.log("Mola: 5 dk");
      total += 5;
    }
  }

  console.log(`Toplam süre: ${total} dk`);
}
