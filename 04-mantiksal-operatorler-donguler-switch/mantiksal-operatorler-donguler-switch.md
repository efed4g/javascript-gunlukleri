# Mantıksal Operatörler, Döngüler ve switch

> **Ders notu** · 20 Ekim 2026
> Konular: `&&` · `||` · `!` · `??` · `while` · `do...while` · `for` · `break` / `continue` · `switch`
> Çalıştırma: `node dosya.js` — durmayan (sonsuz döngüye giren) programı **Ctrl + C** ile kes.

---

## 0. Temel kural: truthy / falsy

- **Falsy** (false gibi davranan) değerler: `false`, `0`, `""` (boş metin), `null`, `undefined`, `NaN`
- **Truthy** (true gibi davranan): geri kalan her şey — `"0"`, `" "`, `"false"`, `-5`, `"Ali"` dahil.

Bugünkü operatörlerin hepsi karar verirken bu listeye bakar.

---

## 1. Alt konular: özet, benzetme, temel kod

### 1.1 `&&` — VE (logical AND)

- **Özet:** Koşulların **hepsi** doğruysa `true`. Soldan sağa bakar; ilk falsy değeri görünce durur ve **o değeri** döndürür; hepsi truthy ise **sonuncuyu** döndürür (kısa devre). `&&`, `||`'den önce işlenir.
- **Benzetme:** Kapıda iki görevli var: biri yaşına, biri biletine bakar. Birincisi "hayır" derse ikincisi bakmaz bile.

```js
let age = 20;
let hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log("Salona girebilirsin.");
}

let hour = 14;
let isWorkingHour = hour >= 9 && hour < 17;  // aralık kontrolü (9 <= hour < 17 diye YAZILMAZ)
console.log(1 && 0 && 3);                    // 0 → ilk falsy değer
```

### 1.2 `||` — VEYA (logical OR)

- **Özet:** Koşullardan **en az biri** doğruysa `true`. İlk truthy değeri döndürür; hiç yoksa sonuncuyu. Varsayılan değer vermek için kullanılır ama `0` ve `""` gibi değerleri de "boş" sayar.
- **Benzetme:** Evin ön ve arka kapısı: hangisi açıksa girersin. Ön kapı açıksa arka kapıyı denemezsin bile.

```js
let day = "Cumartesi";
if (day === "Cumartesi" || day === "Pazar") {   // iki tarafta da tam karşılaştırma!
  console.log("Hafta sonu!");
}

let nickname = "";
let displayName = nickname || "Misafir";        // "Misafir"
console.log(true || false && false);            // true → && önce işlenir
```

### 1.3 `!` — DEĞİL (logical NOT)

- **Özet:** Tek bir değer alır (tekli operatör). Önce boolean'a çevirir, sonra tersini alır. `!!x` = `Boolean(x)`. Önceliği çok yüksektir: `!a > b` aslında `(!a) > b` demektir → parantez kullan.
- **Benzetme:** Işık düğmesi: her basışta açık ↔ kapalı.

```js
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Lütfen önce giriş yap.");
}

let isLightOn = false;
isLightOn = !isLightOn;      // true (aç/kapa — toggle)
console.log(!!"Ali");        // true
console.log(!(15 >= 18));    // true → önce parantez, sonra !
```

### 1.4 `??` — Nullish birleştirme (nullish coalescing)

- **Özet:** `a ?? b` → `a` **null veya undefined** ise `b`, değilse `a`. `0`, `""`, `false` korunur. Önceliği düşüktür (gerekirse parantez: `(a ?? 0) + 5`). `||` ya da `&&` ile **parantezsiz** aynı ifadede kullanılamaz.
- **Benzetme:** Yedek oyuncu, sadece asıl oyuncu maça **hiç gelmediyse** oyuna girer. `||` ise 0 sayı atanı bile oyundan alan sabırsız koçtur.

```js
let volume = 0;
console.log(volume || 50);   // 50 → YANLIŞ (kullanıcı sesi bilerek kapatmıştı)
console.log(volume ?? 50);   // 0  → DOĞRU

let nickname = null;
let firstName = undefined;
let username = "deniz42";
console.log(nickname ?? firstName ?? username ?? "Anonim");  // deniz42

let limit = (null || 5) ?? 10;   // || ile karıştırırken parantez şart → 5
```

**Hangisini seçmeliyim?**
- Boş metin, `0`, `false` da "yok" sayılsın → `||`
- Sadece `null`/`undefined` "yok" sayılsın (`0` ve `""` geçerli bir değer) → `??`

### 1.5 `while` döngüsü

- **Özet:** Koşul truthy olduğu **sürece** gövdeyi tekrar tekrar çalıştırır. Koşul her turdan **önce** kontrol edilir; baştan false ise gövde hiç çalışmaz. Üç parçası var: başlangıç (`let i = 1`), koşul (`i <= 5`), güncelleme (`i++`). Güncellemeyi unutmak = sonsuz döngü.
- **Benzetme:** Bardağa su doldurmak: "bardak dolmadığı sürece akıt". Bardağın dibi delikse (koşul hiç false olmazsa) sonsuza kadar doldurursun.

```js
let i = 1;
while (i <= 5) {
  console.log("Sayı:", i);
  i++;                       // UNUTMA!
}

let views = 100;
let day = 1;
while (views < 10000) {      // kaç tur süreceğini önceden bilmiyoruz → while
  views = views * 2;
  day++;
}
console.log(day);            // 8
```

### 1.6 `do...while` döngüsü

- **Özet:** Önce gövdeyi çalıştırır, **sonra** koşula bakar → gövde **en az bir kez** çalışır. Sonda `} while (koşul);` vardır. Gövdenin içinde `let` ile tanımlanan değişken koşulda görünmez (blok kapsamı).
- **Benzetme:** Lunapark treni: önce bir tur attırır, sonra "bir tur daha?" diye sorar. (`while` ise girişte bilet kontrolü yapar: bileti yoksa hiç binemezsin.)

```js
let number = 4372;
let digits = 0;
do {
  digits++;
  number = (number - number % 10) / 10;   // son basamağı at: 4372 → 437
} while (number > 0);
console.log(digits);                      // 4  (number = 0 olsa da doğru cevap: 1)
```

### 1.7 `for` döngüsü

- **Özet:** `for (başlangıç; koşul; adım)` — while'ın üç parçasını tek satırda toplar. Çalışma sırası: başlangıç (1 kez) → koşul → gövde → adım → koşul → gövde → adım ... → koşul false → çık. Parçalar **noktalı virgülle** ayrılır. `let i` sadece döngünün içinde yaşar. Tekrar sayısı belliyse ilk tercih.
- **Benzetme:** Merdiven çıkmak: 1. basamaktan başla, 10. basamağa kadar çık, her adımda 1 basamak.

```js
for (let i = 1; i <= 5; i++) { console.log(i); }       // 1 2 3 4 5
for (let i = 0; i <= 10; i += 2) { console.log(i); }   // 0 2 4 6 8 10
for (let i = 5; i >= 1; i--) { console.log(i); }       // 5 4 3 2 1

let total = 0;                                         // biriktirici (accumulator)
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total);                                    // 5050

for (let row = 1; row <= 3; row++) {                   // iç içe döngü (nested loop)
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);                                   // *   **   ***
}
```

### 1.8 `break` ve `continue`

- **Özet:** `break` → döngüyü (ya da switch'i) **tamamen** bitirir. `continue` → **bu turun** kalanını atlar, sonraki tura geçer (for'da önce adım çalışır, while'da doğrudan koşula dönülür). İç içe döngülerin hepsinden birden çıkmak için etiket (label): `outer: for (...) { ... break outer; }`.
- **Benzetme:** Müzik çalar: `continue` = "sonraki şarkı", `break` = "müziği durdur".

```js
for (let i = 50; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("7'ye bölünen ilk sayı:", i);   // 56
    break;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;                // çift sayıları atla
  }
  console.log(i);            // 1 3 5 7 9
}
```

### 1.9 `switch`

- **Özet:** Bir değeri `case` değerleriyle **katı eşitlik (`===`)** ile karşılaştırır; eşleşen yerden çalışmaya başlar ve `break`'e (ya da switch'in sonuna) kadar devam eder. Hiçbiri eşleşmezse `default` çalışır. Alt alta yazılan `case`'ler gruplanır. Aralık kontrolü (`>= 90` gibi) için if-else kullan.
- **Benzetme:** TV kumandası: kanal numarası → kanal; olmayan kanal → karlı ekran (`default`); `break` unutmak → tuş takılı kalmış gibi sonraki kanallar da sırayla açılır.

```js
let light = "sarı";
switch (light) {
  case "kırmızı":
    console.log("Dur!");
    break;
  case "sarı":
    console.log("Hazırlan...");
    break;
  default:
    console.log("Geçersiz renk!");
}

let day = "Pazar";
switch (day) {
  case "Cumartesi":
  case "Pazar":              // gruplama: ikisi de aynı kodu çalıştırır
    console.log("Hafta sonu!");
    break;
  default:
    console.log("Hafta içi.");
}
```

---

## 2. Sık yapılan hatalar ve hata mesajları

> Terminalde hatanın altında `at wrapSafe (node:internal/...)` gibi satırlar da çıkar; onlar Node'un iç detayı. İlk satırlara bak: **dosya:satır numarası**, hatalı satır, `^^^` (hatanın yeri), **HataTürü: mesaj**. (Mesajlar Node 22 ile denendi; sürüme göre küçük farklar olabilir.)

### Terminalde hata mesajı verenler

1. **`and` yazmak** — `if (age >= 18 and hasTicket)`
   → `SyntaxError: Unexpected identifier 'and'` · "Beklenmeyen kelime: and" · Düzeltme: `&&`
2. **`or` yazmak** — `if (day === "Cumartesi" or day === "Pazar")`
   → `SyntaxError: Unexpected identifier 'or'` · Düzeltme: `||`
3. **`not` yazmak** — `if (not isLoggedIn)`
   → `SyntaxError: Unexpected identifier 'isLoggedIn'` · Ok `isLoggedIn`'i gösterir ama asıl sorun `not` · Düzeltme: `!isLoggedIn`
4. **`??`'yi `||` ile parantezsiz karıştırmak** — `let limit = userLimit || teamLimit ?? 10;`
   → `SyntaxError: Unexpected token '??'` · Düzeltme: `(userLimit || teamLimit) ?? 10`
5. **while koşulunda parantez yok** — `while i <= 5 {`
   → `SyntaxError: Unexpected identifier 'i'` · Düzeltme: `while (i <= 5) {`
6. **do içinde tanımlanan değişkeni koşulda kullanmak** — `do { let answer = ...; } while (answer === "evet");`
   → (1 tur çalışır, sonra) `ReferenceError: answer is not defined` · "answer tanımlı değil" · Düzeltme: `let answer;` satırını `do`'dan önce yaz, içeride sadece değer ata.
7. **do'nun sonundaki `while`'ı unutmak** — `do { ... }` ve dosya bitiyor
   → `SyntaxError: Unexpected end of input` · "Dosya beklenmedik yerde bitti" (altında kod varsa: `Unexpected identifier 'console'`) · Düzeltme: `} while (koşul);`
8. **for'da virgül kullanmak** — `for (let i = 1, i <= 5, i++)`
   → `SyntaxError: Identifier 'i' has already been declared` · Yanıltıcı mesaj; asıl sorun virgüller · Düzeltme: `for (let i = 1; i <= 5; i++)`
9. **for'un `i`'sini döngüden sonra kullanmak**
   → `ReferenceError: i is not defined` · `let i` sadece for'un içinde yaşar · Düzeltme: `let i;` satırını döngüden önce yaz.
10. **for'da `const` kullanmak** — `for (const i = 1; i <= 3; i++)`
    → (1 yazar, sonra) `TypeError: Assignment to constant variable.` · "Sabit değişkene atama yapılamaz" · Düzeltme: `let i`
11. **Döngü dışında `break`** — `if (age < 18) { ...; break; }`
    → `SyntaxError: Illegal break statement` · "Geçersiz break ifadesi" · Düzeltme: `break`'i sil; if/else zaten yeterli.
12. **İki case'te aynı `let`** — `case 1: let message = ...; case 2: let message = ...;`
    → `SyntaxError: Identifier 'message' has already been declared` · "message zaten tanımlandı" · Düzeltme: her case gövdesini `{ }` içine al ya da değişkeni switch'ten önce bir kez tanımla.

### Hata mesajı vermeyen (sessiz) hatalar

- `10 < temperature < 30` → 50 için bile true olur. Doğrusu: `temperature > 10 && temperature < 30`
- `day === "Cumartesi" || "Pazar"` → her gün true ("Pazar" truthy bir metin). Doğrusu: `day === "Cumartesi" || day === "Pazar"`
- `!score > 50` → `(!score) > 50` olarak çalışır. Doğrusu: `!(score > 50)` ya da `score <= 50`
- `volume || 50` (volume = 0) → 50 olur, kullanıcının 0'ı kaybolur. Doğrusu: `volume ?? 50`
- `typedName ?? "Misafir"` (typedName = "") → boş isim kalır. Boş metin de "yok" sayılacaksa `||` kullan.
- `i++`'yı unutmak ya da `while (i <= 5);` (sonda noktalı virgül) → sonsuz döngü, Ctrl + C.
- while'da `continue`'yu `i++`'dan önce yazmak → sonsuz döngü. Atlamadan önce `i++` yap.
- `for (let i = 1; i < 5; i++)` ama 5'in de yazılması lazım → 1–4 yazar (bir eksik). `<=` kullan.
- `case`'ten sonra `break` unutmak → alttaki case'ler de çalışır (fallthrough).
- `let choice = "2"` ve `case 2:` → eşleşmez, default'a düşer. `case "2":` ya da `switch (Number(choice))`.

---

## 3. Bugünün İngilizce terimleri

| İngilizce | Türkçe |
|---|---|
| logical operator | mantıksal operatör |
| operand | işlenen (operatörün yanındaki değer) |
| AND / OR / NOT | VE / VEYA / DEĞİL |
| truth table | doğruluk tablosu |
| truthy / falsy | true'ya dönen / false'a dönen değer |
| short-circuit evaluation | kısa devre değerlendirme |
| operator precedence | operatör önceliği |
| unary operator | tekli operatör |
| toggle | aç/kapa (tersine çevirme) |
| nullish | null ya da undefined olan |
| nullish coalescing | null birleştirme (ilk "tanımlı" değeri seçme) |
| default value | varsayılan değer |
| loop | döngü |
| iteration | tur, yineleme |
| loop body | döngü gövdesi |
| counter | sayaç |
| condition | koşul |
| infinite loop | sonsuz döngü |
| block scope | blok kapsamı |
| initialization | başlangıç (ilk değer verme) |
| afterthought / step | adım (her turun sonunda çalışan kısım) |
| accumulator | biriktirici değişken |
| nested loop | iç içe döngü |
| break / continue | kır, çık / devam et, turu atla |
| label | etiket |
| switch statement | switch ifadesi |
| case / default | durum / varsayılan |
| fallthrough | aşağı akma (break yoksa alttaki case'e geçme) |
| strict equality | katı eşitlik (`===`) |
| flag | bayrak (true/false tutan durum değişkeni) |

---

## 4. Tekrar kartları

<details><summary><b>1.</b> <code>console.log("Ali" && 0 && "Ayşe")</code> ne yazdırır?</summary>

`0` — `&&` ilk falsy değeri döndürür ve orada durur.
</details>

<details><summary><b>2.</b> <code>console.log(0 || "" || null)</code> ne yazdırır?</summary>

`null` — hiç truthy değer yok, `||` sonuncuyu döndürür.
</details>

<details><summary><b>3.</b> volume = 0 iken <code>volume || 50</code> ile <code>volume ?? 50</code> ne verir?</summary>

`||` → `50` (0'ı "boş" sayar), `??` → `0` (sadece null/undefined olunca yedeğe geçer).
</details>

<details><summary><b>4.</b> <code>!age >= 18</code> neden yanlış çalışır?</summary>

`!` önce çalışır: `(!age) >= 18`. Doğrusu: `!(age >= 18)`.
</details>

<details><summary><b>5.</b> while ile do...while arasındaki en önemli fark nedir?</summary>

while koşulu **önce**, do...while **sonra** kontrol eder → do...while'ın gövdesi en az bir kez çalışır.
</details>

<details><summary><b>6.</b> <code>for (let i = 0; i < 3; i++)</code> hangi sırayla çalışır, gövde kaç kez çalışır?</summary>

başlangıç (1 kez) → koşul → gövde → adım → koşul → ... → koşul false → çık. Gövde 3 kez çalışır (i = 0, 1, 2).
</details>

<details><summary><b>7.</b> while döngüsünde <code>continue</code> neden sonsuz döngüye yol açabilir?</summary>

`continue` turun kalanını atlar; `i++` altta kalırsa hiç çalışmaz, `i` hep aynı kalır, koşul hep true olur.
</details>

<details><summary><b>8.</b> switch'te <code>break</code> unutulursa ne olur? Karşılaştırma hangi eşitlikle yapılır?</summary>

Eşleşen case'ten sonraki case'ler de çalışır (fallthrough). Karşılaştırma `===` ile yapılır: `"2"` ile `2` eşleşmez.
</details>

---

## 5. Görevler

### Görev 1 — Pomodoro Planlayıcı
**Seviye:** Normal (kolay-orta) · **Tür:** Sıfırdan yazma · **Alt konu:** `for` (+ biriktirici, `%`)

```js
let sessions = 4;   // bugün kaç pomodoro (25 dk'lık çalışma oturumu) yapacaksın?
```

- `sessions` 0 veya negatifse sadece `Geçerli bir oturum sayısı gir!` yazsın.
- Her oturum: `1. oturum: 25 dk çalışma`
- Her oturumdan sonra `Mola: 5 dk`; oturum numarası 4'ün katıysa `Uzun mola: 15 dk`.
- Son oturumdan sonra mola yok.
- En sonda: `Toplam süre: ... dk` (çalışma + molalar).

Beklenen: `4` → son satır `Toplam süre: 115 dk` · `6` → `Toplam süre: 185 dk` (4. oturumdan sonra uzun mola) · `0` → `Geçerli bir oturum sayısı gir!`

```js
// Çözümüm:

```

### Görev 2 — Koşu Antrenmanı
**Seviye:** Normal (orta) · **Tür:** Çalışan kodu değiştirme · **Alt konu:** `while`, `break`, `??` (+ `%`)

Başlangıç kodu (çalışıyor, 5 tur yazar):

```js
let targetMeters = 2000;      // hedef mesafe (metre)
let lap = 0;                  // kaç tur koşuldu
let distance = 0;             // toplam koşulan mesafe

while (distance < targetMeters) {
  lap++;                      // yeni tur başladı
  distance += 400;            // pist turu 400 metre
  console.log(`${lap}. tur bitti, toplam: ${distance} m`);
}

console.log(`Antrenman bitti! ${lap} tur koştun.`);
```

İstenen değişiklikler:
1. En üste `let targetInput = 3000;` ekle; hedef buradan gelsin. `targetInput` `null` ise hedef 2000 olsun. `0` da geçerli bir hedef (dinlenme günü).
2. `energy` ekle: 100'den başlasın, her tur 12 azalsın. Tur satırı: `1. tur bitti, toplam: 400 m, enerji: 88`
3. Her 3. turun sonunda `Su molası!` yazsın.
4. Su molası kontrolünden sonra: enerji 30'un altındaysa `Çok yoruldun, antrenmanı bırakıyorsun!` yazsın ve döngü hemen bitsin.
5. Son mesaj aynen kalsın.

Beklenen: `3000` → 6. turda (enerji 28) su molası + yorulma mesajı, `Antrenman bitti! 6 tur koştun.` · `null` → 5 tur, `Antrenman bitti! 5 tur koştun.` · `0` → sadece `Antrenman bitti! 0 tur koştun.`

```js
// Çözümüm:

```

### Görev 3 — Hava Durumu Asistanı
**Seviye:** Normal (orta) · **Tür:** Hatalı kodu bulup düzeltme · **Alt konu:** `&&`, `||`, `!`, `??`, `switch`

Doğru davranış: rüzgâr ölçümü yoksa (`null`) 15 km/s kabul edilir, `0` geçerli bir ölçümdür · yağış = "yağmurlu" ya da "sağanak" · bisiklet için uygun gün: sıcaklık 10 ile 30 arası (ikisi dahil) VE yağış yok VE rüzgâr 40'tan az · her hava durumu için sadece kendi tavsiyesi yazılır.
**4 hata var:** 1'i programı hiç çalıştırmıyor, 3'ü sessiz.

```js
let temperature = 22;          // derece
let condition = "güneşli";     // "güneşli", "yağmurlu", "sağanak" veya "karlı"
let windInput = 0;             // rüzgâr hızı (km/s); ölçüm yoksa null

let wind = windInput || 15;    // ölçüm yoksa 15 kabul et
console.log(`Rüzgâr: ${wind} km/s`);

let isRainy = condition === "yağmurlu" or condition === "sağanak";
let goodForBike = temperature >= 10 || temperature <= 30 && !isRainy && wind < 40;

if (goodForBike) {
  console.log("Bisiklet için harika bir gün!");
} else {
  console.log("Bugün bisiklet yok.");
}

switch (condition) {
  case "güneşli":
    console.log("Güneş kremi sür.");
  case "yağmurlu":
  case "sağanak":
    console.log("Şemsiye al.");
    break;
  case "karlı":
    console.log("Bot giy.");
    break;
  default:
    console.log("Bilinmeyen hava durumu!");
}
```

Beklenen:
- `22, "güneşli", 0` → `Rüzgâr: 0 km/s` / `Bisiklet için harika bir gün!` / `Güneş kremi sür.`
- `18, "yağmurlu", null` → `Rüzgâr: 15 km/s` / `Bugün bisiklet yok.` / `Şemsiye al.`
- `0, "karlı", 0` → `Rüzgâr: 0 km/s` / `Bugün bisiklet yok.` / `Bot giy.`

```js
// Düzeltilmiş kodum:

```

### Zor Görev — Zindan Koşusu
**Seviye:** Zor · **Tür:** Sıfırdan yazma · **Alt konu:** hepsi (`switch`, `??`, `for`, `&&`, `!`, `continue`, `break`)

```js
let heroClass = "okçu";      // "savaşçı", "büyücü" ya da "okçu"
let roomCount = 15;          // zindanda kaç oda var
let hasShield = true;        // kalkanın var mı?
let bonusHealth = 20;        // ekstra can (yoksa null)
```

1. Başlangıç canı (switch ile): savaşçı 100, büyücü 60, okçu 80. Başka bir değer → sadece `Böyle bir karakter yok!`, oyun başlamaz.
2. `bonusHealth` cana eklenir; null/undefined ise 0 sayılır.
3. Başlangıç mesajı: `okçu zindana girdi. Başlangıç canı: 100`
4. Odalar 1'den `roomCount`'a kadar:
   - Hem 3'e hem 5'e bölünen → `15. oda: Gizli hazine odası!` (tuzak da iksir de yok)
   - Sadece 3'e bölünen → kalkan yoksa `-25` can: `3. oda: Tuzak! -25 can (kalan: 35)`; kalkan varsa `3. oda: Tuzak var ama kalkan seni korudu!`
   - Sadece 5'e bölünen → `+10` can: `5. oda: İksir buldun! +10 can (kalan: 110)`
   - Diğerleri boş: hiçbir şey yazma.
5. Bir olaydan sonra can 0 veya altına düşerse `9. odada yenildin!` yaz ve oyunu bitir.
6. Odalar bitince hâlâ ayaktaysan: `Zindandan sağ çıktın! Kalan can: 120` (yenildiysen yazılmaz).

Beklenen:
- `"okçu", 15, true, 20` → başlangıç 100 · 3, 6, 9, 12: kalkan korur · 5: 110 · 10: 120 · 15: hazine · `Zindandan sağ çıktın! Kalan can: 120`
- `"büyücü", 15, false, null` → başlangıç 60 · 3: 35 · 5: 45 · 6: 20 · 9: -5 · `9. odada yenildin!`
- `""` (boş metin) → `Böyle bir karakter yok!`

```js
// Çözümüm:

```

---

## 6. Kendi notlarım

-
