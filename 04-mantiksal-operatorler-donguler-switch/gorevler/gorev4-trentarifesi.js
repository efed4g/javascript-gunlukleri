/*
  Görev 4: Tren tarifesi oluşturucu

  Sefer aralığı 0 veya negatifse "Sefer aralığı 0'dan büyük olmalı!" yazılır.
  Seferler ilk saatten başlar ve her intervalMinutes dakikada bir kalkar,
  son sefer en geç lastHour:00'da. Saat ve dakika iki haneli yazılır (06:40).
  Her 4. sefer Ekspres, 07:00-09:00 ve 17:00-19:00 arası Yoğun saat olarak işaretlenir.
  En sonda toplam sefer ve yoğun saatteki sefer sayısı yazılır.
*/

let firstHour = 6;
let firstMinute = 40;
let intervalMinutes = 25;
let lastHour = 9;

if (intervalMinutes <= 0) {
  console.log("Sefer aralığı 0'dan büyük olmalı!");
} else {
  let time = firstHour * 60 + firstMinute;
  let endTime = lastHour * 60;

  let tripCount = 0;
  let peakCount = 0;

  while (time <= endTime) {
    tripCount++;

    let minute = time % 60;
    let hour = (time - minute) / 60;

    let hourText = hour < 10 ? "0" + hour : "" + hour;
    let minuteText = minute < 10 ? "0" + minute : "" + minute;

    let line = `${tripCount}. sefer: ${hourText}:${minuteText}`;

    if (tripCount % 4 === 0) {
      line += " (Ekspres)";
    }

    if ((time >= 420 && time < 540) || (time >= 1020 && time < 1140)) {
      line += " [Yoğun saat]";
      peakCount++;
    }

    console.log(line);

    time += intervalMinutes;
  }

  if (tripCount === 0) {
    console.log("Bu saat aralığında sefer yok.");
  } else {
    console.log(`Toplam ${tripCount} sefer, ${peakCount} tanesi yoğun saatte.`);
  }
}
