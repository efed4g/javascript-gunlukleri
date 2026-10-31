/*
  Ekstra (Zor): Kaçış odası kilidi

  A kısmı: Kodu çalıştırmadan çıktıyı tahmin et.
  B kısmı: Kodu değiştirmeden, sadece en üstteki değerlerle "Kilit açıldı!" ve
  "Neredeyse!" yazdıran değerleri bul.

  Cevaplarım:
  A: 47, 13, 6, 3, büyük, Yanlış şifre.
     (sayı + metin birleşir, key *= wheel3++ eski değeri kullanır,
     "47" > "5" metin karşılaştırması olduğu için false)
  B: 4, "7", 0 ile key 0 olur: Kilit açıldı!
     5, "3", 2 ile toplam 10, 10 % 5 = 0: Kilit açıldı!
     6, "2", 3 ile key 3, "62" > "5" doğru: Neredeyse!
     wheel1 5 veya büyük ve toplam 5'in katıysa "Kilit açıldı!" çıkar,
     çünkü else if zincirinde ilk doğru koşul kazanır.
*/

"use strict";

let wheel1 = 4;
let wheel2 = "7";
let wheel3 = 2;

let joined = wheel1 + wheel2;
let total = wheel1 + +wheel2 + wheel3;
let key = total % 5;
key *= wheel3++;
let size = key > wheel3 ? "büyük" : "küçük";

console.log(joined);
console.log(total);
console.log(key);
console.log(wheel3);
console.log(size);

if (key === 0) {
  console.log("Kilit açıldı!");
} else if (joined > "5") {
  console.log("Neredeyse!");
} else {
  console.log("Yanlış şifre.");
}
