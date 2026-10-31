/*
  Görev 7 (Çok zor): Kimlik numarası doğrulayıcı

  Numara 11 haneli olmalı. Haneler soldan d1 ... d11:
  10. hane = ((d1+d3+d5+d7+d9) * 7 - (d2+d4+d6+d8)) % 10
  11. hane = (d1 + d2 + ... + d10) % 10
  Sayı metne çevrilmeden, haneler % ve bölme ile ayrılır.
  Kullanılan numaralar uydurma test numaralarıdır.
*/

'use strict';

let tcNo = 10000000146;

function countDigits(n) {
    let count = 0;
    while (n > 0) {
        n = (n - n % 10) / 10;
        count = count + 1;
    }
    return count;
}

function getDigit(n, position) {
    let removeCount = 11 - position;
    for (let i = 0; i < removeCount; i++) {
        n = (n - n % 10) / 10;
    }
    return n % 10;
}

function getTcError(tcNo) {
    if (countDigits(tcNo) !== 11) {
        return "11 haneli olmalı";
    }

    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i <= 9; i++) {
        if (i % 2 === 1) {
            oddSum = oddSum + getDigit(tcNo, i);
        } else {
            evenSum = evenSum + getDigit(tcNo, i);
        }
    }

    let digit10 = (oddSum * 7 - evenSum) % 10;
    if (digit10 < 0) {
        digit10 = digit10 + 10;
    }
    if (digit10 !== getDigit(tcNo, 10)) {
        return "10. hane hatalı";
    }

    let total = oddSum + evenSum + getDigit(tcNo, 10);
    if (total % 10 !== getDigit(tcNo, 11)) {
        return "11. hane hatalı";
    }

    return "";
}

let error = getTcError(tcNo);

if (error === "") {
    console.log(tcNo + " → Geçerli");
} else {
    console.log(tcNo + " → Geçersiz: " + error);
}
