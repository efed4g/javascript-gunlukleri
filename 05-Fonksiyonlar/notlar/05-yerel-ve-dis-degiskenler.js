// =====================================================================
// 05 - Fonksiyonun içi ve dışı: yerel ve dış değişkenler (scope)
// Notlar: fonksiyonlar.md → 1.5
// Çalıştır: node 05-Fonksiyonlar/notlar/05-yerel-ve-dis-degiskenler.js
// =====================================================================

/*
  NE?
  Kapsam (scope): bir değişkenin kodun hangi bölgesinden görülebildiği.
  - Yerel değişken (local variable): fonksiyonun içinde let / const ile tanımlanan.
    · Sadece o fonksiyonun içinde görülür.
    · Fonksiyon bitince silinir, her çağrıda sıfırdan oluşur.
    · Parametreler de yerel değişkendir.
  - Dış değişken (outer variable): fonksiyonun dışında tanımlanan. İçeriden okunabilir
    ve değiştirilebilir. Dosyanın en üst seviyesindekilere genel (global) değişken de denir.
  Hatırla: for (let i = 1; ...) içindeki i, döngü bitince dışarıda yoktu. Aynı mantık.

  TEK CÜMLELİK KURAL: İÇERİDEN DIŞARISI GÖRÜLÜR, DIŞARIDAN İÇERİSİ GÖRÜLMEZ.

  NEDEN VAR?
  Yüzlerce fonksiyonda total, count, result gibi isimler geçer. Her değişken her yerden
  görülseydi bir fonksiyon başkasının total'ını yanlışlıkla bozardı. Yerel değişkenler her
  fonksiyona kendi özel çekmecesini verir; aynı isim farklı fonksiyonlarda rahatça kullanılır.

  BENZETME
  Rıza Abi'nin mutfağı = fonksiyonun içi.
  - Mutfaktaki demlik ve şeker kutusu → YEREL: masandan demliğe uzanamazsın.
  - Ofisteki duvar saati → DIŞ: Rıza Abi kapıdan ona bakabilir, hatta ayarlayabilir.
  - Mutfakta kendi küçük masa saati varsa hep ona bakar, duvardakini görmez bile
    → GÖLGELEME (shadowing).

  KALIP
    let outerValue = "dışarıda";        // dış değişken

    function myFunction() {
      let localValue = "içeride";       // yerel değişken
      console.log(outerValue);          // ✓ içeriden dışarısı görülür
      console.log(localValue);          // ✓ kendi değişkeni
    }

    console.log(localValue);            // ✗ ReferenceError: dışarıdan içerisi görülmez

  KURALLAR
  - Fonksiyonun içinde let / const ile tanımlanan her şey (ve parametreler) yereldir.
  - Dış değişkeni değiştirmek için içeride let YAZMADAN ata: totalVisits = totalVisits + 1;
  - İçeride aynı adla let yazarsan yeni yerel değişken doğar ve dıştakini gölgeler;
    dıştaki DEĞİŞMEZ.
  - İyi alışkanlık: bilgi parametreyle girsin, sonuç return ile çıksın.
    Global değişkenleri az kullan; dış değişkeni en çok hiç değişmeyen sabitler (const) için kullan.
*/


// ---------------------------------------------------------------------
// Örnek 1: Dışarısı görülür, içerisi görülmez
// ---------------------------------------------------------------------
{
  let gymName = "Kuzey Spor Salonu";                     // dış değişken: herkes görür

  function showCapacity() {
    let capacity = 40;                                   // yerel değişken: sadece burada yaşar
    console.log(gymName + " kapasitesi: " + capacity);  // içeriden hem dışı hem içi görür
  }

  showCapacity();
  console.log(gymName);                                  // dış değişken dışarıda da var
  // console.log(capacity);                              // açarsan ReferenceError
}


// ---------------------------------------------------------------------
// Örnek 2: Yerel sayaç unutur, dış sayaç hatırlar
// ---------------------------------------------------------------------
{
  let totalVisits = 0;                     // dış sayaç: fonksiyon bitse de yaşar

  function visitPage() {
    let pageViews = 0;                     // yerel sayaç: her çağrıda 0'dan doğar
    pageViews = pageViews + 1;             // yerel sayacı 1 artır
    totalVisits = totalVisits + 1;         // let yok → DIŞTAKİ değişken güncellenir
    console.log("Yerel: " + pageViews + ", Toplam: " + totalVisits);
  }

  visitPage();   // Yerel: 1, Toplam: 1
  visitPage();   // Yerel: 1, Toplam: 2
  visitPage();   // Yerel: 1, Toplam: 3

  /*
    Adım adım
    Adım | Çalışan kod                                   | totalVisits (dış) | pageViews (yerel)
    1    | let totalVisits = 0;                          | 0                 | yok
    2    | 1. visitPage() → let pageViews = 0;           | 0                 | 0
    3    | pageViews = pageViews + 1;                    | 0                 | 1
    4    | totalVisits = totalVisits + 1;                | 1                 | 1
    5    | yazdırır, fonksiyon biter                     | 1                 | yok (silindi)
    6    | 2. visitPage() → let pageViews = 0;           | 1                 | 0 (yeniden doğdu)
    7    | iki + 1 satırı çalışır                        | 2                 | 1
    9    | 3. çağrı aynı şekilde                         | 3                 | yok

    Ders: yerel sayaç hiçbir şey hatırlamaz. Hatırlanması gereken şey dışarıda tutulur
    ya da return ile dışarı verilir.
  */
}


// ---------------------------------------------------------------------
// Örnek 3: Gölgeleme ve doğru yol (parametre + return)
// ---------------------------------------------------------------------
{
  const BONUS = 5;                               // dış sabit: fonksiyonlar okuyabilir
  let score = 10;                                // dış değişken

  function addBonus(points) {                    // points: parametre = yerel değişken
    let score = points + BONUS;                  // yerel score: dıştakini GÖLGELER
    return score;                                // yerel score'un değeri döner
  }

  let newScore = addBonus(score);                // dıştaki score'un değeri (10) gönderilir
  console.log("Yeni skor: " + newScore);         // 15
  console.log("Dıştaki skor: " + score);         // 10 (değişmedi)
  // TODO: dıştaki score'u addBonus'un döndürdüğü değerle güncelle (tek satır)
  // Cevap: score = addBonus(score); → başına let yazarsan "already declared" hatası alırsın
  console.log("Güncel skor: " + score);          // TODO'dan sonra: 15
}


// ---------------------------------------------------------------------
// Sık hatalar
// ---------------------------------------------------------------------

// HATA 1: Yerel değişkeni dışarıda kullanmak
//   function calculate() {
//     let result = 5 * 4;
//   }
//   calculate();
//   console.log(result);
//   → ReferenceError: result is not defined
//   result fonksiyonun içinde doğdu, fonksiyon bitince silindi.
//   Düzeltme: içeride return result; dışarıda let result = calculate();

// HATA 2: Parametreyle aynı adla let yazmak
//   function greet(name) {
//     let name = "Ali";
//   }
//   → SyntaxError: Identifier 'name' has already been declared
//   Parametre zaten yerel bir değişkendir; aynı adla ikinci kez let yazılamaz.
//   Düzeltme: let yazmadan name = "Ali"; ya da başka bir isim kullan.

// HATA 3: Dıştakini değiştirmek isterken içeride let yazmak
//   let steps = 1000;
//   function walk() {
//     let steps = steps + 500;
//   }
//   walk();
//   → ReferenceError: Cannot access 'steps' before initialization
//   İçeride let steps yazınca o satırdaki her steps YENİ yerel değişken sayılır;
//   sağ taraf hesaplanırken bu yeni değişkenin henüz değeri yoktur.
//   Düzeltme: steps = steps + 500; ya da daha temiz: let newSteps = steps + 500;


// ---------------------------------------------------------------------
// Tahmin et
// ---------------------------------------------------------------------
{
  // Tahmin 1
  let color = "mavi";

  function paint() {
    let color = "kırmızı";
    console.log("İçeride: " + color);
  }

  paint();
  console.log("Dışarıda: " + color);
  // Cevap: İçeride: kırmızı / Dışarıda: mavi → içerideki let color dıştakini gölgeledi, değiştirmedi.
}

{
  // Tahmin 2
  let count = 0;

  function increase() {
    count = count + 1;
  }

  increase();
  increase();
  console.log(count);
  // Cevap: 2 → içeride let olmadığı için dıştaki count iki kez arttı.
}


/*
  GERÇEK HAYATTA
  Site adı, sunucu adresi gibi her yerde gereken sabitler dosyanın en üstünde const durur.
  Bir butonun hesapladığı geçici değerler fonksiyonun içinde yerel kalır. Sunucuya aynı anda
  binlerce istek gelir; her çağrının yerel değişkenleri ayrı olduğu için kullanıcıların
  verisi birbirine karışmaz.

  ÖZET
  - İçeride tanımlananlar (ve parametreler) yereldir: dışarıdan görülmez, her çağrıda sıfırdan doğar.
  - Fonksiyon dış değişkenleri görür ve değiştirebilir; aynı adda yerel varsa yerel kazanır (gölgeleme).
  - En temiz yol: bilgi parametreyle girsin, sonuç return ile çıksın.
*/
