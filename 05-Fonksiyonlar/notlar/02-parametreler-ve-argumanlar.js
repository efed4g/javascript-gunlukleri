// =====================================================================
// 02 - Parametreler ve argümanlar (parameters & arguments)
// Notlar: fonksiyonlar.md → 1.2
// Çalıştır: node 05-Fonksiyonlar/notlar/02-parametreler-ve-argumanlar.js
// =====================================================================

/*
  NE?
  - Parametre (parameter): tanımda parantezin içine yazdığın isimler.
    Fonksiyonun "boş kutuları"; içeride değişken gibi kullanılır.
  - Argüman (argument): çağırırken o kutulara koyduğun gerçek değerler.
  Kısaca: TANIMLARKEN parametre, ÇAĞIRIRKEN argüman.

  NEDEN VAR?
  10.000 kullanıcıya kendi adıyla "Merhaba Ayşe", "Merhaba Mert" demen lazım.
  Her biri için greetAyse, greetMert... yazmak imkânsız. Tek fonksiyon yaz,
  değişen kısmı (adı) dışarıdan al.

  BENZETME
  Rıza Abi'ye "2 çay, biri açık" diyorsun.
  - Aklındaki sipariş fişinde "adet: ___" ve "dem: ___" boşlukları → PARAMETRELER
  - Senin söylediğin "2" ve "açık" → ARGÜMANLAR
  Fişte sıra sabit: önce adet, sonra dem. "Açık 2" dersen "açık" tane çay getirmeye çalışır.
  SIRA ÖNEMLİ!

  KALIP
    function functionName(param1, param2) {   // parametreler: boş kutular
      // param1 ve param2 burada değişken gibi kullanılır
    }

    functionName(value1, value2);             // argümanlar: kutulara konan değerler

  KURALLAR
  - Parametreler virgülle ayrılır, başlarına let YAZILMAZ.
  - Argümanlar sırayla eşleşir: 1. argüman → 1. parametre, 2. → 2. ...
  - Argüman olarak sayı, metin, değişken, hatta işlem verilebilir:
    shareSlices(6 + 6, 4) → önce 12 hesaplanır, sonra gönderilir.
  - Eksik argüman hata vermez, o parametre undefined olur. Fazla argüman yok sayılır.
  - Fonksiyon değerin KOPYASIYLA çalışır: içeride parametreyi değiştirmek dışarıdaki
    değişkeni değiştirmez (sayı, metin gibi ilkel / primitive değerler için).
*/


// ---------------------------------------------------------------------
// Örnek 1: Tek parametre
// ---------------------------------------------------------------------
{
  function greet(name) {                    // name: parametre (boş kutu)
    console.log("Merhaba " + name + "!");   // kutudaki değer kullanılır
  }

  greet("Ayşe");                            // argüman "Ayşe" → name = "Ayşe"
  greet("Mert");                            // argüman "Mert" → name = "Mert"
}


// ---------------------------------------------------------------------
// Örnek 2: İki parametre ve sıranın önemi
// ---------------------------------------------------------------------
{
  function shareSlices(slices, people) {                 // 2 parametre: dilim ve kişi sayısı
    let leftover = slices % people;                      // bölünemeyen (artan) dilim
    let perPerson = (slices - leftover) / people;        // artanı çıkarınca tam bölünür
    console.log("Kişi başı " + perPerson + " dilim, artan " + leftover + " dilim");
  }

  shareSlices(8, 3);       // slices = 8, people = 3   → 2 dilim, artan 2
  shareSlices(3, 8);       // sıra değişti! slices = 3 → 0 dilim, artan 3
  shareSlices(6 + 6, 4);   // önce 6 + 6 = 12          → 3 dilim, artan 0

  /*
    Adım adım: shareSlices(8, 3)
    Adım | Çalışan kod                                     | slices | people | leftover | perPerson
    1    | shareSlices(8, 3); → içeri gir                  | 8      | 3      | –        | –
    2    | let leftover = slices % people;  → 8 % 3        | 8      | 3      | 2        | –
    3    | let perPerson = (8 − 2) / 3                     | 8      | 3      | 2        | 2
    4    | console.log → "Kişi başı 2 dilim, artan 2 dilim"| 8      | 3      | 2        | 2
    5    | fonksiyon biter, 4 değişken de SİLİNİR; sonraki çağrı hepsini sıfırdan oluşturur

    "ÖNCE KALANI ÇIKAR, SONRA BÖL" yöntemi: bir sayının içinde başka bir sayının
    kaç TAM kez olduğunu bulmanın yolu. Görevlerde işine yarayacak!
  */
}


// ---------------------------------------------------------------------
// Örnek 3: Üç parametre ve koşul
// ---------------------------------------------------------------------
{
  function canRide(name, height, minHeight) {     // 3 parametre: ad, boy, gereken boy
    if (height >= minHeight) {                    // boy yetiyor mu?
      console.log(name + " binebilir.");          // yetiyorsa
    } else {                                      // yetmiyorsa
      let missing = minHeight - height;           // kaç cm eksik?
      console.log(name + " binemez, " + missing + " cm daha uzamalı.");
    }
  }

  canRide("Ela", 135, 120);                       // 135 >= 120 → binebilir
  canRide("Kerem", 110, 120);                     // 110 < 120 → 10 cm eksik
  // TODO: boyu tam 120 cm olan "Arda" için fonksiyonu çağır (sınır durumu)
  // Cevap: canRide("Arda", 120, 120); → Arda binebilir. (120 >= 120 doğru)
}


// ---------------------------------------------------------------------
// Sık hatalar
// ---------------------------------------------------------------------
{
  // HATA 1: Argümanı unutmak (hata mesajı YOK)
  function greet(name) {
    console.log("Merhaba " + name + "!");
  }

  greet();   // Merhaba undefined!
  // Çıktıda undefined görüyorsan büyük ihtimalle argüman göndermeyi unuttun.
  // Düzeltme: greet("Ayşe"); ya da 1.4'teki varsayılan değer.
}

{
  // HATA 2: Parametreyi tırnak içine almak (hata mesajı YOK)
  function greet(name) {
    console.log("Merhaba name!");   // tırnak içi düz metin, name değişken sayılmaz
  }

  greet("Ayşe");   // Merhaba name!
  // Düzeltme: console.log("Merhaba " + name + "!");
}

// HATA 3: Argümanlar arasındaki virgülü unutmak
//   shareSlices(8 3);
//   → SyntaxError: missing ) after argument list
//   JS 8'den sonra ya , ya da ) bekliyordu; 3'ü görünce kafası karıştı.
//   Düzeltme: shareSlices(8, 3);


// ---------------------------------------------------------------------
// Tahmin et
// ---------------------------------------------------------------------
{
  // Tahmin 1
  let battery = 80;

  function useTorch(level) {
    level = level - 30;
    console.log("İçeride: " + level);
  }

  useTorch(battery);
  console.log("Dışarıda: " + battery);
  // Cevap: İçeride: 50 / Dışarıda: 80 → level, battery'nin KOPYASIYDI; sadece kopya azaldı.
}

{
  // Tahmin 2
  function divide(a, b) {
    console.log(a / b);
  }

  let x = 2;
  let y = 10;
  divide(y, x);
  divide(x, y);
  // Cevap: 5 / 0.2 → ilk çağrıda a = 10, b = 2; ikincisinde a = 2, b = 10. Sıra değişince sonuç değişir.
}


/*
  GERÇEK HAYATTA
  showProfile(userId) gibi tek bir fonksiyon, aldığı numaraya göre milyonlarca farklı
  profil sayfasını doldurur. sendEmail(to, subject) e-postanın kime ve hangi konuyla
  gideceğini parametre olarak alır.

  ÖZET
  - Parametre tanımdaki boş kutu, argüman çağırırken verilen değer; sırayla eşleşirler.
  - Eksik argüman undefined olur, fazlası yok sayılır.
  - Fonksiyon değerin kopyasıyla çalışır; içerideki değişiklik dışarıyı etkilemez.
*/
