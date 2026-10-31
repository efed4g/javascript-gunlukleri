// =====================================================================
// 02 - Döngüler: while, do...while, for, break, continue
// Notlar: mantiksal-operatorler-donguler-switch.md → 1.5 – 1.8
// Çalıştır: node 04-mantiksal-operatorler-donguler-switch/notlar/02-donguler.js
// =====================================================================


// ---------------------------------------------------------------------
// 1.5 while döngüsü
//
//   let i = 1;            // 1) başlangıç: sayaç (counter) değişkeni
//   while (i <= 5) {      // 2) koşul: her turdan ÖNCE kontrol edilir
//     // gövde: koşul doğru oldukça çalışır
//     i++;                // 3) güncelleme: koşulu bir gün bozacak değişiklik
//   }
//   (i++ unutulursa koşul hiç bozulmaz → sonsuz döngü!)
// ---------------------------------------------------------------------
{
  let i = 1;
  while (i <= 5) {
    console.log("Sayı:", i);
    i++;
  }
  console.log("Döngü bitti, i şimdi:", i);   // 6
}

{
  let seconds = 3;
  while (seconds > 0) {
    console.log(`${seconds}...`);
    seconds--;
  }
  console.log("Kalkış!");
}

{
  // Kaç tur süreceği baştan belli değilse while uygun
  let views = 100;
  let day = 1;

  while (views < 10000) {
    views = views * 2;
    day++;
    console.log(`${day}. gün: ${views} izlenme`);
  }
  console.log(`${day}. günde 10.000 sınırı geçildi!`);
}


// ---------------------------------------------------------------------
// 1.6 do...while döngüsü
//
//   do {
//     // gövde: en az bir kez çalışır
//   } while (koşul);   // koşul sonda; doğruysa başa dön
// ---------------------------------------------------------------------
{
  let round = 1;
  do {
    console.log("Tur:", round);
    round++;
  } while (round <= 3);
}

{
  // Koşul baştan yanlışsa: while hiç çalışmaz, do...while bir kez çalışır
  let a = 10;
  while (a < 5) {
    console.log("while çalıştı");      // yazılmaz
  }

  let b = 10;
  do {
    console.log("do...while çalıştı"); // bir kez yazılır
  } while (b < 5);
}

{
  let number = 4372;
  let digits = 0;

  do {
    digits++;
    // TODO: atacağımız son basamağı (number % 10) "Atılan basamak: 2" gibi yazdır
    console.log("Atılan basamak:", number % 10);
    number = (number - number % 10) / 10;
  } while (number > 0);

  console.log("Basamak sayısı:", digits);   // 4
}


// ---------------------------------------------------------------------
// 1.7 for döngüsü
//
//   for (başlangıç; koşul; adım) {
//     // gövde
//   }
//
//   DİKKAT: for (let i = 1; i <= 5; i++);   ← sondaki ; gövdeyi boş bırakır!
// ---------------------------------------------------------------------
{
  // Aynı işi yapan for ve while
  for (let i = 1; i <= 3; i++) {
    console.log("for:", i);
  }

  let j = 1;
  while (j <= 3) {
    console.log("while", j);
    j++;
  }
}

{
  for (let i = 1; i <= 5; i++) {
    console.log("Sayı:", i);
  }

  for (let i = 0; i <= 10; i += 2) {   // ikişer ikişer
    console.log("Çift:", i);
  }

  for (let i = 5; i >= 1; i--) {       // geriye doğru
    console.log("Geri sayım:", i);
  }
}

{
  let total = 0;                       // biriktirici (accumulator): toplam burada birikir
  for (let i = 1; i <= 100; i++) {     // 1'den 100'e
    total += i;                        // her sayıyı kutuya ekle
  }
  console.log("1'den 100'e toplam:", total);   // 5050
}

{
  // İç içe for: yıldız merdiveni
  let height = 4;
  for (let row = 1; row <= height; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "*";
    }
    console.log(line);
  }
}


// ---------------------------------------------------------------------
// 1.8 break ve continue
//   continue → bu turun geri kalanını atla, sonraki tura geç
//   break    → döngüyü tamamen bitir
//
//   for (let i = 1; i <= 10; i++) {
//     if (atlanacakMi) {
//       continue;
//     }
//     if (bitecekMi) {
//       break;
//     }
//     // ...
//   }
// ---------------------------------------------------------------------
{
  // Etiketli break: iç içe döngüde DIŞTAKİNİ de bitirir
  outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i * j === 4) break outer;
      console.log(i, j);
    }
  }
}

{
  for (let i = 50; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log("7'ye bölünen ilk sayı:", i);
      break;
    }
  }
  console.log("Arama bitti.");

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log("Tek sayı:", i);
  }
}

{
  let climbed = 0;                                 // çıkılan sağlam basamak sayısı
  for (let step = 1; step <= 20; step++) {         // 1'den 20'ye basamaklar
    if (step === 4 || step === 9) {                // 4 ve 9 numaralı basamaklar kırık
      console.log(`${step}. basamak kırık, atla!`);
      // TODO: bu basamağı sayma, döngünün bir sonraki turuna geç
      continue;
    }
    climbed++;                                     // sağlam basamağa çıktık
    if (climbed === 10) {                          // 10 basamak çıkınca yoruldu
      console.log(`Yoruldum! ${step}. basamakta duruyorum.`);
      break;                                       // döngüyü tamamen bitir
    }
  }
  console.log("Toplam çıkılan basamak:", climbed);
}
