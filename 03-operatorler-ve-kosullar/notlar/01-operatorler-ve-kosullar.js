// =====================================================================
// 01 - Operatörler, karşılaştırmalar ve koşullar (if, else, ?)
// Notlar: operatorler-ve-kosullar.md → 1.1 – 1.9
// Çalıştır: node 03-operatorler-ve-kosullar/notlar/01-operatorler-ve-kosullar.js
// =====================================================================


// ---------------------------------------------------------------------
// 1.1 Aritmetik operatörler ve işlem önceliği
// ---------------------------------------------------------------------
{
  let a = 17;
  let b = 5;
  console.log(a + b);   // 22
  console.log(a - b);   // 12
  console.log(a * b);   // 85
  console.log(a / b);   // 3.4
  console.log(a % b);   // 2  → kalan (mod)
  console.log(b ** 2);  // 25 → üs alma
}

{
  let totalMinutes = 135;                           // filmin süresi (dakika)
  let minutes = totalMinutes % 60;                  // 60'lık gruplardan artan → 15
  let hours = (totalMinutes - minutes) / 60;        // artanı çıkar, kalanı 60'a böl → 2
  console.log(`${hours} saat ${minutes} dakika`);   // backtick ve ${ }: veri tiplerinden

  let startHour = 22;                               // yolculuk saat 22'de başlıyor
  let arrivalHour = (startHour + 5) % 24;           // 5 saat sonra: 27 % 24 → 3
  console.log(`Varış saati: ${arrivalHour}`);
}

{
  let exam1 = 70;
  let exam2 = 85;
  let exam3 = 91;
  let wrong = exam1 + exam2 + exam3 / 3;            // HATALI: önce bölme yapılır!
  console.log(Math.floor(wrong)); // Math.floor eğitimde geçmiyor ama araştırdım: sayıyı aşağı yuvarlayıp ondalıksız yazar.
  let average = (exam1 + exam2 + exam3) / 3;        // DOĞRU: parantez önce
  console.log(`Ortalama: ${average}, Ortalama Tipi: ${typeof average}`);
}


// ---------------------------------------------------------------------
// 1.2 + operatörünün iki yüzü (toplama / birleştirme) ve tekli +
// ---------------------------------------------------------------------
{
  let firstName = "Deniz";
  console.log("Merhaba " + firstName + "!");
  console.log("Puan: " + 90);
  console.log(4 + 6);

  console.log(2 + 2 + "1");   // "41"
  console.log("1" + 2 + 2);   // "122"
  console.log("6" - 2);       // 4
  console.log("6" * "2");     // 12
  console.log("6" / "x");     // NaN
}

{
  let applesText = "3";                     // bir formdan METİN olarak geldi
  let pearsText = "4";                      // bu da metin
  console.log(applesText + pearsText);      // "3" + "4" → "34" birleştirdi!
  console.log(+applesText + +pearsText);    // önce ikisi de sayı oldu: 3 + 4 = 7

  let lapsText = "12";                      // koşulan tur sayısı (metin)
  // TODO: lapsText'e 5 tur EKLE (birleştirme değil, toplama!), sonucu totalLaps'e yaz
  let totalLaps = +lapsText + 5;
  // let totalLaps = Number(lapsText) + 5;  // bu daha okunaklı/profesyonel
  console.log(totalLaps);                   // 17 yazmalı
}


// ---------------------------------------------------------------------
// 1.3 Atama ve kısa atama operatörleri (+=, -=, *=, /=, %=)
// ---------------------------------------------------------------------
{
  let health = 100;        // oyuncunun canı
  health = health - 15;    // uzun yazım: 100 - 15
  console.log(health);
  health -= 15;            // kısa yazım, aynı iş: 85 - 15
  console.log(health);
  health += 40;            // iksir içti: 70 + 40
  console.log(health);
}

{
  let report = "Bugün";
  report += " hava";       // += metinde de çalışır (birleştirir)
  report += " güneşli";
  console.log(report);

  let temperature = 12;
  temperature += 7;
  temperature -= 9;
  console.log(temperature);  // 10

  let slices = 8;
  slices *= 3;               // 24
  slices -= 5;               // 19
  let friends = 6;
  let leftover = slices % friends;  // 1
  slices -= leftover;               // 18
  slices /= friends;                // 3
  console.log(`Kişi başı ${slices} dilim, ${leftover} dilim arttı.`);
}


// ---------------------------------------------------------------------
// 1.4 Artırma ve azaltma: ++ ve --
//   a++ → önce eski değeri verir, sonra artırır
//   ++a → önce artırır, sonra yeni değeri verir
// ---------------------------------------------------------------------
{
  let visitors = 0;
  visitors++;
  visitors++;
  visitors--;
  console.log(visitors);   // 1

  let a = 5;
  let b = a++;
  console.log(a, b);       // 6 5

  let c = 5;
  let d = ++c;
  console.log(c, d);       // 6 6

  let countdown = 3;
  console.log(countdown--);  // 3 (sonra 2 oldu)
  console.log(countdown--);  // 2 (sonra 1 oldu)
  console.log(countdown);    // 1
  console.log(--countdown);  // 0
  console.log("Ateşle!");
}


// ---------------------------------------------------------------------
// 1.5 Karşılaştırma operatörleri (sayılar ve metinler)
// ---------------------------------------------------------------------
{
  let temperature = 32;
  console.log(temperature > 30);    // true
  console.log(temperature < 0);     // false
  console.log(temperature >= 32);   // true
  console.log(temperature == 25);   // false
  console.log(temperature != 25);   // true

  let age = 17;
  let isAdult = age >= 18;
  console.log(isAdult);             // false
  console.log(typeof isAdult);      // boolean
  let isAdultNextYear = age + 1 >= 18;
  console.log(isAdultNextYear);     // true
}

{
  // Metinler harf harf, sözlük sırasıyla karşılaştırılır
  console.log("Ahmet" < "Ali");     // true  ("h" < "l")
  console.log("Can" < "Canan");     // true  (kısa olan önce)
  console.log("Zeynep" < "ali");    // true  (büyük harfler küçüklerden önce gelir)
  console.log("2" > "12");          // true  (metin! "2" > "1")
  console.log(+"2" >= +"12");       // false (sayıya çevirince doğru sonuç)
}


// ---------------------------------------------------------------------
// 1.6 Eşitlik: ==, === ve özel değerler
// ---------------------------------------------------------------------
{
  console.log(5 == "5");      // true
  console.log(5 === "5");     // false
  console.log(0 == false);    // true
  console.log(0 === false);   // false
  console.log("" == 0);       // true
  console.log("" === 0);      // false

  console.log("10" > 9);      // true  ("10" → 10)
  console.log("abc" > 1);     // false ("abc" → NaN)
  console.log(true > 0);      // true  (true → 1)
  console.log(NaN === NaN);   // false
}

{
  let middleName = null;                 // ikinci adı yok (bilerek "boş" bırakıldı)
  let nickname;                          // değer verilmedi → undefined
  console.log(middleName == nickname);   // özel kural: null == undefined → true
  console.log(middleName === nickname);  // tipler farklı → false
  console.log(middleName >= 0);          // >= null'ı 0'a çevirir: 0 >= 0 → true (!)
  console.log(middleName == 0);          // == için null SADECE undefined'a eşit → false
  console.log(nickname > 0);             // undefined → NaN → false
  // TODO: nickname'in undefined olup olmadığını SIKI eşitlikle kontrol edip yazdır
  console.log(nickname === undefined);
}


// ---------------------------------------------------------------------
// 1.7 if ve else
//
//   if (koşul) {
//     // koşul doğruysa çalışan kod
//   } else {
//     // koşul yanlışsa çalışan kod
//   }
// ---------------------------------------------------------------------
{
  // Not: İlk yazdığımda değişkeni "rainChange", if içinde "rainchance" yazmıştım
  // → ReferenceError: rainchance is not defined. İsimler birebir aynı olmalı!
  let rainChance = 70;
  if (rainChance > 50) {
    console.log("Şemsiyeni al!");
  }
  console.log("İyi günler.");
}

{
  let number = 7;
  if (number % 2 === 0) {
    console.log(`${number} çift sayıdır.`);
  } else {
    console.log(`${number} tek sayıdır.`);
  }
}

{
  let username = "";
  if (username) {                        // "" falsy → else'e gider
    console.log(`Hoş geldin, ${username}!`);
  } else {
    console.log("Lütfen kullanıcı adı gir.");
  }
}

{
  let messageCount = 3;
  // TODO: if satırını yaz → messageCount doğruysa (0 değilse) bloğa girsin
  if (messageCount !== 0) {              // kısaca: if (messageCount) da olur
    console.log("Yeni mesajın var!");
  } else {
    console.log("Mesaj yok.");
  }
}

{
  // HATA ÖRNEĞİ: = (atama) ile === (karşılaştırma) karıştırmak
  let level = 3;
  if (level = 10) {                      // level'a 10 ATANDI, 10 truthy → hep girer!
    console.log("Son seviye!");
  }
  console.log(level);                    // 10 (değer bozuldu)
  // Doğrusu: if (level === 10) { ... }
}


// ---------------------------------------------------------------------
// 1.8 else if: birden fazla koşul
//
//   if (koşul1) {
//     // koşul1 doğruysa
//   } else if (koşul2) {
//     // koşul1 yanlış, koşul2 doğruysa
//   } else if (koşul3) {
//     // ilk ikisi yanlış, koşul3 doğruysa
//   } else {
//     // hiçbiri doğru değilse
//   }
// ---------------------------------------------------------------------
{
  let temperature = 18;
  if (temperature < 10) {                   // 18 < 10? false → sonrakine bak
    console.log("Hava soğuk, mont giy.");
  } else if (temperature < 25) {            // 18 < 25? true → burası çalışır, zincir biter
    console.log("Hava ılık, hırka yeter.");
  } else {                                  // bakılmaz bile
    console.log("Hava sıcak, tişört giy.");
  }
}

{
  let score = 82;
  let letter;                        // henüz değer yok (undefined)
  if (score >= 85) {
    letter = "AA";
  } else if (score >= 70) {          // 82 >= 70 → true
    letter = "BB";
  } else if (score >= 50) {
    letter = "CC";
  } else {
    letter = "FF";
  }
  console.log(`Harf notun: ${letter}`);
}

{
  let hour = 9;                    // saat (0-23)
  let isWeekend = true;            // bugün hafta sonu mu?

  if (hour < 6) {
    console.log("İyi geceler, uyku vakti.");
  // TODO: else if satırını yaz → saat 12'den küçükse bu bloğa girsin
  } else if (hour < 12) {
    if (isWeekend) {               // iç içe if: sabah + hafta sonu
      console.log("Günaydın! Kahvaltı keyfi zamanı.");
    } else {                       // sabah + hafta içi
      console.log("Günaydın! Okula/işe yetiş.");
    }
  } else if (hour < 18) {
    console.log("İyi günler!");
  } else {
    console.log("İyi akşamlar!");
  }
}

{
  // HATA ÖRNEĞİ: else if sırası yanlış
  let score = 95;
  if (score >= 50) {               // 95 >= 50 → hemen buraya girer
    console.log("CC");             // AA olması gerekirdi!
  } else if (score >= 85) {        // asla buraya gelinmez
    console.log("AA");
  }
  // Doğrusu: en büyük/en dar koşul EN ÜSTE yazılır (önce >= 85, sonra >= 50).
}

{
  let speed = 50;
  if (speed > 90) {
    console.log("Çok hızlı");
  } else if (speed > 30) {
    console.log("Normal");
  } else if (speed > 10) {
    console.log("Yavaş");
  } else {
    console.log("Duruyor gibi");
  }
}


// ---------------------------------------------------------------------
// 1.9 Koşul operatörü ?   →   koşul ? doğruysa : yanlışsa
// ---------------------------------------------------------------------
{
  let age = 20;
  let status = age >= 18 ? "Yetişkin" : "Çocuk";
  console.log(status);

  let unread = 0;
  let label = unread === 0 ? "Yeni mesaj yok" : `${unread} yeni mesaj`;
  console.log(label);                                               // 0 === 0 → ilk değer

  let isOnline = true;
  console.log(`Durum: ${isOnline ? "Çevrimiçi" : "Çevrimdışı"}`);   // ${ } içinde de çalışır

  let windSpeed = 45;
  let warning =
    windSpeed < 20 ? "Hafif rüzgar" :
    windSpeed < 50 ? "Kuvvetli rüzgar" :
    "Fırtına!";                                                     // zincirleme ?
  console.log(warning);

  let isDay = false;
  let timeOfDay = isDay ? "Gündüz" : "Gece";
  console.log(`Şu an: ${timeOfDay}`);

  let n = 7;
  console.log(n % 2 === 0 ? "çift" : "tek");

  let points = 0;
  console.log(points ? "Puanın var" : "Puanın yok");                // 0 falsy
}


// ---------------------------------------------------------------------
// Hepsi bir arada: su takibi
// ---------------------------------------------------------------------
{
  let goalText = "2000";                      // hedef bir formdan METİN olarak geldi
  let dailyGoal = +goalText;                  // tekli + ile sayıya çevir
  let glassSize = 250;                        // bir bardak = 250 ml
  let glasses = 0;                            // içilen bardak sayısı

  glasses++;                                  // sabah 1 bardak
  glasses += 4;                               // gün içinde 4 bardak daha
  let drunk = glasses * glassSize;            // içilen toplam ml
  let remaining = dailyGoal - drunk;          // hedefe kalan ml
  let percent = drunk / dailyGoal * 100;      // hedefin yüzde kaçı

  let summary = glasses === 0 ? "Bugün hiç su içmedin!" : "Bugün " + glasses + " bardak içtin.";
  console.log(summary);
  console.log(`Hedefin %${percent} kadarı tamam.`);

  if (drunk >= dailyGoal) {
    console.log("Tebrikler, hedefe ulaştın!");
  } else if (remaining <= glassSize * 2) {
    console.log("Az kaldı, en fazla 2 bardak daha!");
  } else {
    console.log(`Hedefe ${remaining} ml kaldı, devam!`);
  }
}
