/*
  Görev 4 (Zor): Uyku hesaplayıcı

  Yatış saatine göre 8 ve 6 saat uyursan kaçta kalkacağını hesaplar.
  - toMinutes(hour, minute): saati gece yarısından beri geçen dakikaya çevirir
  - formatTime(totalMinutes): dakikayı "SS:DD" metnine çevirir
  - getWakeUpTime(hour, minute, sleepHours = 8): uyanma saatini döndürür,
    gece yarısını geçerse başa sarar (23:45 + 8 saat = 07:45)
*/

let sleepHour = 23;
let sleepMinute = 45;

const MINUTES_IN_DAY = 1440;

function toMinutes(hour, minute) {
  return hour * 60 + minute;
}

function formatTime(totalMinutes) {
  let minute = totalMinutes % 60;
  let hour = (totalMinutes - minute) / 60;
  let hourText = hour;
  let minuteText = minute;
  if (hour < 10) {
    hourText = "0" + hour;
  }
  if (minute < 10) {
    minuteText = "0" + minute;
  }
  return hourText + ":" + minuteText;
}

function getWakeUpTime(hour, minute, sleepHours = 8) {
  let total = toMinutes(hour, minute) + sleepHours * 60;
  return formatTime(total % MINUTES_IN_DAY);
}

console.log("Yatış saati: " + formatTime(toMinutes(sleepHour, sleepMinute)));
console.log("8 saat uyursan: " + getWakeUpTime(sleepHour, sleepMinute));
console.log("6 saat uyursan: " + getWakeUpTime(sleepHour, sleepMinute, 6));
