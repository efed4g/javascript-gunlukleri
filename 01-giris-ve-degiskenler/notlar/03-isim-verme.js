// =====================================================================
// 03 - Değişkenlere isim verme (identifier)
// Notlar: javascript-giris-ve-degiskenler.md → 1.6
// Çalıştır: node 01-giris-ve-degiskenler/notlar/03-isim-verme.js
// =====================================================================

/*
  KURALLAR
  1- İsim harf, rakam, $ ve _ içerebilir.
  2- Rakamla başlayamaz: level2 olur, 2level olmaz.
  3- Boşluk ve tire (-) içeremez.
  4- Büyük/küçük harf duyarlıdır: score ve Score iki farklı değişkendir.
  5- Anahtar kelimeler (keywords / reserved words) isim olarak kullanılamaz:
     let, const, var, class, return, function, if gibi. Bunlar dilin kendi kelimeleridir.

  YAZIM STİLLERİ
    let camelCaseName = value;          // normal değişken
    const camelCaseName = value;        // hesapla bulunan sabit
    const UPPER_SNAKE_CASE = value;     // önceden bilinen, hiç değişmeyen bilgi
*/


// ---------------------------------------------------------------------
// 1) İyi isim / kötü isim
// ---------------------------------------------------------------------
{
  let t = 18;                 // kötü: t ne? anlaşılmıyor
  let temperature = 18;       // iyi: sıcaklık olduğu belli
  let userfirstname = "Ada";  // çalışır ama okunması zor
  let userFirstName = "Ada";  // camelCase: kelimeler ayırt ediliyor
  console.log(temperature, userFirstName); // iki değişkeni yan yana yazar
}


// ---------------------------------------------------------------------
// 2) Büyük/küçük harf ve izin verilen karakterler
// ---------------------------------------------------------------------
{
  let score = 10;   // küçük s
  let Score = 99;   // büyük S: TAMAMEN farklı bir değişken
  let _bonus = 5;   // _ ile başlayabilir
  let $coins = 3;   // $ ile başlayabilir
  let level2 = 7;   // rakam başta değilse sorun yok
  console.log(score, Score, _bonus, $coins, level2); // beş değişkeni yan yana yazar
}


// ---------------------------------------------------------------------
// 3) UPPER_SNAKE_CASE sabit + camelCase değişken
// ---------------------------------------------------------------------
{
  const MINUTES_IN_HOUR = 60;
  let studyHours = 2;
  const studyMinutes = studyHours * MINUTES_IN_HOUR;
  console.log("Bugün", studyMinutes, "dakika çalıştım.");
  studyHours = 3;
  const tomorrowMinutes = studyHours * MINUTES_IN_HOUR;
  console.log("Yarın", tomorrowMinutes, "dakika çalışacağım.");
}
