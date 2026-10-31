// =====================================================================
// 01 - Veri tipleri ve typeof
// Notlar: veri-tipleri.md → 1.1 – 1.5
// Çalıştır: node 02-veri-tipleri/notlar/01-veri-tipleri-ve-typeof.js
// =====================================================================

/*
  7 ilkel (primitive) tip vardır. İlkel = en basit, parçalanamayan değer.
  number, bigint, string, boolean, undefined, null, symbol

  Kalıp:  typeof değer

  TİP          ÖRNEK DEĞER          typeof SONUCU
  ----------   ------------------   -------------
  number       42, 3.14             "number"
  bigint       10n                  "bigint"
  string       "Merhaba"            "string"
  boolean      true                 "boolean"
  undefined    undefined            "undefined"
  null         null                 "object"   ← JS'in eski bir hatası!
  symbol       Symbol("id")         "symbol"
  object       { name: "Elif" }     "object"   ← ilkel değil
*/


// ---------------------------------------------------------------------
// 1) typeof örnekleri
// ---------------------------------------------------------------------
{
  console.log(typeof 42);         // 42 bir sayı → tipi number
  console.log(typeof "Merhaba");  // tırnak içindeki her şey metin → string
  console.log(typeof true);       // doğru/yanlış değeri → boolean
  console.log(typeof undefined);  // "değer yok" değeri → undefined

  const studentName = "Elif";      // metin
  const age = 21;                  // sayı
  const isGraduated = false;       // boolean
  let phoneNumber;                 // değer vermedik
  console.log(studentName, "→", typeof studentName);  // virgüllerle birden çok şey yazdırılabilir
  console.log(age, "→", typeof age);
  console.log(isGraduated, "→", typeof isGraduated);
  // TODO: phoneNumber'ın değerini ve tipini aynı biçimde yazdır
  console.log(phoneNumber, "→", typeof phoneNumber);

  console.log(typeof "42");        // string (tırnak var!)
  console.log(typeof typeof 42);   // string (typeof her zaman metin döndürür)
}


// ---------------------------------------------------------------------
// 2) Number (sayı)
// ---------------------------------------------------------------------
/*
  NOT!! JavaScript'te diğer dillerin aksine TAM SAYI (integer) ve ondalıklı sayı
  (floating-point number) ayrı tipler değildir, ikisi de number'dır.
  - Infinity (sonsuz): örneğin bir sayıyı 0'a bölünce çıkar. Eksi sonsuz -Infinity.
  - NaN (Not a Number, "sayı değil"): 0 / 0 gibi anlamsız bir işlemin sonucudur.
    Garip ama tipi yine number'dır.
  - NaN kendisine bile eşit değildir. Bir değerin NaN olup olmadığını anlamak için
    Number.isNaN(değer) kullanılır.
*/
{
  let score = 85;               // tam sayı
  let height = 1.78;            // ondalıklı sayı, nokta ile
  let temperature = -4;         // negatif sayı
  let population = 1_000_000;   // _ sadece okunabilirlik için, 1000000 ile aynı
  let bigNumber = 10n;          // sonundaki n → bigint
  console.log(population, typeof bigNumber);

  console.log(score + 10);         // toplama
  console.log(10 / 4);             // bölme ondalıklı sonuç verebilir
  console.log(typeof height);      // ondalıklı da olsa tipi number
  console.log(temperature * 2);    // negatifle çarpma
  console.log(7 / 2);              // 3.5
  console.log(typeof (0 / 0));     // number
}

{
  console.log(10 / 0);              // Infinity  (sıfıra bölme → sonsuz)
  console.log(-10 / 0);             // -Infinity (eksi sonsuz)
  console.log(0 / 0);               // NaN       (anlamsız işlem)
  console.log(typeof NaN);          // number    (NaN'ın tipi ne?)
  console.log(NaN === NaN);         // false     (NaN kendine eşit mi?)
  console.log(Number.isNaN(0 / 0)); // true      (NaN'ı kontrol etmenin doğru yolu)
}

/*
  NaN neden kendine eşit değil? (benim benzetmem)
  Elimizde iki tane bozuk televizyon olduğunu hayal et. Birinin ekranı kırık (0 / 0),
  diğerinin motoru yanmış ("elma" * 5). İkisinin de üstüne "ARIZALI" (NaN) etiketi
  yapıştırdık.

  result === NaN yapmak şuna benzer:
    "1. televizyonun arızası ile 2. televizyonun arızası birebir aynı şey mi?"
    Cevap: Hayır (false). İkisi de arızalı ama birbirine eşit değiller.

  Number.isNaN(result) yapmak ise şuna benzer:
    "Arızanın ne olduğunu boşver, sadece şuna bak: Bu kutunun üstünde ARIZALI (NaN)
    etiketi var mı?"
    Cevap: Evet, var (true).
*/
{
  const result = "elma" * 5;
  console.log(result === NaN);        // false
  console.log(Number.isNaN(result));  // true
}


// ---------------------------------------------------------------------
// 3) Ondalık hassasiyeti ve BigInt
// ---------------------------------------------------------------------
{
  const distanceA = 0.1;                    // km
  const distanceB = 0.2;                    // km
  console.log(distanceA + distanceB);       // beklenen 0.3, ama 0.30000000000000004
  const metersA = 100;                      // aynı mesafeler metre olarak (tam sayı)
  const metersB = 200;
  console.log((metersA + metersB) / 1000);  // tam sayıyla topla, en sonda böl → 0.3
  console.log(Number.MAX_SAFE_INTEGER);     // güvenli en büyük tam sayı
  console.log(9007199254740993);            // sınırı aşınca son rakam bozulur!
  console.log(9007199254740993n);           // BigInt doğru tutar
  // TODO: 10n ile 5n'yi toplayıp sonucu yazdır
  console.log(10n + 5n);

  let lapLength = 400;
  let lapCount = 3;
  let total = lapLength * lapCount;
  total = total / 1000;
  console.log(total);                       // 1.2 (km)
}


// ---------------------------------------------------------------------
// 4) String (metin)
// ---------------------------------------------------------------------
{
  const userName = "Ayşe";
  const a = "metin";                 // çift tırnak
  const b = 'metin';                 // tek tırnak (aynı şey)
  const c = `Merhaba ${userName}`;   // ters tırnak + ${değişken}
  const d = a + " " + b;             // + ile birleştirme
  console.log(c, "|", d);
}

{
  const firstName = "Ayşe";
  const lastName = "Kaya";
  const fullName = firstName + " " + lastName;
  console.log(fullName);
  console.log(typeof fullName);

  const userName = "Ayşe";
  const messageCount = 3;
  console.log("Merhaba " + userName + ", " + messageCount + " yeni mesajın var."); // eski yol
  console.log(`Merhaba ${userName}, ${messageCount} yeni mesajın var.`);            // şablon metin
  console.log(`2 + 3 = ${2 + 3}`);   // ${} içine işlem bile yazılabilir
}

{
  const bookOwner = 'Ali\'nin kitabı';              // \' → tırnağı metnin parçası yapar
  const quote = "Hoca \"yarın sınav var\" dedi.";
  const twoLines = `Birinci satır
İkinci satır`;                                      // ters tırnak çok satır olabilir

  console.log(bookOwner);
  console.log(quote);
  console.log(twoLines);
  console.log("Merhaba".length);  // 7
  console.log("".length);         // 0
}

{
  let greeting = "Merhaba";
  let guest = "Can";
  let message = greeting + " " + guest;
  message = `${message}!`;
  console.log(message);
  console.log(message.length);

  guest = "Efe";
  console.log(`Merhaba ${guest}`);

  console.log("5" + "5");           // "55" (metin birleştirme)
  console.log(`${10 - 4} gün kaldı`);
}


// ---------------------------------------------------------------------
// 5) Boolean (doğru / yanlış)
// İsimlendirme: boolean değişkenler genelde is / has ile başlar.
// ---------------------------------------------------------------------
{
  const isLoggedIn = true;
  const hasNewMessage = false;
  console.log(isLoggedIn);
  console.log(typeof hasNewMessage);

  const age = 20;
  const isAdult = age >= 18;
  console.log(isAdult);
  console.log(age >= 18);
  console.log(age < 13);
  console.log(age === 20);
  console.log(age !== 20);

  const examScore = 72;
  const passingScore = 50;
  const hasPassed = examScore >= passingScore;
  const isPerfect = examScore === 100;
  console.log(`Geçti mi: ${hasPassed}`);
  console.log(`Tipi: ${typeof hasPassed}`);
  console.log(`Tam puan mı: ${isPerfect}`);
}


// ---------------------------------------------------------------------
// 6) undefined ve null
//   undefined: tanımsız, henüz değer verilmedi (JS otomatik koyar)
//   null:      boş, hiç (biz bilerek "yok" deriz)
//
//   let nickname;              // değer vermedin → JS otomatik undefined koyar
//   let secondPhone = null;    // bilerek "yok" dedin
//   secondPhone === null       // null mı diye kontrol
//   nickname === undefined     // undefined mı diye kontrol
// ---------------------------------------------------------------------
{
  let nickname;                  // değer vermedik
  console.log(nickname);         // JS otomatik undefined koydu
  console.log(typeof nickname);  // undefined

  let secondPhone = null;
  console.log(secondPhone);
  console.log(typeof secondPhone);    // object (JS'in eski hatası)
  console.log(secondPhone === null);  // true
}

{
  let middleName = null;                 // kullanıcı "ikinci adım yok" dedi
  let birthCity;                         // kullanıcı bu soruya henüz gelmedi
  console.log(`İkinci ad: ${middleName}`);
  console.log(`Doğum yeri: ${birthCity}`);
  console.log(null === undefined);       // ikisi aynı şey mi? → false
  birthCity = "Konya";                   // şimdi cevapladı
  // TODO: birthCity'nin yeni değerini ve tipini yan yana yazdır
  console.log(birthCity, typeof birthCity);

  let score = 0;                         // 0 da bir değerdir, undefined/null değil
  console.log(score);
}


// ---------------------------------------------------------------------
// 7) Sık hata: undefined / null üzerinde .length
// ---------------------------------------------------------------------
// HATA (yorumda, çalıştırınca program durur):
//   let city;
//   console.log(city.length);  // TypeError: Cannot read properties of undefined (reading 'length')
//
//   let phone = null;
//   console.log(phone.length); // TypeError: Cannot read properties of null (reading 'length')
{
  let city = "Ankara";
  console.log(city.length); // düzeltilmiş → 6
}
