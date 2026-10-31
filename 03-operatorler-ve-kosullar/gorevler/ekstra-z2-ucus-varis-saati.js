/*
  Ekstra (Zor): Uçuş varış saati

  Kalkış saati metin olarak, uçuş süresi dakika olarak, varış şehrinin saat farkı
  saat olarak geliyor. Uçuş süresini "X saat Y dakika" olarak, varış saatini de
  yerel saatle SS:DD biçiminde yaz. Ertesi güne geçerse sona "(+1 gün)",
  önceki güne düşerse "(-1 gün)" eklenir.
  Örnek: "23", "45", 150 dakika, -1 saat için "Varış (yerel saat): 01:15 (+1 gün)"
*/

"use strict";

let departureHourText = "23";
let departureMinuteText = "45";
let flightMinutes = 150;
let timeDifference = -1;

let flightMin = flightMinutes % 60;
let flightHours = (flightMinutes - flightMin) / 60;
console.log(`Uçuş süresi: ${flightHours} saat ${flightMin} dakika`);

let totalMinutes = +departureHourText * 60 + +departureMinuteText;

totalMinutes += flightMinutes;
totalMinutes += timeDifference * 60;

let dayNote = "";
if (totalMinutes >= 1440) {
  totalMinutes -= 1440;
  dayNote = " (+1 gün)";
} else if (totalMinutes < 0) {
  totalMinutes += 1440;
  dayNote = " (-1 gün)";
}

let arrivalMinute = totalMinutes % 60;
let arrivalHour = (totalMinutes - arrivalMinute) / 60;

let hh = arrivalHour < 10 ? "0" + arrivalHour : "" + arrivalHour;
let mm = arrivalMinute < 10 ? "0" + arrivalMinute : "" + arrivalMinute;

console.log(`Varış (yerel saat): ${hh}:${mm}${dayNote}`);
