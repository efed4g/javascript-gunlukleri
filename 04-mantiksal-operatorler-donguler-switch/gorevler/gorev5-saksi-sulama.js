/*
  Görev 5: Saksı sulama takvimi

  Gün sayısı 0 veya negatifse "Geçerli bir gün sayısı gir!" yazılır.
  Sulama aralığı bitkiye göre: kaktüs 7, menekşe 3, domates 2 gün.
  Sulama 1. gün başlar ve her X günde bir tekrarlanır, haftanın günü adıyla yazılır.
  Tatildeysen komşun sular (tatil yoksa null).
  En sonda kaç kez senin, kaç kez komşunun suladığı yazılır.
*/

let plantType = "menekşe";
let daysInMonth = 14;
let firstWeekday = 1;
let vacationStart = 5;
let vacationEnd = 9;

if (daysInMonth <= 0) {
  console.log("Geçerli bir gün sayısı gir!");
} else {
  let interval = 0;
  switch (plantType) {
    case "kaktüs":
      interval = 7;
      break;
    case "menekşe":
      interval = 3;
      break;
    case "domates":
      interval = 2;
      break;
  }

  if (interval === 0) {
    console.log("Bilinmeyen bitki!");
  } else {
    console.log(`${plantType} her ${interval} günde bir sulanacak.`);

    let vStart = vacationStart ?? 0;
    let vEnd = vacationEnd ?? 0;

    let weekday = firstWeekday;
    let myCount = 0;
    let neighborCount = 0;

    for (let day = 1; day <= daysInMonth; day++) {

      if ((day - 1) % interval === 0) {

        let dayName;
        switch (weekday) {
          case 1: dayName = "Pazartesi"; break;
          case 2: dayName = "Salı"; break;
          case 3: dayName = "Çarşamba"; break;
          case 4: dayName = "Perşembe"; break;
          case 5: dayName = "Cuma"; break;
          case 6: dayName = "Cumartesi"; break;
          case 7: dayName = "Pazar"; break;
        }

        let isOnVacation = day >= vStart && day <= vEnd;

        if (isOnVacation) {
          console.log(`${day}. gün (${dayName}): Komşun suladı.`);
          neighborCount++;
        } else {
          console.log(`${day}. gün (${dayName}): Sen suladın.`);
          myCount++;
        }
      }

      weekday++;
      if (weekday > 7) {
        weekday = 1;
      }
    }

    console.log(`Bu ay ${myCount} kez sen, ${neighborCount} kez komşun suladı.`);
  }
}
