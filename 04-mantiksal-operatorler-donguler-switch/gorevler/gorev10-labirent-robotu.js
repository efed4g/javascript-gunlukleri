/*
  Görev 10: Labirent robotu

  5x5 ızgara: x 0-4 soldan sağa, y 0-4 aşağıdan yukarı. Robot (0, 0)'dan başlar.
  commands sayısının her rakamı soldan sağa bir komuttur:
  1 yukarı, 2 sağ, 3 aşağı, 4 sol, 0 bekle, 5-9 bilinmeyen komut (pil harcamaz).
  Duvar x = 2 ve y 0-2 arasında, çukur (4, 1)'de.
  Normal hareket 1 pil harcar. Izgara dışına çıkan hareket iptal edilir (1 pil),
  duvara çarpan robot yerinde kalır (2 pil).
  Robot çukura düşerse, hedefe ulaşırsa ya da pil biterse durur. Pil verilmezse 12.
*/

let commands = 11122223;
let targetX = 4;
let targetY = 2;
let batteryInput = null;

let battery = batteryInput ?? 12;
let x = 0;
let y = 0;
let step = 0;
let status = "devam";

console.log(`Robot (0, 0) noktasında, hedef (${targetX}, ${targetY}), pil: ${battery}`);

let divisor = 1;
while (divisor * 10 <= commands) {
  divisor *= 10;
}

do {
  let command = ((commands - commands % divisor) / divisor) % 10;
  divisor = divisor / 10;
  step++;

  let newX = x;
  let newY = y;
  let direction;
  switch (command) {
    case 1: newY = y + 1; direction = "yukarı"; break;
    case 2: newX = x + 1; direction = "sağ"; break;
    case 3: newY = y - 1; direction = "aşağı"; break;
    case 4: newX = x - 1; direction = "sol"; break;
    case 0:
      console.log(`Adım ${step}: bekle → (${x}, ${y}), pil: ${battery}`);
      continue;
    default:
      console.log(`Adım ${step}: Bilinmeyen komut: ${command}`);
      continue;
  }

  let isOutside = newX < 0 || newX > 4 || newY < 0 || newY > 4;
  let isWall = newX === 2 && newY >= 0 && newY <= 2;
  let isPit = newX === 4 && newY === 1;

  if (isOutside) {
    battery -= 1;
    console.log(`Adım ${step}: ${direction} → Sınır! Hareket iptal. (${x}, ${y}), pil: ${battery}`);
  } else if (isWall) {
    battery -= 2;
    console.log(`Adım ${step}: ${direction} → Duvar! Robot yerinde kaldı. (${x}, ${y}), pil: ${battery}`);
  } else {
    x = newX;
    y = newY;
    battery -= 1;
    console.log(`Adım ${step}: ${direction} → (${x}, ${y}), pil: ${battery}`);

    if (isPit) {
      status = "çukur";
    } else if (x === targetX && y === targetY) {
      status = "hedef";
    }
  }

  if (battery <= 0 && status === "devam") {
    status = "pil";
  }

} while (divisor >= 1 && status === "devam");

if (status === "devam") {
  status = "komut bitti";
}

switch (status) {
  case "hedef":
    console.log(`Hedefe ulaşıldı! ${step} adımda, ${battery} pil kaldı.`);
    break;
  case "çukur":
    console.log("Çukura düştü! Görev başarısız.");
    break;
  case "pil":
    console.log(`Pil bitti! Robot (${x}, ${y}) noktasında kaldı.`);
    break;
  case "komut bitti":
    console.log(`Komutlar bitti ama hedefe ulaşılamadı. Robot (${x}, ${y}) noktasında.`);
    break;
}
