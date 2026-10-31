// =====================================================================
// 04 - Varsayılan değerler (default parameters)
// Notlar: fonksiyonlar.md → 1.4
// Çalıştır: node 05-Fonksiyonlar/notlar/04-varsayilan-degerler.js
// =====================================================================

/*
  NE?
  Varsayılan değer (default value): parametreye tanımda = ile verdiğin yedek değer.
  Argüman HİÇ verilmezse ya da undefined verilirse bu yedek kullanılır.

  NEDEN VAR?
  Argümanı unutunca "Merhaba undefined!" çıkıyordu. Onun yerine "Merhaba misafir" demek,
  müzik uygulamasında ses seçilmezse 50'den başlamak istersin.

  BENZETME
  Rıza Abi'ye "Abi bir çay" dedin, nasıl olacağını söylemedin. Her zamanki gibi getirir:
  1 bardak, normal demli, şekersiz → VARSAYILAN AYAR. "Açık olsun" dersen seninki geçerli.
  Dikkat: "Şeker 0 olsun" dersen bu da bir cevaptır. JS'te de 0 verirsen varsayılan devreye girmez.

  KALIP
    function functionName(param1, param2 = defaultValue) {
      // param2 verilmezse (ya da undefined verilirse) defaultValue kullanılır
    }

  KURALLAR
  - Yazım: parametre adı + = + yedek değer. ":" DEĞİL, "=" kullanılır.
  - Sadece iki durumda devreye girer: argüman yoksa ya da undefined ise.
    0, "" (boş metin), null, false verilirse ONLAR kullanılır.
  - Varsayılanlı parametreleri SONA koy. Argümanlar soldan sağa yerleşir; varsayılanlı
    parametre baştaysa ilk argüman onun üzerine yazılır.
  - Ortadakini atlamak için yerine undefined yaz: planWorkout("Çarşamba", undefined, "yüzme")
  - Varsayılan bir işlem ya da ÖNCEKİ bir parametre de olabilir (Örnek 4).
  - Eski usul (fonksiyonun içinde):
      if (level === undefined) { level = 50; }
      level = level ?? 50;    // 0'ı korur
      level = level || 50;    // 0'ı da "yok" sayar! (Örnek 3'te farkı gör)
*/


// ---------------------------------------------------------------------
// Örnek 1: En basit hali
// ---------------------------------------------------------------------
{
  function greet(name = "misafir") {         // name gelmezse "misafir" olur
    console.log("Merhaba " + name + "!");    // kutudaki değeri kullan
  }

  greet("Ayşe");                             // argüman var → name = "Ayşe"
  greet();                                   // argüman yok → name = "misafir"
}


// ---------------------------------------------------------------------
// Örnek 2: Zorunlu ve varsayılanlı parametreler bir arada
// ---------------------------------------------------------------------
{
  function planWorkout(day, minutes = 30, type = "yürüyüş") {   // 1 zorunlu, 2 varsayılan
    return day + ": " + minutes + " dakika " + type;            // metni birleştirip döndür
  }

  console.log(planWorkout("Pazartesi", 45, "koşu"));          // hepsi verildi
  console.log(planWorkout("Salı"));                           // minutes ve type varsayılan
  console.log(planWorkout("Çarşamba", undefined, "yüzme"));   // ortadakini atlamak için undefined

  /*
    Adım adım: planWorkout("Çarşamba", undefined, "yüzme")
    Adım | Ne oluyor?                                              | day        | minutes   | type
    1    | argümanlar soldan sağa kutulara konur                   | "Çarşamba" | undefined | "yüzme"
    2    | minutes undefined → varsayılan 30 devreye girer         | "Çarşamba" | 30        | "yüzme"
    3    | type zaten "yüzme" → "yürüyüş" kullanılmaz              | "Çarşamba" | 30        | "yüzme"
    4    | return → "Çarşamba: 30 dakika yüzme" döner              |            |           |
  */
}


// ---------------------------------------------------------------------
// Örnek 3: 0, undefined, null ve eski usul ??
// ---------------------------------------------------------------------
{
  function setVolume(level = 50) {      // varsayılan: 50
    return "Ses seviyesi: " + level;    // metni döndür
  }

  console.log(setVolume());             // argüman yok → 50
  console.log(setVolume(0));            // 0 geçerli bir değer → 0 (sessiz mod)
  console.log(setVolume(undefined));    // undefined = "vermedim" → 50
  console.log(setVolume(null));         // null bir değerdir → varsayılan devreye GİRMEZ → null

  function setVolumeOld(level) {        // eski usul: parametrede varsayılan yok
    // TODO: level null ya da undefined ise 50 olsun, 0 ise 0 kalsın (?? ile tek satır)
    // Cevap: level = level ?? 50;
    //   ?? sadece null ve undefined'da sağdakini alır, 0'ı korur.
    //   level || 50 yazsaydın setVolumeOld(0) da 50 çıkardı → sessiz mod bozulurdu.
    return "Ses seviyesi: " + level;    // metni döndür
  }

  console.log(setVolumeOld(null));      // TODO'dan sonra: 50
  console.log(setVolumeOld(0));         // TODO'dan sonra: 0
}


// ---------------------------------------------------------------------
// Örnek 4: Varsayılan olarak önceki parametre
// ---------------------------------------------------------------------
{
  function getRectArea(width, height = width) {   // height verilmezse kare say
    return width * height;
  }

  console.log(getRectArea(5));      // 25
  console.log(getRectArea(5, 2));   // 10
}


// ---------------------------------------------------------------------
// Sık hatalar
// ---------------------------------------------------------------------
{
  // HATA 1: Varsayılanlı parametreyi başa koymak (hata mesajı YOK)
  function greet(greeting = "Merhaba", name) {
    console.log(greeting + " " + name);
  }

  greet("Ayşe");   // Ayşe undefined → "Ayşe" greeting kutusuna girdi, name boş kaldı
  // Düzeltme: function greet(name, greeting = "Merhaba")
}

// HATA 2: = yerine : kullanmak
//   function greet(name: "misafir") { ... }
//   → SyntaxError: Unexpected token ':'
//   Düzeltme: function greet(name = "misafir")

{
  // HATA 3: null'un varsayılanı tetikleyeceğini sanmak (hata mesajı YOK)
  function greet(name = "misafir") {
    console.log("Merhaba " + name);
  }

  greet(null);     // Merhaba null → varsayılan SADECE undefined'da çalışır
  // Düzeltme: argüman verme ya da undefined ver. null da gelebiliyorsa
  // içeride: name = name ?? "misafir";
}


// ---------------------------------------------------------------------
// Tahmin et
// ---------------------------------------------------------------------
{
  // Tahmin 1
  function makeTea(cups = 1, sugar = 0) {
    return cups + " bardak, " + sugar + " şeker";
  }

  console.log(makeTea());
  console.log(makeTea(3));
  console.log(makeTea(2, 1));
  // Cevap: 1 bardak, 0 şeker / 3 bardak, 0 şeker / 2 bardak, 1 şeker
}

{
  // Tahmin 2 (** üs alma operatörü)
  function power(base, exponent = 2) {
    return base ** exponent;
  }

  console.log(power(5));
  console.log(power(2, 3));
  console.log(power(4, 0));
  // Cevap: 25 / 8 / 1
  // power(5): exponent varsayılan 2 → 5² = 25
  // power(4, 0): 0 verildi, varsayılan devreye girmez → 4⁰ = 1
}


/*
  GERÇEK HAYATTA
  getResults(query, page = 1) sayfa numarası gelmezse ilk sayfayı gösterir.
  getPosts(limit = 20) sayı belirtilmemişse 20 gönderi döndürür.

  ÖZET
  - param = değer ile yazılır; argüman yoksa ya da undefined ise kullanılır.
  - 0, "", null gibi değerler verilirse varsayılan devreye girmez.
  - Varsayılanlı parametreler sona yazılır; ortadakini atlamak için undefined verilir.
*/
