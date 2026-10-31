// =====================================================================
// 02 - Değişkenler: let, const (ve var)
// Notlar: javascript-giris-ve-degiskenler.md → 1.5
// Çalıştır: node 01-giris-ve-degiskenler/notlar/02-let-const.js
// =====================================================================

/*
  KAVRAMLAR
  - Değişken (variable): Bir değeri saklamak için oluşturduğun, isimli bir kutu.
    İçindekini ismiyle çağırırsın.
  - let: Değeri sonradan değiştirilebilen değişken oluşturur.
  - const (constant, sabit): Değeri bir kez verilir ve sonra değiştirilemez.
  - Bildirim (declaration): Değişkeni oluşturmak → let score;
  - Atama (assignment): = ile değer koymak. = "eşittir" demek değil,
    "sağdakini soldaki kutuya koy" demektir.
  - İlk değer verme (initialization): Oluşturma ve atamayı aynı anda yapmak → let score = 0;
  - Yeniden atama (reassignment): score = 10; Başına bir daha let yazılmaz.
  - Değer verilmeden oluşturulan değişkenin değeri undefined (tanımsız) olur.
  - Üzerine yazma: Yeni değer konunca eskisi tamamen kaybolur;
    bir kutuda aynı anda tek bir değer durur.
  - Kopyalama: let b = a; yazınca b'ye a'nın o anki değerinin kopyası konur.
    Sonra a değişse bile b değişmez.
  - Kendini kullanma: score = score + 10; şu demektir: "score'un şu anki değerini al,
    10 ekle, sonucu yine score'a koy." Önce sağ taraf hesaplanır.
  - Hangisini seçmeli? Değeri hiç değişmeyecekse const, değişecekse let.
    Emin değilsen const ile başla; değiştirmen gerekirse JS sana zaten hata verip haber verir.
  - var hakkında kısa not: Değişken oluşturmanın eski yoludur. Aynı ismi tekrar tanımlamaya
    izin verir, tanımlanmadan kullanılınca hata yerine undefined verir ve kapsam (scope)
    kuralları farklıdır. Modern kodda kullanılmaz; eski kodlarda görürsen tanıman yeterli.

  KALIP
    let name = value;       // değiştirilebilir değişken oluştur
    const name = value;     // sabit oluştur (değer vermek ZORUNLU)
    name = newValue;        // yeniden atama (sadece let için), başına let yazılmaz
*/


// ---------------------------------------------------------------------
// 1) Oluşturma ve yeniden atama
// ---------------------------------------------------------------------
{
  let message = "Merhaba";  // message kutusu oluştu, içine "Merhaba" kondu
  console.log(message);     // kutunun içindekini yazdırır (tırnaksız!)
  message = "Güle güle";    // yeniden atama: let yok, eski değer gitti
  console.log(message);     // yeni değeri yazdırır
  console.log("message");   // tırnaklı → değişken değil, düz metin
}


// ---------------------------------------------------------------------
// 2) Kendini kullanma: score = score + ...
// ---------------------------------------------------------------------
{
  const playerName = "Efe";
  let score = 0;
  score = score + 10;
  score = score + 5;
  score = score * 2;
  console.log(playerName, "puanı:", score); // Efe puanı: 30
}


// ---------------------------------------------------------------------
// 3) Kopyalama ve undefined
// ---------------------------------------------------------------------
{
  let first = "elma";
  let second = first;   // o anki değerin kopyası
  first = "armut";
  console.log(first);   // armut
  console.log(second);  // elma (değişmedi)

  let third;
  console.log(third);   // undefined
  third = "elma";
  console.log(third);   // elma
}
