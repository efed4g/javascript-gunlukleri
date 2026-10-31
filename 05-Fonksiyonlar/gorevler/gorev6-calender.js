/*
  Görev 6 (Çok zor): Takvim makinesi

  Bir tarihin haftanın hangi günü ve yılın kaçıncı günü olduğunu bulur.
  Hesap 1 Ocak 2000'in Cumartesi olmasından başlar.
  29.2.2025 ya da 31.4.2026 gibi geçersiz tarihlerde "Geçersiz tarih" yazar.
  Örnek: 29.10.2023 Pazar, yılın 302. günü
*/

'use strict';

let day = 29;
let month = 10;
let year = 2023;

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function daysInMonth(month, year) {
    switch (month) {
        case 2:
            if (isLeapYear(year)) {
                return 29;
            }
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}

function isValidDate(day, month, year) {
    return year >= 2000 &&
           month >= 1 && month <= 12 &&
           day >= 1 && day <= daysInMonth(month, year);
}

function dayOfYear(day, month, year) {
    let total = day;
    for (let m = 1; m < month; m++) {
        total = total + daysInMonth(m, year);
    }
    return total;
}

function getDayName(number) {
    switch (number) {
        case 0:
            return "Pazar";
        case 1:
            return "Pazartesi";
        case 2:
            return "Salı";
        case 3:
            return "Çarşamba";
        case 4:
            return "Perşembe";
        case 5:
            return "Cuma";
        default:
            return "Cumartesi";
    }
}

function getWeekday(day, month, year) {
    let totalDays = 0;
    for (let y = 2000; y < year; y++) {
        if (isLeapYear(y)) {
            totalDays = totalDays + 366;
        } else {
            totalDays = totalDays + 365;
        }
    }
    totalDays = totalDays + dayOfYear(day, month, year) - 1;
    return getDayName((6 + totalDays) % 7);
}

let dateText = day + "." + month + "." + year;

if (isValidDate(day, month, year)) {
    console.log(dateText + " → " + getWeekday(day, month, year) +
                " (yılın " + dayOfYear(day, month, year) + ". günü)");
} else {
    console.log(dateText + " → Geçersiz tarih");
}
