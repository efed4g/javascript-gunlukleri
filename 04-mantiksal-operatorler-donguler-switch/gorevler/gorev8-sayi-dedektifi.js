/*
  Görev 8: Sayı dedektifi

  startNumber'dan endNumber'a kadar her sayı incelenir (start büyükse yerleri değişir).
  10'un katları atlanır ama kaç tane atlandığı sayılır.
  Etiketler: ASAL (sadece 1'e ve kendine bölünür), PALİNDROM (tersten de aynı, 121 gibi),
  SİHİRLİ (rakamları toplamı 7'nin katı, 16 gibi).
  Etiketi olmayan sayı yazılmaz. Hem asal hem palindrom olana "Süper sayı" denir.
  En fazla maxFinds sayı yazılır (null ise 10). En sonda özet yazılır.
*/

let startNumber = 140;
let endNumber = 95;
let maxFindsInput = null;

if (startNumber > endNumber) {
  let temp = startNumber;
  startNumber = endNumber;
  endNumber = temp;
  console.log(`Sayılar ters girilmiş, ${startNumber}-${endNumber} olarak düzelttim.`);
}

let maxFinds = maxFindsInput ?? 10;

let checkedCount = 0;
let skippedCount = 0;
let foundCount = 0;
let primeCount = 0;
let palindromeCount = 0;
let magicCount = 0;
let stoppedAt = null;

for (let n = startNumber; n <= endNumber; n++) {

  if (foundCount >= maxFinds) {
    stoppedAt = n;
    break;
  }

  if (n % 10 === 0) {
    skippedCount++;
    continue;
  }
  checkedCount++;

  let isPrime = n >= 2;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      isPrime = false;
      break;
    }
  }

  let temp = n;
  let reversed = 0;
  let digitSum = 0;
  do {
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    digitSum += lastDigit;
    temp = (temp - lastDigit) / 10;
  } while (temp > 0);

  let isPalindrome = reversed === n;
  let isMagic = digitSum % 7 === 0;

  if (!isPrime && !isPalindrome && !isMagic) {
    continue;
  }

  let line = `${n}:`;
  if (isPrime) {
    line += " [ASAL]";
    primeCount++;
  }
  if (isPalindrome) {
    line += " [PALİNDROM]";
    palindromeCount++;
  }
  if (isMagic) {
    line += ` [SİHİRLİ ${digitSum}]`;
    magicCount++;
  }
  if (isPrime && isPalindrome) {
    line += " ★ Süper sayı!";
  }

  console.log(line);
  foundCount++;
}

console.log("-----");
if (stoppedAt !== null) {
  console.log(`Bulgu sınırına (${maxFinds}) ulaşıldı, ${stoppedAt} sayısında durdum.`);
}
console.log(`İncelenen: ${checkedCount}, atlanan: ${skippedCount}, bulunan: ${foundCount}`);
console.log(`Asal: ${primeCount}, palindrom: ${palindromeCount}, sihirli: ${magicCount}`);
