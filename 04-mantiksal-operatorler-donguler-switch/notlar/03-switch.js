// =====================================================================
// 03 - switch (+ hepsi bir arada örnek)
// Notlar: mantiksal-operatorler-donguler-switch.md → 1.9
// Çalıştır: node 04-mantiksal-operatorler-donguler-switch/notlar/03-switch.js
// =====================================================================


// ---------------------------------------------------------------------
// 1.9 switch
//
//   switch (ifade) {
//     case değer1:
//       // ifade === değer1 ise
//       break;
//     case değer2:
//       // ifade === değer2 ise
//       break;
//     default:
//       // hiçbiri eşleşmezse (isteğe bağlı)
//   }
//
//   - Karşılaştırma === ile yapılır (tip de aynı olmalı).
//   - break unutulursa alttaki case'ler de çalışır (fall-through).
// ---------------------------------------------------------------------
{
  let light = "sarı";

  switch (light) {
    case "kırmızı":
      console.log("Dur!");
      break;
    case "sarı":
      console.log("Hazırlan...");
      break;
    case "yeşil":
      console.log("Geç!");
      break;
    default:
      console.log("Geçersiz renk!");
  }
}

{
  // Gruplama: alt alta case'ler aynı kodu çalıştırır
  let day = "Pazar";

  switch (day) {
    case "Cumartesi":
    case "Pazar":
      console.log("Hafta sonu, dinlen!");
      break;
    case "Pazartesi":
    case "Salı":
    case "Çarşamba":
    case "Perşembe":
    case "Cuma":
      console.log("Hafta içi, okul/iş zamanı!");
      break;
    default:
      console.log("Böyle bir gün yok.");
  }
}

{
  // Hesap makinesi
  let a = 12;
  let b = 4;
  let operator = "*";
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Bilinmeyen işlem";
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}


// ---------------------------------------------------------------------
// Hepsi bir arada: asansör (??, &&, !, ||, while, continue, switch, for, break)
// ---------------------------------------------------------------------
{
  let pressedFloor = null;                     // kimse tuşa basmadı (null)
  let target = pressedFloor ?? 5;              // ??: basılmadıysa varsayılan 5. kat
  let isEmergency = false;                     // acil durum düğmesi basılı mı?
  let floor = 0;                               // asansör giriş katında (0)
  while (floor < 10 && !isEmergency) {         // && ve !: tepeye varmadık VE acil durum yok
    floor++;                                   // önce bir kat çık (continue'dan ÖNCE!)
    if (floor === 2 || floor === 4) continue;  // ||: bakımdaki katları atla
    switch (floor) {                           // bu katta ne var?
      case 1: console.log("1. kat: Giriş"); break;
      case 3: console.log("3. kat: Spor salonu"); break;
      default: console.log(`${floor}. kat: Ofisler`);
    }
    if (floor === target) {                    // hedef kata geldik mi?
      for (let s = 3; s >= 1; s--) {           // for: kapı açılmadan geri say
        console.log(`Kapı açılıyor: ${s}`);
      }
      break;                                   // asansör döngüsünden çık
    }
  }
  console.log("Asansör durdu. Son kat:", floor);
}
