/*
  Görev 2: Not ortalaması

  Verilen başlangıç kodundaki değişken isimlerini anlamlı hale getir,
  const / let seçimini yap, 4. not olarak proje notunu ekle ve
  sınav sayısı için EXAM_COUNT sabitini kullan.
*/

"use strict";

const EXAM_COUNT = 4;
const studentName = "Zeynep";
const mathScore = 70;
const physicsScore = 85;
const historyScore = 90;
const projectScore = 75;

let total = mathScore;
total = total + physicsScore;
total = total + historyScore;
total = total + projectScore;

console.log("Öğrenci:", studentName);
console.log("Sınav sayısı:", EXAM_COUNT);
console.log("Ortalama:", total / EXAM_COUNT);
