// =====================================================================
// 02 - Tip dönüşümleri: açık dönüşüm, truthy/falsy, otomatik dönüşüm
// Notlar: veri-tipleri.md → 1.6, 1.7, 1.8
// Çalıştır: node 02-veri-tipleri/notlar/02-tip-donusumleri.js
// =====================================================================

/*
  KALIP (yazımına dikkat!)
    Number(değer)       // N büyük harf!
    String(değer)       // S büyük harf!
    parseInt(metin)     // p küçük, I büyük!
    parseFloat(metin)   // p küçük, F büyük!
*/


// ---------------------------------------------------------------------
// 1) Number() ve String()
// ---------------------------------------------------------------------
{
  const ageInput = "21";                  // formdan gelen yaş (metin!)
  console.log(typeof ageInput);           // string
  const age = Number(ageInput);           // metni sayıya çevir
  console.log(typeof age);                // number
  console.log(age + 1);                   // artık matematik çalışır → 22
  const ageText = String(age);            // sayıyı tekrar metne çevir
  console.log(typeof ageText);            // string
}

{
  console.log(Number("  42  "));   // 42   → boşluklar silinir
  console.log(Number(""));         // 0    → boş metin 0 olur (dikkat!)
  console.log(Number("42px"));     // NaN  → bir harf bile varsa
  console.log(Number("12,5"));     // NaN  → virgül geçmez, nokta kullan
  console.log(Number(true));       // 1
  console.log(Number(null));       // 0
  console.log(Number(undefined));  // NaN
}


// ---------------------------------------------------------------------
// 2) parseInt() ve parseFloat(): baştaki sayıyı okur
// ---------------------------------------------------------------------
{
  const heightInput = "180 cm";
  const weightInput = "72.5 kg";
  console.log(Number(heightInput));       // NaN  → titiz memur
  console.log(parseInt(heightInput));     // 180  → baştaki tam sayıyı okur
  console.log(parseFloat(weightInput));   // 72.5 → baştaki ondalıklı sayıyı okur
  console.log(parseInt("3.9"));           // 3    → ondalığı atar (yuvarlamaz, keser!)
  console.log(parseInt("cm 180"));        // NaN  → sayı başta değilse okuyamaz
  // TODO: "25 dk" metninden 25 sayısını çıkarıp yazdır
  console.log(parseInt("25 dk"));         // 25
}


// ---------------------------------------------------------------------
// 3) Boolean(): truthy / falsy
//   Falsy (false olanlar): 0, "", null, undefined, NaN, false
//   Geri kalan HER ŞEY truthy.
// ---------------------------------------------------------------------
{
  console.log(Boolean(0));          // false → sıfır
  console.log(Boolean(""));         // false → boş metin
  console.log(Boolean(null));       // false → bilerek boş
  console.log(Boolean(undefined));  // false → değer yok
  console.log(Boolean(NaN));        // false → bozuk sayı
  console.log(Boolean(42));         // true  → sıfır olmayan sayı
  console.log(Boolean("Merhaba"));  // true  → dolu metin

  // Tuzaklar: hepsi true!
  console.log(Boolean("0"));       // içinde bir karakter var → dolu metin
  console.log(Boolean("false"));   // 5 harfli bir metin, boolean değil!
  console.log(Boolean(" "));       // boşluk da bir karakterdir
  console.log(Boolean(-1));        // sıfır değil
}

{
  const usernameInput = "";                       // kullanıcı kutuyu boş bıraktı
  const bioInput = "Kodlamayı seviyorum";
  const isUsernameFilled = Boolean(usernameInput);
  const isBioFilled = Boolean(bioInput);
  console.log(`Kullanıcı adı dolu mu: ${isUsernameFilled}`);
  console.log(`Biyografi dolu mu: ${isBioFilled}`);
  // TODO: const cityInput = " "; (sadece bir boşluk) için "Şehir dolu mu: ..." yazdır
  const cityInput = " ";
  console.log(`Şehir dolu mu: ${Boolean(cityInput)}`);   // Şehir dolu mu: true
}


// ---------------------------------------------------------------------
// 4) Otomatik dönüşüm
//   + metin görünce BİRLEŞTİRİR, - * / ise sayıya ÇEVİRİR.
// ---------------------------------------------------------------------
{
  console.log("5" + 2);     // "52" → + metin görünce birleştirir
  console.log("5" - 2);     // 3    → - sayıya çevirir
  console.log("5" * "2");   // 10   → * ikisini de sayıya çevirir
  console.log("10" / "2");  // 5    → / da öyle

  console.log(3 + 4 + "5");    // "75"  → önce 3+4=7, sonra 7+"5"
  console.log("3" + 4 + 5);    // "345" → önce "3"+4="34", sonra "34"+5
  console.log(true + 1);       // 2     → true → 1
  console.log(null + 1);       // 1     → null → 0
  console.log(undefined + 1);  // NaN   → undefined → NaN
  console.log("elma" * 2);     // NaN   → "elma" sayıya çevrilemez

  console.log("2" * "3");      // 6
  console.log(1 + "1" - 1);    // 10    → 1+"1"="11", sonra "11"-1=10
}


// ---------------------------------------------------------------------
// 5) == (gevşek) ve === (katı) eşitlik
// ---------------------------------------------------------------------
{
  console.log(5 == "5");             // true  → gevşek: "5"i 5'e çevirir
  console.log(5 === "5");            // false → katı: tipler farklı
  console.log(0 == "");              // true  → "" → 0 olur (tuzak!)
  console.log(null == undefined);    // true  → özel kural
  console.log(null === undefined);   // false → tipleri farklı
  // TODO: 0 ile "0"ı KATI eşitlikle karşılaştırıp yazdır
  console.log(0 === "0");            // false
}


// ---------------------------------------------------------------------
// 6) Hatalı kod → düzeltilmiş kod
// ---------------------------------------------------------------------
{
  const a = "20";
  const b = 5;
  const sum = a + b;               // "205" (birleştirdi)
  const diff = a - b;              // 15
  const fixedSum = Number(a) + b;  // 25
  console.log(sum, typeof sum, diff, typeof diff, fixedSum);
}

{
  const mathScore = "70";
  console.log(mathScore + 20);           // HATALI: "7020"
  console.log(Number(mathScore) + 20);   // DÜZELTİLMİŞ: 90
}

{
  // İki taraf da metin olduğu için hiçbir dönüşüm olmaz; metinler sözlük sırasıyla,
  // harf harf karşılaştırılır. "1" karakteri "9"dan önce gelir, bu yüzden sonuç false olur.
  console.log("10" > "9");                  // HATALI: false
  console.log(Number("10") > Number("9"));  // DÜZELTİLMİŞ: true
}

{
  const answer = "";                   // kullanıcı cevap vermedi
  console.log(answer == 0);            // HATALI: true! Boş cevap "0" cevabı sanılır
  console.log(answer === 0);           // DÜZELTİLMİŞ: false
}
