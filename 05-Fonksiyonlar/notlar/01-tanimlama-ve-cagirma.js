// =====================================================================
// 01 - Fonksiyon tanımlama ve çağırma (declaration & call)
// Notlar: fonksiyonlar.md → 1.1
// Çalıştır: node 05-Fonksiyonlar/notlar/01-tanimlama-ve-cagirma.js
// =====================================================================

/*
  BAŞLAMADAN: Sen zaten fonksiyon kullanıyorsun
  - console.log("Merhaba") → JS'in hazır bir fonksiyonu (built-in function).
    console.log adı, () "çalış" komutu, "Merhaba" ona verdiğin bilgi.
  - Number("42") de hazır bir fonksiyon: "42" verirsin, 42 geri alırsın.

  NE?
  Fonksiyon (function): bir işi yapan kod satırlarını bir isim altında paketlemek.
  - Tanımlamak (define / declare): paketi hazırlayıp isim vermek.
    Bu sırada içindeki kodlar ÇALIŞMAZ, sadece hafızaya kaydedilir.
  - Çağırmak (call / invoke): adını parantezle yazıp "şimdi çalış" demek.

  NEDEN VAR?
  Aynı 3 satırı 3 yere kopyaladın; değişiklik gelince 3 yeri tek tek bulman gerekir,
  birini unutursan tutarsızlık olur. Fonksiyonla bir kez yazar, istediğin yerde çağırırsın.
  → DRY (Don't Repeat Yourself, "kendini tekrar etme") ilkesi.

  BENZETME: Çaycı Rıza Abi
  Rıza Abi'ye çayın tarifini bir kez anlatırsın ("suyu kaynat, 2 kaşık çay, 10 dk bekle")
  → TANIMLAMA (anlattığın an ortada çay yok).
  "Rıza Abi, bir çay!" diye seslenirsin → ÇAĞIRMA (aynı adımları baştan uygular).
  Tarifi bir kez anlatırsın, yüz kez çağırırsın.

  KALIP
    function functionName() {
      // gövde (body): çağrılınca çalışacak kodlar
    }

    functionName(); // çağırma

  - function: anahtar kelime (keyword) → "şimdi bir fonksiyon tanımlıyorum".
  - functionName: değişken isim kurallarıyla aynı (camelCase, rakamla başlamaz, boşluk yok).
    Bir iş yaptığı için genelde fiille başlar:
      show… gösterir · get… getirir · calc… hesaplar · check… true/false verir · create… oluşturur
  - (): parametrelerin yeri (1.2). Boş olsa da yazmak ZORUNLU.
  - { }: gövde. if ve for'daki süslü parantezlerle aynı mantık.
  - functionName(); → parantezi yazmazsan fonksiyon ÇALIŞMAZ.
  - Bu yazıma fonksiyon bildirimi (function declaration) denir. Kapanış }'den sonra ; gerekmez.

  ALTIN KURAL: Çağrı yapılınca fonksiyonun içine girilir; gövde bitince tam olarak
  çağrının yapıldığı yere geri dönülür.
*/


// ---------------------------------------------------------------------
// Örnek 1: En basit hali
// ---------------------------------------------------------------------
{
  // Tanımlama: bu satırlar şimdilik ÇALIŞMAZ, sadece hafızaya kaydedilir
  function showWelcome() {
    console.log("Hoş geldin!");      // çağrılınca yapılacak 1. iş
    console.log("--------------");   // çağrılınca yapılacak 2. iş
  }

  showWelcome(); // 1. çağrı: gövdedeki iki satır çalışır
  showWelcome(); // 2. çağrı: aynı iki satır yeniden çalışır
}


// ---------------------------------------------------------------------
// Örnek 2: Döngü içinde çağırmak
// ---------------------------------------------------------------------
{
  function celebrateGoal() {         // gol sevinci fonksiyonunu tanımla
    console.log("Goool!");           // fonksiyonun tek işi
  }

  for (let i = 1; i <= 3; i++) {     // 3 gol: döngü 3 tur döner
    celebrateGoal();                 // her turda fonksiyonu çağır
  }
  console.log("Maç bitti: 3-0");     // döngü bitince bir kez çalışır

  /*
    Adım adım:
    Adım | Çalışan kod                       | Ne oluyor?                                   | i
    1    | function celebrateGoal() {...}    | hafızaya kaydedilir, çalışmaz                | –
    2    | let i = 1; → i <= 3               | 1 <= 3 doğru, döngüye girilir                | 1
    3    | celebrateGoal();                  | fonksiyonun içine "zıplanır"                 | 1
    4    | console.log("Goool!");            | yazdırır; fonksiyon biter, çağrıya dönülür   | 1
    5    | i++ → i <= 3                      | 2 <= 3 doğru → Goool!                        | 2
    7    | i++ → i <= 3                      | 3 <= 3 doğru → Goool!                        | 3
    9    | i++ → i <= 3                      | 4 <= 3 yanlış, döngü biter                   | 4
    10   | console.log("Maç bitti: 3-0");    | yazdırır, program biter                      | –
  */
}


// ---------------------------------------------------------------------
// Örnek 3: Fonksiyon içinden fonksiyon çağırmak
// ---------------------------------------------------------------------
{
  function showTitle() {                    // başlık fonksiyonunu tanımla
    console.log("*** OYUN MENÜSÜ ***");     // başlığı yazdırır
  }

  function showMenu() {                     // menü fonksiyonunu tanımla
    showTitle();                            // fonksiyon içinden başka fonksiyonu çağır
    console.log("1. Yeni oyun");            // 1. seçenek
    console.log("2. Devam et");             // 2. seçenek
    // TODO: başlığı menünün en altında bir kez daha göster
    // Cevap: showTitle();
  }

  showMenu();                               // tek çağrı → iki fonksiyon çalışır
}


// ---------------------------------------------------------------------
// Sık hatalar
//   Terminaldeki hata mesajını okuma sırası:
//   1. dosya adı ve satır numarası  2. hatalı satır  3. altında ^ (hatanın tam yeri)
//   4. en altta hatanın türü ve mesajı. (Altındaki "at ..." satırlarını şimdilik boşver.)
// ---------------------------------------------------------------------
{
  // HATA 1: Parantezi unutmak (hata mesajı YOK, ama çalışmaz)
  function sayHi() {
    console.log("Selam!");
  }

  sayHi;                            // parantez yok → çağrılmadı, hiçbir şey olmaz
  console.log(sayHi);               // [Function: sayHi] → "bu bir fonksiyon, adı sayHi"
  console.log("Cevap: " + sayHi);   // metinle birleşince fonksiyonun KODUNU yazdırır
  // "Selam!" hiç yazılmadı. Düzeltme: sayHi();
}

// HATA 2: Adı farklı yazmak (büyük/küçük harf)
//   function showScore() { console.log("Skor: 10"); }
//   showscore();
//   → ReferenceError: showscore is not defined
//   JS büyük/küçük harfe duyarlıdır (case-sensitive): showscore ≠ showScore.
//   Düzeltme: showScore();

// HATA 3: function kelimesini unutmak
//   sayHi() {
//     console.log("Selam!");
//   }
//   → SyntaxError: Unexpected token '{'
//   JS sayHi() kısmını bir çağrı sandı, ardından gelen { ona anlamsız geldi.
//   Düzeltme: function sayHi() { ... }


// ---------------------------------------------------------------------
// Tahmin et (önce kafanda çöz, sonra çalıştırıp bak)
// ---------------------------------------------------------------------
{
  // Tahmin 1
  function cheer() {
    console.log("Haydi!");
  }

  console.log("Maç başlıyor");
  cheer();
  cheer;
  cheer();
  // Cevap: Maç başlıyor / Haydi! / Haydi!  → ortadaki cheer; parantezsiz, hiçbir şey yapmaz.
}

{
  // Tahmin 2
  function first() {
    console.log("A");
    second();
    console.log("C");
  }

  function second() {
    console.log("B");
  }

  first();
  console.log("D");
  // Cevap: A / B / C / D → first A'yı yazar, B için second'a zıplar,
  // second bitince first kaldığı yerden C ile devam eder. En son D.
}


/*
  GERÇEK HAYATTA
  "Giriş yap" butonuna basınca handleLogin() gibi bir fonksiyon çalışır.
  Sunucuda "kullanıcıyı kaydet", "e-posta gönder" gibi her iş ayrı bir fonksiyondur.

  ÖZET
  - function ad() { ... } ile tanımlanır. Tanımlamak çalıştırmak DEĞİLDİR.
  - ad() ile çağrılır. Parantez şart; istediğin kadar çağırabilirsin.
  - Bir fonksiyon başka bir fonksiyonu çağırabilir. İş bitince çağrıldığı yere dönülür.
*/
