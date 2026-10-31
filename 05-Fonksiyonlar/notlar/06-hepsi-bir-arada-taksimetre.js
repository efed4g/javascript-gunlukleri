// =====================================================================
// 06 - Hepsi bir arada: Taksimetre (+ ileri seviye kavramlar)
// Notlar: fonksiyonlar.md → "Hepsi bir arada: Taksimetre"
// Çalıştır: node 05-Fonksiyonlar/notlar/06-hepsi-bir-arada-taksimetre.js
// =====================================================================


// ---------------------------------------------------------------------
// Taksimetre: 1.1 – 1.5'in hepsi bir arada (ücretler örnek olarak seçildi)
// ---------------------------------------------------------------------
const OPENING_FEE = 40;                                        // dış sabit: açılış ücreti (TL)

function calculateFare(km, pricePerKm = 30, isNight = false) {
  let fare = OPENING_FEE + km * pricePerKm;                    // yerel: açılış + yol ücreti
  if (isNight) {
    fare = fare + fare / 2;                                    // gece tarifesi: %50 fazla
  }
  return fare;                                                 // sonucu geri gönder
}

function showFare(passenger, km, isNight = false) {
  let fare = calculateFare(km, undefined, isNight);            // km ücreti varsayılan kalsın
  let period = isNight ? "gece" : "gündüz";                    // koşul operatörü (?)
  console.log(passenger + " (" + km + " km, " + period + "): " + fare + " TL");
}

showFare("Elif", 10);                                          // Elif (10 km, gündüz): 340 TL
showFare("Burak", 10, true);                                   // Burak (10 km, gece): 510 TL
showFare("Selin", 0);                                          // Selin (0 km, gündüz): 40 TL

/*
  SATIR SATIR
  - OPENING_FEE: dış sabit (1.5). İki fonksiyon da görür. Hiç değişmeyen sabitlere
    BÜYÜK_HARF isim vermek yaygın bir gelenek.
  - calculateFare: tanımlama (1.1). 3 parametre (1.2): km zorunlu, pricePerKm ve isNight
    varsayılanlı (1.4) ve kurala uygun olarak SONDALAR.
  - let fare: yerel değişken (1.5), dış sabiti okur. Önce km * pricePerKm, sonra açılış eklenir.
  - if (isNight): gece ise ücretin yarısı kadar ekleme.
  - return fare: ücret çağrıldığı yere gönderilir (1.3).
  - showFare: yazdırma işi bunun görevi, hesap calculateFare'in görevi.
    Her fonksiyonun TEK bir işi var.
  - calculateFare(km, undefined, isNight): fonksiyon içinden fonksiyon çağrısı (1.1);
    ortadakini atlamak için undefined → 30 varsayılanı kalır (1.4).
    Buradaki fare, calculateFare'deki fare ile aynı isimde ama TAMAMEN AYRI bir değişken (1.5).
  - Elif: isNight verilmedi → false. 40 + 10 × 30 = 340
  - Burak: gece. 340 + 340 / 2 = 510
  - Selin: sınır durumu, 0 km. 40 + 0 = 40 (sadece açılış ücreti)
*/


/*
  ---------------------------------------------------------------------
  İLERİ SEVİYE (şimdilik adını bilmen yeterli)
  ---------------------------------------------------------------------
  - Fonksiyon ifadesi (function expression): fonksiyonu bir değişkene koymak.
      const add = function (a, b) { return a + b; };
  - Ok fonksiyonu (arrow function): daha kısa yazım.
      const add = (a, b) => a + b;
  - Yukarı taşıma (hoisting): fonksiyon bildirimleri tanımlandıkları satırdan ÖNCE de
    çağrılabilir. Yine de önce tanımlayıp sonra çağırmak okunabilirlik için iyi alışkanlık.
  - Kalan parametreler (rest parameters): function sum(...numbers) istediğin kadar argümanı
    tek kutuda toplar. Dizileri (array) öğrenince göreceksin.
  - Özyineleme (recursion): bir fonksiyonun kendi kendini çağırması.
*/
