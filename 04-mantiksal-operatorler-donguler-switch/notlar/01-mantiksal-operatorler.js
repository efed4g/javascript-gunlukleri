// =====================================================================
// 01 - Mantıksal operatörler: &&, ||, !, ??
// Notlar: mantiksal-operatorler-donguler-switch.md → 0, 1.1 – 1.4
// Çalıştır: node 04-mantiksal-operatorler-donguler-switch/notlar/01-mantiksal-operatorler.js
// =====================================================================


// ---------------------------------------------------------------------
// 1.1 && — VE (logical AND)
//   İkisi de doğruysa true. İlk falsy değeri döndürür; hepsi truthy ise sonuncuyu.
// ---------------------------------------------------------------------
{
  // İç içe if yerine && kullanılabilir:
  //   if (age >= 18) {
  //     if (hasTicket) {
  //       console.log("Salona girebilirsin.");
  //     }
  //   }

  console.log(1 && 2 && 3);       // 3    → hepsi truthy, sonuncu
  console.log(1 && 0 && 3);       // 0    → ilk falsy
  console.log("Ali" && null);     // null

  console.log(true && true);      // true
  console.log(true && false);     // false
  console.log(false && true);     // false
  console.log(false && false);    // false
}

{
  let age = 20;
  let hasTicket = true;

  if (age >= 18 && hasTicket) {
    console.log("Salona girebilirsin.");
  } else {
    console.log("Giriş yok.");
  }
}

{
  let hour = 14;
  let isHoliday = false;

  let isWorkingHour = hour >= 9 && hour < 17;
  console.log("Çalışma saati mi?", isWorkingHour);

  let isOpen = isWorkingHour && isHoliday === false;
  console.log("Kütüphane açık mı?", isOpen);
}


// ---------------------------------------------------------------------
// 1.2 || — VEYA (logical OR)
//   Biri doğruysa true. İlk truthy değeri döndürür; hepsi falsy ise sonuncuyu.
//   Öncelik: && önce çalışır, sonra ||
// ---------------------------------------------------------------------
{
  console.log(null || 0 || "Ali");          // "Ali"  → ilk truthy
  console.log("Ayşe" || "Ali");             // "Ayşe"

  console.log(true || false && false);      // true   → önce false && false = false, sonra true || false
  console.log((true || false) && false);    // false  → parantez önce

  console.log(true || true);      // true
  console.log(true || false);     // true
  console.log(false || true);     // true
  console.log(false || false);    // false
}

{
  let day = "Cumartesi";
  let isHoliday = false;

  if (day === "Cumartesi" || day === "Pazar" || isHoliday) {
    console.log("Alarm kapalı, uyumaya devam!");
  } else {
    console.log("Alarm 07:00'de çalacak.");
  }
}

{
  // || ile varsayılan değer
  let nickname = "";
  let displayName = nickname || "Misafir";
  console.log("Hoş geldin,", displayName);    // "" falsy → Misafir

  let city = "Trabzon";
  let shownCity = city || "Bilinmiyor";
  console.log("Şehir:", shownCity);

  let favoriteColor = null;
  let shownColor = favoriteColor || "mavi";
  console.log("Renk:", shownColor);
}


// ---------------------------------------------------------------------
// 1.3 ! — DEĞİL (logical NOT)
//   Değeri boolean'a çevirip tersini alır. !! → değerin boolean karşılığı.
// ---------------------------------------------------------------------
{
  let isLoggedIn = false;
  if (!isLoggedIn) {
    console.log("Lütfen önce giriş yap.");
  }

  console.log(!true);     // false
  console.log(!false);    // true
  console.log(!0);        // true
  console.log(!"Ali");    // false
  console.log(!!"Ali");   // true
}

{
  // Aç/kapa düğmesi: değer = !değer
  let isLightOn = false;
  console.log("Başlangıç:", isLightOn);

  isLightOn = !isLightOn;
  console.log("1. basış:", isLightOn);

  isLightOn = !isLightOn;
  console.log("2. basış:", isLightOn);
}

{
  let isRaining = true;
  let hasUmbrella = false;

  let willGetWet = isRaining && !hasUmbrella;
  console.log("Islanır mısın?", willGetWet);

  let age = 15;
  console.log("18'den küçük mü?", !(age >= 18));   // true
  console.log("Parantezsiz:", !age >= 18);          // false → önce !15 = false, sonra false >= 18 (TUZAK!)

  let canGoOut = !isRaining || hasUmbrella;
  console.log("Dışarı çıkabilir misin?", canGoOut);
}


// ---------------------------------------------------------------------
// 1.4 ?? — Nullish birleştirme (nullish coalescing)
//   SADECE null ve undefined için yedeğe geçer. 0, "", false geçerli değer sayılır.
//
//   değer ?? varsayılan
//   a ?? b ?? c ?? "son çare"
//   (a ?? 0) + 5
// ---------------------------------------------------------------------
{
  console.log(null ?? "yedek");        // "yedek"
  console.log(undefined ?? "yedek");   // "yedek"
  console.log(0 ?? "yedek");           // 0
  console.log(false ?? "yedek");       // false
  console.log("" ?? "yedek");          // ""
}

{
  // || ile ?? farkı: 0 geçerli bir değer
  let volume = 0;
  let withOr = volume || 50;           // 0 falsy → 50 (YANLIŞ)
  let withNullish = volume ?? 50;      // 0 null değil → 0 (DOĞRU)
  console.log("|| ile ses:", withOr);
  console.log("?? ile ses:", withNullish);

  let savedVolume;
  console.log("Kayıt yoksa:", savedVolume ?? 50);
}

{
  let nickname = null;
  let firstName = undefined;
  let userName = "deniz42";

  let showName = nickname ?? firstName ?? userName ?? "Anonim";
  console.log("Ekranda görünen ad:", showName);   // deniz42

  let lives = 0;
  let currentLives = lives ?? 3;
  console.log("Kalan can:", currentLives);        // 0
}
