# Fonksiyonlar (Functions)

**Konu:** tanımlama ve çağırma · parametreler · `return` · varsayılan değerler · yerel ve dış değişkenler
**Tarih:** 25 Ekim 2026
**Kodları çalıştırma:** `node dosya.js`

---

## Akılda tutma tablosu: Çaycı Rıza Abi

| Kavram | Çay ocağındaki karşılığı |
|---|---|
| Fonksiyon tanımlamak | Rıza Abi'ye çay demlemeyi bir kez öğretmek (henüz ortada çay yok) |
| Fonksiyonu çağırmak | "Rıza Abi, bir çay!" diye seslenmek |
| Parametre | Sipariş fişindeki boşluklar: "adet: ___, dem: ___" |
| Argüman | Boşluklara senin söylediğin değerler: "2", "açık" |
| `return` | Çayı masana getirmesi: artık elinde, istediğin gibi kullanırsın |
| `console.log` | Mutfaktan "Çay hazır!" diye bağırması: ses var, çay yok |
| Varsayılan değer | Söylemezsen her zamanki gibi getirmesi: 1 bardak, normal demli |
| Yerel değişken | Mutfaktaki demlik: sadece mutfakta kullanılır, dışarıdan görünmez |
| Dış değişken | Ofisteki duvar saati: herkes görür, Rıza Abi de bakabilir |
| Gölgeleme | Mutfakta kendi saati varsa, içerideyken hep ona bakması |

---

## 1. Alt konuların özeti

### 1.1 Tanımlama ve çağırma (declaration & call)

- `function ad() { ... }` ile **tanımlanır**. Tanımlamak çalıştırmak değildir; kod sadece kaydedilir.
- `ad()` ile **çağrılır**. Parantez şart; istediğin kadar çağırabilirsin.
- Bir fonksiyon başka bir fonksiyonu çağırabilir; iş bitince tam olarak çağrıldığı yere dönülür.
- İsim fiille başlar: `show…` (gösterir), `get…` (getirir), `calc…` (hesaplar), `check…` (kontrol eder), `create…` (oluşturur).

**Benzetme:** Rıza Abi'ye tarifi bir kez öğretirsin (tanımlama); her "Bir çay!" deyişinde aynı adımları baştan uygular (çağırma).

```js
function showTitle() {
  console.log("*** OYUN MENÜSÜ ***");
}

function showMenu() {
  showTitle();                     // fonksiyon içinden fonksiyon çağrısı
  console.log("1. Yeni oyun");
  console.log("2. Devam et");
}

showMenu();
// *** OYUN MENÜSÜ ***
// 1. Yeni oyun
// 2. Devam et
```

### 1.2 Parametreler ve argümanlar (parameters & arguments)

- **Parametre:** tanımdaki boş kutu. **Argüman:** çağırırken kutuya konan değer.
- Sırayla eşleşirler: 1. argüman → 1. parametre. Eksik argüman → `undefined`, fazlası yok sayılır.
- Parametrelerin başına `let` yazılmaz; virgülle ayrılır.
- Fonksiyon değerin **kopyasıyla** çalışır: içeride parametreyi değiştirmek dışarıdaki değişkeni değiştirmez.

**Benzetme:** "2 çay, biri açık": fişteki "adet" ve "dem" boşlukları parametre, "2" ve "açık" argüman. Sıra önemli!

```js
function shareSlices(slices, people) {
  let leftover = slices % people;                 // artan dilim
  let perPerson = (slices - leftover) / people;   // kalanı çıkar, sonra böl
  console.log("Kişi başı " + perPerson + " dilim, artan " + leftover + " dilim");
}

shareSlices(8, 3);   // Kişi başı 2 dilim, artan 2 dilim
shareSlices(3, 8);   // Kişi başı 0 dilim, artan 3 dilim  (sıra değişti, sonuç değişti)
```

### 1.3 return: değer geri döndürmek

- `return` değeri çağrıldığı yere gönderir ve fonksiyonu **o anda bitirir**; altındaki satırlar çalışmaz.
- `console.log` sadece ekrana yazar; `return` değeri kullanılabilir yapar (değişkene ata, işleme sok, `if` içinde kullan).
- `return` yoksa ya da boş `return;` yazılmışsa sonuç `undefined` olur.
- Bir fonksiyonda birden çok `return` olabilir; ilk ulaşılan çalışır (erken çıkış).
- Döndürülecek değeri `return` ile **aynı satıra** yaz.

**Benzetme:** `console.log` = Rıza Abi'nin "Çay hazır!" diye bağırması; `return` = çayı masana getirmesi.

```js
function add(a, b) {
  return a + b;                  // değeri geri gönder, fonksiyon biter
}

let total = add(3, 4);           // dönen 7 → total
console.log(total);              // 7
console.log(add(10, 5) * 2);     // 30

function half(n) {
  console.log(n / 2);            // sadece yazar, hiçbir şey döndürmez!
}

let x = half(10);                // ekrana 5 yazar
console.log(x);                  // undefined
```

### 1.4 Varsayılan değerler (default parameters)

- `param = değer` ile yazılır; argüman hiç verilmezse ya da `undefined` verilirse kullanılır.
- `0`, `""`, `null`, `false` verilirse varsayılan devreye **girmez**.
- Varsayılanlı parametreler sona yazılır; ortadakini atlamak için yerine `undefined` verilir.
- Eski usul: fonksiyonun içinde `level = level ?? 50;` (`||` kullanırsan 0 da "yok" sayılır).

**Benzetme:** "Abi bir çay" dersin, detay söylemezsin: her zamanki gibi getirir. "Şeker 0 olsun" dersen 0 şeker getirir; sıfır da bir cevaptır.

```js
function planWorkout(day, minutes = 30, type = "yürüyüş") {
  return day + ": " + minutes + " dakika " + type;
}

console.log(planWorkout("Pazartesi", 45, "koşu"));          // Pazartesi: 45 dakika koşu
console.log(planWorkout("Salı"));                           // Salı: 30 dakika yürüyüş
console.log(planWorkout("Çarşamba", undefined, "yüzme"));   // Çarşamba: 30 dakika yüzme

function setVolume(level = 50) {
  return "Ses seviyesi: " + level;
}

console.log(setVolume(0));      // Ses seviyesi: 0     (0 geçerli bir değer)
console.log(setVolume(null));   // Ses seviyesi: null  (varsayılan çalışmaz)
```

### 1.5 Yerel ve dış değişkenler (local & outer variables)

- İçeride `let`/`const` ile tanımlananlar ve parametreler **yereldir**: dışarıdan görülmez, her çağrıda sıfırdan doğar, fonksiyon bitince silinir.
- Fonksiyon dış değişkeni okuyabilir; içeride `let` yazmadan atama yaparsa dıştakini değiştirir.
- İçeride aynı adla `let` yazılırsa yerel değişken dıştakini **gölgeler**; dıştaki değişmez.
- Kural: içeriden dışarısı görülür, dışarıdan içerisi görülmez.
- En temiz yol: bilgi parametreyle girsin, sonuç `return` ile çıksın.

**Benzetme:** Mutfaktaki demlik (yerel) dışarıdan görünmez; ofisteki duvar saatine (dış) mutfaktan bakılabilir.

```js
let totalVisits = 0;                  // dış değişken

function visitPage() {
  let pageViews = 0;                  // yerel: her çağrıda 0'dan doğar
  pageViews = pageViews + 1;
  totalVisits = totalVisits + 1;      // let yok → dıştaki değişir
  console.log("Yerel: " + pageViews + ", Toplam: " + totalVisits);
}

visitPage();   // Yerel: 1, Toplam: 1
visitPage();   // Yerel: 1, Toplam: 2
// console.log(pageViews);  → ReferenceError: pageViews is not defined
```

### Hepsi bir arada: Taksimetre

```js
const OPENING_FEE = 40;                                        // dış sabit: açılış ücreti (TL)

function calculateFare(km, pricePerKm = 30, isNight = false) {
  let fare = OPENING_FEE + km * pricePerKm;                    // yerel: açılış + yol ücreti
  if (isNight) {
    fare = fare + fare / 2;                                    // gece tarifesi: %50 fazla
  }
  return fare;                                                 // sonucu geri gönder
}

function showFare(passenger, km, isNight = false) {
  let fare = calculateFare(km, undefined, isNight);            // km ücreti varsayılan kalsın
  let period = isNight ? "gece" : "gündüz";                    // koşul operatörü (?)
  console.log(passenger + " (" + km + " km, " + period + "): " + fare + " TL");
}

showFare("Elif", 10);          // Elif (10 km, gündüz): 340 TL
showFare("Burak", 10, true);   // Burak (10 km, gece): 510 TL
showFare("Selin", 0);          // Selin (0 km, gündüz): 40 TL
```

---

## 2. Sık yapılan hatalar ve hata mesajları

**Hata mesajını okuma sırası:** dosya adı ve satır numarası → hatalı satır → altındaki `^` işareti (hatanın yeri) → en altta hatanın türü ve mesajı. Altındaki `at ...` satırlarını şimdilik görmezden gel.

| # | Hatalı kod | Terminalde | Türkçesi | Düzeltme |
|---|---|---|---|---|
| 1 | `sayHi;` (parantez yok) | Hata yok, hiçbir şey olmaz. `console.log(sayHi)` → `[Function: sayHi]` | Fonksiyon çağrılmadı | `sayHi();` |
| 2 | `showscore();` (adı `showScore`) | `ReferenceError: showscore is not defined` | showscore tanımlı değil | Adı harfi harfine aynı yaz |
| 3 | `sayHi() { ... }` | `SyntaxError: Unexpected token '{'` | Beklenmeyen `{` işareti | Başına `function` yaz |
| 4 | `greet();` (argüman yok) | Hata yok, çıktı: `Merhaba undefined!` | Değer gönderilmedi | Argüman ver ya da varsayılan değer koy |
| 5 | `console.log("Merhaba name!");` | Hata yok, çıktı: `Merhaba name!` | Tırnak içi düz metindir | `"Merhaba " + name + "!"` |
| 6 | `shareSlices(8 3);` | `SyntaxError: missing ) after argument list` | Argüman listesinden sonra `)` eksik | Virgül koy: `shareSlices(8, 3);` |
| 7 | Fonksiyonda `return` yok | Hata yok, çıktı: `undefined`, işlemde `NaN` | Fonksiyon hiçbir şey döndürmedi | `return` ekle |
| 8 | `let sum = return a + b;` | `SyntaxError: Unexpected token 'return'` | Beklenmeyen `return` kelimesi | `return a + b;` |
| 9 | `return` yazıp değeri alt satıra koymak | Hata yok, çıktı: `undefined` | JS `return`'ün sonuna kendisi `;` koydu | Değeri aynı satıra yaz |
| 10 | `function greet(greeting = "Merhaba", name)` | Hata yok, `greet("Ayşe")` → `Ayşe undefined` | Argümanlar soldan sırayla eşleşir | Varsayılanlı parametreleri sona koy |
| 11 | `function greet(name: "misafir")` | `SyntaxError: Unexpected token ':'` | Beklenmeyen `:` işareti | `=` kullan |
| 12 | `greet(null);` | Hata yok, çıktı: `Merhaba null` | Varsayılan sadece `undefined`'da çalışır | Argüman verme, `undefined` ver ya da `??` kullan |
| 13 | Fonksiyondaki `result`'ı dışarıda yazdırmak | `ReferenceError: result is not defined` | result tanımlı değil (yerel değişken) | `return result;` + `let result = calculate();` |
| 14 | `function greet(name) { let name = "Ali"; }` | `SyntaxError: Identifier 'name' has already been declared` | 'name' adı zaten tanımlanmış | `let`'siz ata ya da başka isim seç |
| 15 | İçeride `let steps = steps + 500;` | `ReferenceError: Cannot access 'steps' before initialization` | 'steps'e ilk değeri verilmeden erişilemez | `let`'i kaldır ya da yeni isim: `let newSteps = steps + 500;` |

---

## 3. Bugünün İngilizce terimleri

| İngilizce | Türkçe |
|---|---|
| function | fonksiyon (işlev) |
| function declaration | fonksiyon bildirimi |
| define / declare | tanımlamak |
| call / invoke | çağırmak |
| function body | fonksiyon gövdesi |
| keyword | anahtar kelime |
| built-in function | hazır (yerleşik) fonksiyon |
| parameter | parametre (tanımdaki boş kutu) |
| argument | argüman (çağırırken verilen değer) |
| return | geri döndürmek |
| return value | dönüş değeri |
| early return | erken çıkış |
| default parameter / default value | varsayılan parametre / varsayılan değer |
| undefined | tanımsız (değer yok) |
| NaN (Not a Number) | sayı değil |
| primitive value | ilkel değer (sayı, metin, boolean gibi) |
| scope | kapsam (değişkenin görüldüğü alan) |
| local variable | yerel değişken |
| outer variable | dış değişken |
| global variable | genel (global) değişken |
| shadowing | gölgeleme |
| case-sensitive | büyük/küçük harfe duyarlı |
| syntax | sözdizimi |
| SyntaxError | sözdizimi hatası |
| ReferenceError | referans hatası |
| TypeError | tip hatası |
| identifier | tanımlayıcı (değişken ya da fonksiyon adı) |
| initialization | ilk değer verme |
| DRY (Don't Repeat Yourself) | kendini tekrar etme |
| hoisting | yukarı taşıma |
| function expression | fonksiyon ifadesi |
| arrow function | ok fonksiyonu |
| rest parameters | kalan parametreler |
| recursion | özyineleme |

---

## 4. Tekrar kartları

Önce cevabı kendin söyle, sonra soruya tıklayıp kontrol et.

<details>
<summary><b>1. Fonksiyonu tanımlamakla çağırmak arasındaki fark ne?</b></summary>

Tanımlamak (`function ad() {...}`) kodu bir isimle kaydeder; hiçbir şey çalışmaz. Çağırmak (`ad()`) gövdeyi o an çalıştırır. Parantez yoksa çağrı da yoktur.

</details>

<details>
<summary><b>2. Parametre ile argüman arasındaki fark ne?</b></summary>

Parametre tanımdaki isimdir (boş kutu), argüman çağırırken verilen değerdir. `function greet(name)` → `name` parametre; `greet("Ayşe")` → `"Ayşe"` argüman.

</details>

<details>
<summary><b>3. Bir argümanı vermeyi unutursan ne olur?</b></summary>

Hata çıkmaz; o parametre `undefined` olur (ekranda "Merhaba undefined!" gibi). Fazladan verilen argüman ise yok sayılır.

</details>

<details>
<summary><b>4. console.log ile return arasındaki fark ne?</b></summary>

`console.log` sadece ekrana yazar, değer programda kaybolur. `return` değeri çağıran koda verir (değişkene atanır, işleme girer, `if` içinde kullanılır) ve fonksiyonu o anda bitirir.

</details>

<details>
<summary><b>5. return'ü olmayan bir fonksiyonun sonucunu değişkene atarsan ne olur?</b></summary>

Değişkene `undefined` konur. Onunla matematik yaparsan `NaN` (sayı değil) çıkar.

</details>

<details>
<summary><b>6. Varsayılan değer hangi durumlarda devreye girer?</b></summary>

Argüman hiç verilmezse ya da `undefined` verilirse. `0`, `""`, `null`, `false` verilirse devreye girmez.

</details>

<details>
<summary><b>7. let a = 5; function double(x) { x = x * 2; } double(a); console.log(a); → ne yazar?</b></summary>

`5`. Fonksiyon `a`'nın kopyasıyla çalıştı; sadece kopya (`x`) değişti.

</details>

<details>
<summary><b>8. Fonksiyonun içinde let ile tanımladığın değişkeni dışarıda kullanabilir misin?</b></summary>

Hayır: `ReferenceError: ... is not defined` alırsın. Çözüm: değeri `return` et, dışarıda bir değişkene ata: `let result = calculate();`

</details>

---

## 5. Görevler

### Görev 1 — Kar tatili var mı?
**Normal · Sıfırdan yazma · 1.2 Parametreler + 1.3 return · Alan: Hava durumu**

`isSnowDay(snow, temp)` yaz: kar 20 cm veya üstündeyse **ya da** kar en az 10 cm **ve** sıcaklık -5°C veya altındaysa `true`, değilse `false` döndürsün. Fonksiyonun içinde `console.log` olmasın; mesajı dışarıda, dönen cevaba göre yazdır.

Girilen değerler: `let snowCm = 25;` ve `let temperature = -2;`

| snowCm | temperature | Beklenen çıktı |
|---|---|---|
| 25 | -2 | `25 cm kar, -2°C: Okullar tatil!` |
| 12 | -1 | `12 cm kar, -1°C: Okula gidiyoruz.` |
| 10 | -5 | `10 cm kar, -5°C: Okullar tatil!` (sınır durumu) |

```js
// Çözümümü buraya yapıştır

```

### Görev 2 — Can barı
**Normal · Çalışan kodu değiştirme · 1.4 Varsayılan değerler (+ 1.3 return) · Alan: Oyun**

Başlangıç kodu:

```js
let playerHealth = 100;   // girilen: oyuncunun canı

function takeDamage(health, damage) {
  let newHealth = health - damage;
  console.log("Kalan can: " + newHealth);
}

takeDamage(playerHealth, 30);
takeDamage(playerHealth, 150);
```

İstenenler: (1) hasar verilmezse 10 olsun, (2) can asla 0'ın altına inmesin, (3) fonksiyon yazdırmasın, yeni canı döndürsün. En alttaki iki çağrının yerine şu üç satır gelecek:

```js
console.log("Kalan can: " + takeDamage(playerHealth));
console.log("Kalan can: " + takeDamage(playerHealth, 30));
console.log("Kalan can: " + takeDamage(playerHealth, 150));
```

| playerHealth | Beklenen çıktı (3 satır) |
|---|---|
| 100 | `Kalan can: 90` · `Kalan can: 70` · `Kalan can: 0` |
| 25 | `Kalan can: 15` · `Kalan can: 0` · `Kalan can: 0` |
| 0 | `Kalan can: 0` · `Kalan can: 0` · `Kalan can: 0` (sınır durumu) |

```js
// Çözümümü buraya yapıştır

```

### Görev 3 — Karne günü
**Normal · Hatalı kodu bulup düzeltme · 1.1 Tanımlama ve çağırma + 1.5 Yerel ve dış değişkenler · Alan: Okul**

Kodda **3 hata** var. Hepsini bul, düzelttiğin her satırın sonuna `// DÜZELTME: ...` yaz. Fonksiyon adlarını ve geçme notunu (50) değiştirme.

```js
let exam1 = 70;   // girilen: 1. sınav notu
let exam2 = 45;   // girilen: 2. sınav notu
let exam3 = 80;   // girilen: 3. sınav notu

function calculateAverage(a, b, c) {
  let average = (a + b + c) / 3;
}

function getResult(average) {
  if (average >= 50) {
    return "Geçti";
  }
  return "Kaldı";
}

calculateAverage(exam1, exam2, exam3);
console.log("Ortalama: " + average);
console.log("Sonuç: " + getResult);
```

| Notlar | Beklenen çıktı (düzeltince) |
|---|---|
| 70, 45, 80 | `Ortalama: 65` · `Sonuç: Geçti` |
| 0, 0, 0 | `Ortalama: 0` · `Sonuç: Kaldı` (sınır durumu: 0) |
| 50, 50, 50 | `Ortalama: 50` · `Sonuç: Geçti` (sınır durumu: tam geçme notu) |

```js
// Çözümümü buraya yapıştır

```

### Görev 4 — Uyku hesaplayıcı (ZOR)
**Zor · Sıfırdan yazma · Hepsi (1.1–1.5) · Alan: Zaman**

Girilen değerler: `let sleepHour = 23;` ve `let sleepMinute = 45;`

1. Dış sabit: `const MINUTES_IN_DAY = 1440;`
2. `toMinutes(hour, minute)` → gece yarısından beri geçen dakikayı döndürür. Örnek: `toMinutes(1, 30)` → `90`
3. `formatTime(totalMinutes)` → her zaman iki haneli `"SS:DD"` metni döndürür. Örnek: `formatTime(90)` → `"01:30"`, `formatTime(0)` → `"00:00"`
4. `getWakeUpTime(hour, minute, sleepHours = 8)` → uyanma saatini `"SS:DD"` olarak döndürür; gece yarısını geçerse başa sarar (23:45 + 8 saat = 07:45). Diğer iki fonksiyonu kullanır.
5. Hiçbir fonksiyonun içinde `console.log` yok; yazdırma en altta.

| Yatış | Beklenen çıktı (3 satır) |
|---|---|
| 23, 45 | `Yatış saati: 23:45` · `8 saat uyursan: 07:45` · `6 saat uyursan: 05:45` |
| 22, 5 | `Yatış saati: 22:05` · `8 saat uyursan: 06:05` · `6 saat uyursan: 04:05` |
| 0, 0 | `Yatış saati: 00:00` · `8 saat uyursan: 08:00` · `6 saat uyursan: 06:00` (sınır durumu: gece yarısı) |

```js
// Çözümümü buraya yapıştır

```

---

## Kaynaklar

- [MDN — Functions (rehber)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN — return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [MDN — Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [javascript.info — Functions](https://javascript.info/function-basics) · [Türkçe sürümü](https://tr.javascript.info/function-basics)
- [W3Schools — JavaScript Functions](https://www.w3schools.com/js/js_function_intro.asp)

---

## Kendi notlarım

