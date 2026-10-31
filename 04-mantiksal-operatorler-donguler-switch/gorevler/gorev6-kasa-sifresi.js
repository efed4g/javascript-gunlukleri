/*
  Görev 6: Kasa şifresi kırıcı

  Deneme hakkı zorluğa göre: kolay 10, normal 5, zor 3.
  Şifre 3 haneli (ilk rakam 0 olamaz) ve küçükten büyüğe denenir.
  Uygun şifre: rakamları farklı, toplamı targetSum ve ipucu varsa ipucu rakamını içeriyor.
  Hak dolunca arama tamamen durur. Hak dolmadan biterse kaç şifre bulunduğu yazılır.
*/

let difficulty = "zor";
let targetSum = 6;
let hintDigit = null;

let maxTries = 0;
switch (difficulty) {
  case "kolay":
    maxTries = 10;
    break;
  case "normal":
    maxTries = 5;
    break;
  case "zor":
    maxTries = 3;
    break;
}

if (maxTries === 0) {
  console.log("Geçersiz zorluk seviyesi!");
} else {
  let found = 0;
  let isLocked = false;

  search: for (let a = 1; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      for (let c = 0; c <= 9; c++) {

        let allDifferent = a !== b && b !== c && a !== c;
        let sumMatches = a + b + c === targetSum;

        let hasHint = hintDigit === null || a === hintDigit || b === hintDigit || c === hintDigit;

        if (!(allDifferent && sumMatches && hasHint)) {
          continue;
        }

        found++;
        console.log(`Deneme ${found}: ${a}${b}${c}`);

        if (found === maxTries) {
          isLocked = true;
          break search;
        }
      }
    }
  }

  if (isLocked) {
    console.log("Deneme hakkın bitti!");
  } else if (found === 0) {
    console.log("Bu ipuçlarıyla şifre bulunamadı.");
  } else {
    console.log(`Tüm olasılıklar denendi: ${found} şifre bulundu.`);
  }
}
