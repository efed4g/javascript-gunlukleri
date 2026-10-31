/*
  Görev 5 (Çok zor): Sesli asistan sayı okuyucu

  numberToWords(n) 0 ile 999999 arasındaki sayıyı Türkçe yazıyla döndürür.
  0 için "sıfır", aralık dışındaki sayılar için "Geçersiz sayı".
  100 "yüz", 1000 "bin" diye okunur ("bir yüz", "bir bin" değil).
  Örnek: 1453 için "bin dört yüz elli üç"
*/

'use strict';

let number = 1453;

function digitWord(d) {
    switch (d) {
        case 1:
            return "bir";
        case 2:
            return "iki";
        case 3:
            return "üç";
        case 4:
            return "dört";
        case 5:
            return "beş";
        case 6:
            return "altı";
        case 7:
            return "yedi";
        case 8:
            return "sekiz";
        case 9:
            return "dokuz";
        default:
            return "";
    }
}

function tensWord(d) {
    switch (d) {
        case 1:
            return "on";
        case 2:
            return "yirmi";
        case 3:
            return "otuz";
        case 4:
            return "kırk";
        case 5:
            return "elli";
        case 6:
            return "altmış";
        case 7:
            return "yetmiş";
        case 8:
            return "seksen";
        case 9:
            return "doksan";
        default:
            return "";
    }
}

function join(a, b) {
    if (a === "") {
        return b;
    }
    if (b === "") {
        return a;
    }
    return a + " " + b;
}

function readHundreds(n) {
    let ones = n % 10;
    let tens = ((n - n % 10) / 10) % 10;
    let hundreds = (n - n % 100) / 100;

    let hundredsText = "";
    if (hundreds === 1) {
        hundredsText = "yüz";
    } else if (hundreds > 1) {
        hundredsText = digitWord(hundreds) + " yüz";
    }

    let result = join(hundredsText, tensWord(tens));
    result = join(result, digitWord(ones));
    return result;
}

function numberToWords(n) {
    if (n < 0 || n > 999999) {
        return "Geçersiz sayı";
    }
    if (n === 0) {
        return "sıfır";
    }

    let rest = n % 1000;
    let thousands = (n - rest) / 1000;

    let thousandsText = "";
    if (thousands === 1) {
        thousandsText = "bin";
    } else if (thousands > 1) {
        thousandsText = readHundreds(thousands) + " bin";
    }

    return join(thousandsText, readHundreds(rest));
}

console.log(number + " → " + numberToWords(number));
