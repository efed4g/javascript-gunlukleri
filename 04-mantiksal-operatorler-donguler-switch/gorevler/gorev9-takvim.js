/*
  Görev 9: Takvim yazıcı

  Yıl 1583'ten küçükse ya da ay 1-12 dışındaysa "Geçersiz tarih!" yazılır.
  Artık yıl: 4'e bölünür ve 100'e bölünmez, ya da 400'e bölünür.
  Ayın gün sayısı switch ile bulunur, Şubat artık yılda 29 gün.
  Ayın 1'inin haftanın hangi günü olduğu Zeller formülüyle hesaplanır.
  Takvim Pazartesi'den başlayan bir tablo olarak yazılır, markedDay günü * ile işaretlenir.
  En sonda ayda kaç iş günü ve kaç hafta sonu günü olduğu yazılır.
*/

let year = 2026;
let month = 10;
let markedDay = 20;

if (year < 1583 || month < 1 || month > 12) {
  console.log("Geçersiz tarih!");
} else {
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  let monthName;
  switch (month) {
    case 1: monthName = "Ocak"; break;
    case 2: monthName = "Şubat"; break;
    case 3: monthName = "Mart"; break;
    case 4: monthName = "Nisan"; break;
    case 5: monthName = "Mayıs"; break;
    case 6: monthName = "Haziran"; break;
    case 7: monthName = "Temmuz"; break;
    case 8: monthName = "Ağustos"; break;
    case 9: monthName = "Eylül"; break;
    case 10: monthName = "Ekim"; break;
    case 11: monthName = "Kasım"; break;
    case 12: monthName = "Aralık"; break;
  }

  let daysInMonth;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
    case 2:
      daysInMonth = isLeapYear ? 29 : 28;
      break;
    default:
      daysInMonth = 31;
  }

  let m = month;
  let y = year;
  if (month <= 2) {
    m = month + 12;
    y = year - 1;
  }
  let K = y % 100;
  let J = (y - K) / 100;

  let a = 13 * (m + 1);
  let part1 = (a - a % 5) / 5;
  let part2 = (K - K % 4) / 4;
  let part3 = (J - J % 4) / 4;

  let h = (1 + part1 + K + part2 + part3 + 5 * J) % 7;
  let firstWeekday = ((h + 5) % 7) + 1;

  console.log(`      ${monthName} ${year}${isLeapYear ? " (artık yıl)" : ""}`);
  console.log("Pt  Sa  Ça  Pe  Cu  Ct  Pz");

  let line = "";
  for (let i = 1; i < firstWeekday; i++) {
    line += "    ";
  }

  let weekday = firstWeekday;
  let workDays = 0;
  let weekendDays = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    let dayText = day < 10 ? " " + day : "" + day;
    let mark = day === markedDay ? "*" : " ";
    line += dayText + mark + " ";

    if (weekday <= 5) {
      workDays++;
    } else {
      weekendDays++;
    }

    if (weekday === 7) {
      console.log(line);
      line = "";
      weekday = 1;
    } else {
      weekday++;
    }
  }

  if (line !== "") {
    console.log(line);
  }

  console.log(`Bu ayda ${workDays} iş günü, ${weekendDays} hafta sonu günü var.`);
}
