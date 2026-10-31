/*
  Görev 11: Mars kolonisi

  Ekip 1-6 kişi değilse ya da gün sayısı 0 veya negatifse görev iptal edilir.
  Her gün sırayla:
  - Hava (gün % 4): güneşli oksijen +15, rüzgarlı, toz fırtınası oksijen -10,
    soğuk gece yemek - ekip sayısı
  - Her 3. gün hasat: yemek +10 (toz fırtınasında hasat yok)
  - İkmal günü: oksijen +50, yemek +40 (supplyDay null ise ikmal yok)
  - Tüketim: kişi başı 3 oksijen, 2 yemek
  - Oksijen 20'nin ya da yemek 15'in altındaysa kritik seviye uyarısı
  - Oksijen ya da yemek biterse görev başarısız olur
  Bütün günler biterse görev başarılı ve kritik gün sayısı yazılır.
*/

let crewSize = 4;
let missionDays = 10;
let startOxygen = 100;
let startFood = 60;
let supplyDay = 6;

if (crewSize < 1 || crewSize > 6 || missionDays <= 0) {
  console.log("Görev iptal: geçersiz ekip ya da süre!");
} else {
  console.log(`${crewSize} kişilik ekip Mars'a indi. Oksijen: ${startOxygen}, Yemek: ${startFood}`);

  let oxygen = startOxygen;
  let food = startFood;
  let supply = supplyDay ?? 0;
  let criticalDays = 0;
  let isFailed = false;

  for (let day = 1; day <= missionDays; day++) {
    let weather;
    let notes = "";

    switch (day % 4) {
      case 1:
        weather = "güneşli";
        oxygen += 15;
        break;
      case 2:
        weather = "rüzgârlı";
        break;
      case 3:
        weather = "toz fırtınası";
        oxygen -= 10;
        break;
      case 0:
        weather = "soğuk gece";
        food -= crewSize;
        break;
    }

    if (day % 3 === 0 && weather !== "toz fırtınası") {
      food += 10;
      notes += " [Hasat +10]";
    }

    if (day === supply) {
      oxygen += 50;
      food += 40;
      notes += " [İkmal geldi!]";
    }

    oxygen -= 3 * crewSize;
    food -= 2 * crewSize;

    let line = `${day}. gün (${weather}): Oksijen ${oxygen}, Yemek ${food}${notes}`;

    if (oxygen < 20 || food < 15) {
      line += " ⚠ Kritik seviye!";
      criticalDays++;
    }
    console.log(line);

    if (oxygen <= 0 || food <= 0) {
      console.log(`${day}. günde kaynaklar tükendi. Görev başarısız!`);
      isFailed = true;
      break;
    }
  }

  if (!isFailed) {
    console.log(`Görev başarılı! Ekip ${missionDays} günü tamamladı. Kritik gün sayısı: ${criticalDays}`);
  }
}
