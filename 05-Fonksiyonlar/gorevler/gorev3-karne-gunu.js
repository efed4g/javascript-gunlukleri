/*
  Görev 3: Karne günü

  Üç sınavın ortalamasını ve geçip geçmediğini yazdıran programdaki
  3 hata düzeltildi:
  - calculateAverage hesapladığı ortalamayı return etmiyordu
  - fonksiyonun içindeki yerel average dışarıda kullanılıyordu,
    dönen değer dışarıda bir değişkene alındı
  - getResult parantezsiz yazılmıştı, getResult(average) olarak çağrıldı
*/

let exam1 = 70;
let exam2 = 45;
let exam3 = 80;

function calculateAverage(a, b, c) {
  let average = (a + b + c) / 3;
  return average;
}

function getResult(average) {
  if (average >= 50) {
    return "Geçti";
  }
  return "Kaldı";
}

let average = calculateAverage(exam1, exam2, exam3);
console.log("Ortalama: " + average);
console.log("Sonuç: " + getResult(average));
