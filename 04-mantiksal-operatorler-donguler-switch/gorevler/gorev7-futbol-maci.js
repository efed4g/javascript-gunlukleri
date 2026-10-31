/*
  Görev 7: Futbol maçı simülatörü

  Takım adı boşsa "Ev Sahibi" / "Deplasman" yazılır. Tohum (seed) null ise 42
  kullanılır, 0 da geçerli bir tohumdur. Hücum gücü 1-10 dışındaysa maç başlamaz.
  Her dakika yeni bir zar üretilir: seed = (seed * 73 + 11) % 101
  Zar ev sahibinin gücünden küçükse ev sahibi, 100 - deplasman gücünden büyükse
  deplasman gol atar. 45. dakikada devre arası, 90. dakikada normal süre sonucu yazılır.
  60. dakikadan sonra fark 3 veya daha fazla olursa bir kez "maç koptu" yazılır.
  Kupa maçı berabere biterse uzatma (91-120), hâlâ beraberse penaltılar oynanır.
  En sonda kazanan ya da beraberlik yazılır.
*/

let homeTeam = "Kartal";
let awayTeam = "Aslan";
let homePower = 3;
let awayPower = 2;
let seedInput = 42;
let isCupMatch = true;

let homeName = homeTeam || "Ev Sahibi";
let awayName = awayTeam || "Deplasman";
let seed = seedInput ?? 42;

let powersValid = homePower >= 1 && homePower <= 10 && awayPower >= 1 && awayPower <= 10;

if (!powersValid) {
  console.log("Hücum gücü 1 ile 10 arasında olmalı!");
} else {
  console.log(`${homeName} - ${awayName} maçı başladı!`);

  let homeGoals = 0;
  let awayGoals = 0;
  let lastMinute = 90;
  let blowoutAnnounced = false;

  for (let minute = 1; minute <= lastMinute; minute++) {

    seed = (seed * 73 + 11) % 101;

    if (seed < homePower) {
      homeGoals++;
      console.log(`${minute}' GOL! ${homeName} (${homeGoals} - ${awayGoals})`);
    } else if (seed > 100 - awayPower) {
      awayGoals++;
      console.log(`${minute}' GOL! ${awayName} (${homeGoals} - ${awayGoals})`);
    }

    let difference = homeGoals - awayGoals;
    if (minute > 60 && !blowoutAnnounced && (difference >= 3 || difference <= -3)) {
      console.log(`${minute}' Fark ${difference > 0 ? difference : -difference} oldu, maç koptu!`);
      blowoutAnnounced = true;
    }

    switch (minute) {
      case 45:
        console.log(`Devre arası: ${homeGoals} - ${awayGoals}`);
        break;
      case 90:
        console.log(`Normal süre bitti: ${homeGoals} - ${awayGoals}`);
        if (homeGoals === awayGoals && isCupMatch) {
          console.log("Uzatmalara gidiyoruz!");
          lastMinute = 120;
        }
        break;
      case 105:
        console.log(`Uzatmanın ilk yarısı bitti: ${homeGoals} - ${awayGoals}`);
        break;
      case 120:
        console.log(`Uzatmalar bitti: ${homeGoals} - ${awayGoals}`);
        break;
    }
  }

  let penaltyWinner = null;

  if (homeGoals === awayGoals && isCupMatch) {
    console.log("Penaltılar!");
    let homePens = 0;
    let awayPens = 0;
    let round = 0;

    while (round < 10) {
      round++;

      seed = (seed * 73 + 11) % 101;
      let homeScored = seed % 2 === 0;
      seed = (seed * 73 + 11) % 101;
      let awayScored = seed % 3 !== 0;

      if (homeScored) homePens++;
      if (awayScored) awayPens++;

      console.log(`${round}. tur: ${homeName} ${homeScored ? "gol" : "kaçtı"}, ` +
                  `${awayName} ${awayScored ? "gol" : "kaçtı"} (${homePens} - ${awayPens})`);

      if (round < 5) {
        let remaining = 5 - round;
        if (homePens > awayPens + remaining || awayPens > homePens + remaining) {
          console.log("Kalan atışlar sonucu değiştiremez!");
          break;
        }
      } else if (homePens !== awayPens) {
        break;
      }
    }

    if (homePens > awayPens) {
      penaltyWinner = homeName;
    } else if (awayPens > homePens) {
      penaltyWinner = awayName;
    } else {
      seed = (seed * 73 + 11) % 101;
      penaltyWinner = seed % 2 === 0 ? homeName : awayName;
      console.log("Penaltılarda da eşitlik, kura atıldı!");
    }
  }

  let winner = homeGoals > awayGoals ? homeName
             : awayGoals > homeGoals ? awayName
             : penaltyWinner;

  console.log(`Maç sonucu: ${homeName} ${homeGoals} - ${awayGoals} ${awayName}`);
  console.log(`Kazanan: ${winner ?? "yok, maç berabere"}`);
}
