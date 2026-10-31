// =====================================================================
// 03 - return: değer geri döndürmek
// Notlar: fonksiyonlar.md → 1.3
// Çalıştır: node 05-Fonksiyonlar/notlar/03-return.js
// =====================================================================

/*
  NE?
  return (geri döndür): fonksiyonun ürettiği sonucu çağrıldığı yere geri gönderir.
  Geri gönderilen değere dönüş değeri (return value) denir. return İKİ iş yapar:
    1. Değeri dışarı verir.
    2. Fonksiyonu O ANDA bitirir.
  Hatırla: let n = Number("42"); → Number sana 42 "döndürüyordu". O bir return'dü!

  NEDEN VAR?
  console.log sadece ekrana yazar; yazılan değer programın geri kalanına ulaşmaz.
  Hesapladığın yaşı ekranda göstermek, 18'den büyük mü diye kontrol etmek ve kaydetmek
  istiyorsan, yaşı return ile döndürüp bir değişkene koyman gerekir.

  BENZETME
  - console.log: Rıza Abi mutfaktan "Çay hazııır!" diye bağırıyor ama getirmiyor.
    Sesi duydun, o kadar; içemezsin, şeker atamazsın.
  - return: Rıza Abi çayı tepsiyle masana bırakıyor. Artık elinde: içersin, şeker atarsın.
  Tepsiyi bıraktığı an o siparişle işi biter → return'den sonraki satırlar ÇALIŞMAZ.

  KALIP
    function functionName(params) {
      // ...hesaplamalar
      return value;                       // değeri geri gönder ve fonksiyonu bitir
    }

    let result = functionName(args);      // dönen değeri bir değişkende yakala

  KURALLAR
  - return'den sonra değer ya da işlem gelir: return a + b; → önce toplam hesaplanır.
  - Çağrı, döndürdüğü değerin yerine geçer: add(3, 4) yazdığın yere 7 gelir. Yani çağrıyı
    değişkene atayabilir, işleme sokabilir (add(3, 4) * 2), if içinde kullanabilirsin.
  - Karşılaştırma da döndürülebilir: return age >= 18; → true / false.
  - Birden çok return olabilir; hangisine önce ulaşılırsa o çalışır ve fonksiyon biter.
    Buna erken çıkış (early return) denir.
  - Döngü içindeki return bile sadece döngüyü değil, BÜTÜN fonksiyonu bitirir.
  - return yoksa ya da değersiz return; yazılmışsa fonksiyon undefined döndürür.
  - Döndürülecek değer return ile AYNI SATIRDA başlamalı (Hata 3'e bak).
*/


// ---------------------------------------------------------------------
// Örnek 1: Değeri yakalamak ve işlemde kullanmak
// ---------------------------------------------------------------------
{
  function add(a, b) {             // iki sayı alır
    return a + b;                  // toplamı çağrıldığı yere geri gönder
  }

  let total = add(3, 4);           // add(3, 4) yerine dönen 7 gelir → total = 7
  console.log(total);              // 7
  console.log(add(10, 5) * 2);     // önce add 15 döndürür, sonra 15 * 2 → 30
}


// ---------------------------------------------------------------------
// Örnek 2: Birden çok return ve erken çıkış
// ---------------------------------------------------------------------
{
  function getBatteryStatus(percent) {
    if (percent < 0 || percent > 100) {   // saçma bir değer mi?
      return "Geçersiz değer";            // erken çıkış: aşağısı hiç çalışmaz
    }
    if (percent <= 15) {                  // çok mu az?
      return "Şarja tak!";                // döndür ve bitir
    }
    if (percent <= 50) {                  // yarıdan az mı?
      return "İdare eder";                // döndür ve bitir
    }
    return "Rahatsın";                    // hiçbir if tutmazsa buraya gelinir
  }

  console.log(getBatteryStatus(8));       // Şarja tak!
  console.log(getBatteryStatus(73));      // Rahatsın
  console.log(getBatteryStatus(120));     // Geçersiz değer
}


// ---------------------------------------------------------------------
// Örnek 3: Bir fonksiyonun dönüş değerini başka bir fonksiyonda kullanmak
// ---------------------------------------------------------------------
{
  function getArea(width, height) {           // alan hesaplayan fonksiyon
    return width * height;                    // alanı (m²) döndür
  }

  function getPaintCans(width, height) {      // kaç kutu boya gerektiğini bulur
    let area = getArea(width, height);        // başka fonksiyonun dönüş değerini kullan
    let cans = (area - area % 10) / 10;       // 1 kutu 10 m² boyar → tam kutu sayısı
    if (area % 10 > 0) {                      // artan alan var mı?
      cans = cans + 1;                        // artan alan varsa 1 kutu daha
    }
    return cans;                              // sonucu geri gönder
  }

  let neededCans = getPaintCans(4, 3);        // 12 m² → 2 kutu
  console.log("Gereken boya: " + neededCans + " kutu");
  // TODO: 6 x 4 metrelik duvar için gereken kutu sayısını aynı biçimde yazdır
  // Cevap: console.log("Gereken boya: " + getPaintCans(6, 4) + " kutu"); → 3 kutu
  //        (24 m²: 20 m² için 2 tam kutu, artan 4 m² için 1 kutu daha)

  /*
    Adım adım: getPaintCans(4, 3)
    Adım | Çalışan kod                                           | area   | cans   | neededCans
    1    | getPaintCans(4, 3) → içeri gir (width 4, height 3)    | –      | –      | –
    2    | let area = getArea(width, height); → getArea'ya gir   | –      | –      | –
    3    | return width * height; → 12 geri döner                | 12     | –      | –
    4    | let cans = (12 − 2) / 10                              | 12     | 1      | –
    5    | if (area % 10 > 0) → 2 > 0 doğru                      | 12     | 1      | –
    6    | cans = cans + 1;                                      | 12     | 2      | –
    7    | return cans; → 2 geri döner, fonksiyon biter          | silindi| silindi| 2
    8    | console.log → "Gereken boya: 2 kutu"                  | –      | –      | 2

    7. adım: area ve cans silindi ama değer neededCans'a geçti. return'ün sihri bu.
  */
}


// ---------------------------------------------------------------------
// Sık hatalar
// ---------------------------------------------------------------------
{
  // HATA 1: return'ü unutmak (EN SIK yapılan hata, hata mesajı YOK)
  function multiply(a, b) {
    let result = a * b;            // hesapladı ama geri göndermedi
  }

  let answer = multiply(4, 5);
  console.log(answer);             // undefined
  console.log(answer + 1);         // NaN (undefined ile matematik yapılamaz)
  // Düzeltme: return a * b;
}

// HATA 2: return'ü değişkene atamaya çalışmak
//   function add(a, b) {
//     let sum = return a + b;
//   }
//   → SyntaxError: Unexpected token 'return'
//   return bir değer değil, KOMUTTUR; = işaretinin sağına yazılamaz.
//   Düzeltme: return a + b;

{
  // HATA 3: return'den sonra satır atlamak (hata mesajı YOK)
  function getMessage() {
    return
      "Merhaba";
  }

  console.log(getMessage());       // undefined
  // return'den hemen sonra satır biterse JS oraya kendisi ; koyar → return; olur,
  // "Merhaba" satırına hiç ulaşılmaz.
  // Düzeltme: return "Merhaba";
}


// ---------------------------------------------------------------------
// Tahmin et
// ---------------------------------------------------------------------
{
  // Tahmin 1
  function check(n) {
    if (n > 10) {
      return "büyük";
    }
    console.log("kontrol bitti");
    return "küçük";
  }

  console.log(check(15));
  console.log(check(3));
  // Cevap: büyük / kontrol bitti / küçük
  // check(15)'te ilk return çalıştı, "kontrol bitti"ye hiç gelinmedi.
  // check(3)'te if tutmadı; önce console.log, sonra return "küçük".
}

{
  // Tahmin 2
  function half(n) {
    console.log(n / 2);
  }

  let x = half(10);
  console.log(x);
  // Cevap: 5 / undefined → half ekrana 5 yazdı ama hiçbir şey DÖNDÜRMEDİ.
}


/*
  GERÇEK HAYATTA
  isValidEmail(email) true/false döndürür; site bu cevaba göre "Geçersiz e-posta"
  uyarısını gösterir. Sunucuda getUser(id) bulduğu kullanıcıyı döndürür.

  ÖZET
  - return değeri çağrıldığı yere gönderir ve fonksiyonu anında bitirir.
  - console.log sadece GÖSTERİR; return değeri KULLANILABİLİR yapar.
  - return yoksa sonuç undefined olur.
*/
