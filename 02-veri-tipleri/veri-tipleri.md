# Veri Tipleri ve Tip Dönüşümleri

> Önceki konular: JavaScript'e giriş, Merhaba Dünya, kod yapısı, `"use strict"`, değişkenler
> Kodları `node dosya.js` ile çalıştırıyorum.

---

## 1. Alt konuların özeti

### 1.1 Veri tipi ve `typeof`
- **Özet:** Her değerin bir türü vardır. JavaScript'te 8 tip var: 7 ilkel (number, bigint, string, boolean, undefined, null, symbol) + object. `typeof değer` tipi **metin olarak** söyler. JS dinamik tiplidir: aynı değişkene önce sayı, sonra metin koyabilirsin.
- **Benzetme:** Değişken = kutu, değer = içindeki eşya, tip = eşyanın cinsi (yumurta mı, su mu?). `typeof` = kutuyu açıp "bu ne?" diye bakan depo görevlisi.
- **Dikkat:** `typeof null` → `"object"` (tarihî hata). null kontrolü için `=== null` kullan.

### 1.2 Number (sayı)
- **Özet:** Tam sayı ve ondalıklı sayı aynı tiptir. Ondalık ayırıcı **nokta**dır (`1.78`). Özel değerler: `Infinity`, `-Infinity`, `NaN` (Not a Number). `NaN === NaN` → `false`; kontrol için `Number.isNaN()`. Güvenli en büyük tam sayı `9007199254740991`; daha büyükleri için BigInt (`10n`). BigInt ile Number karıştırılamaz.
- **Benzetme:** Hesap makinesi. `NaN` = ekranda "Error" yazması (ama hâlâ hesap makinesinin ekranı → tipi number). `Infinity` = sıfıra bölünce bitmeyen sayı.
- **Dikkat:** `0.1 + 0.2` → `0.30000000000000004`. Para/mesafe gibi şeylerde tam sayıyla (kuruş, metre) hesapla, en sonda böl.

### 1.3 String (metin)
- **Özet:** Metin; `"çift"`, `'tek'` ya da `` `ters` `` tırnak içinde yazılır. `+` ile birleştirilir. Ters tırnaklı şablon metin (template literal) içine `${...}` ile değişken/işlem yerleştirilir ve çok satır yazılabilir. `\'`, `\"`, `\n` kaçış karakterleridir. `.length` karakter sayısını verir.
- **Benzetme:** Şablon metin = düğün davetiyesi şablonu: "Sayın ____" boşluğuna her misafirin adı yazılır.
- **Dikkat:** `${}` sadece **ters tırnakta** çalışır.

### 1.4 Boolean (doğru/yanlış)
- **Özet:** Sadece iki değer: `true`, `false` (küçük harf!). Karşılaştırmalar boolean üretir: `>`, `<`, `>=`, `<=`, `===` (eşit mi), `!==` (farklı mı). İsimler genelde `is...`/`has...` ile başlar.
- **Benzetme:** Işık anahtarı: açık ya da kapalı, arası yok.
- **Dikkat:** `"false"` bir metindir, boolean değildir. `=` atamadır, `===` karşılaştırmadır.

### 1.5 `undefined` ve `null`
- **Özet:** `undefined` = "henüz değer verilmedi" (JS kendisi koyar, `let x;`). `null` = "bilerek boş bıraktım" (programcı koyar). İkisinin de `.length` gibi özelliği okunamaz → TypeError. "not defined" (değişken hiç yok) ile `undefined` (var ama boş) farklıdır.
- **Benzetme:** Anket formu: soruya hiç gelinmemiş = `undefined`; "Yok" kutusu işaretlenmiş = `null`.

### 1.6 Açık dönüşüm: `String()`, `Number()`, `parseInt()`, `parseFloat()`
- **Özet:** Formdan, URL'den, dosyadan gelen her şey metindir; hesap için sayıya çevir.
  - `Number(x)`: titizdir. `"  42  "`→42, `""`→**0**, `"42px"`→NaN, `"12,5"`→NaN, `true`→1, `null`→0, `undefined`→NaN.
  - `parseInt(x)` / `parseFloat(x)`: baştaki sayıyı okur, harfi görünce durur. `"180 cm"`→180, `"72.5 kg"`→72.5, `"3.9"`→3 (yuvarlamaz, keser), `"cm 180"`→NaN, `""`→NaN.
  - `String(x)`: her şeyi metne çevirir, `null`/`undefined` için bile çalışır (`.toString()` çalışmaz).
- **Benzetme:** `Number` = titiz memur (tek harf görse "geçersiz" der). `parseInt` = pratik kasiyer (baştaki rakamları okur, gerisini umursamaz).

### 1.7 Boolean dönüşümü: truthy / falsy
- **Özet:** `Boolean(x)`. 8 falsy (yanlışımsı) değer: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. Geri kalan her şey truthy: `"0"`, `"false"`, `" "`, `-1` dahil.
- **Benzetme:** Kapıdaki 8 kişilik kara liste: listede olan `false`, olmayan herkes `true`.
- **Dikkat:** "Değer var mı?" kontrolünü `Boolean()` ile yaparsan geçerli `0` da "yok" sayılır.

### 1.8 Otomatik dönüşüm ve `==` / `===`
- **Özet:** JS bazen kendisi çevirir (örtük dönüşüm, type coercion). `+` iki taraftan biri metinse **birleştirir**; `-`, `*`, `/` sayıya çevirir. İşlemler soldan sağa yapılır. `==` önce tipleri çevirip karşılaştırır, `===` tip + değer bakar. **Her zaman `===` kullan.**
- **Benzetme:** `==` = sadece ismine bakan kapıcı; `===` = kimlik kartını da isteyen kapıcı.

---

## 2. Temel kod örnekleri

```js
// Tip öğrenme
console.log(typeof 42);          // number
console.log(typeof "42");        // string
console.log(typeof null);        // object (tarihî hata)

// Sayı özel değerleri
console.log(10 / 0);             // Infinity
console.log(0 / 0);              // NaN
console.log(Number.isNaN(0 / 0)); // true

// Şablon metin
const userName = "Ayşe";
console.log(`Merhaba ${userName}, 2 + 3 = ${2 + 3}`); // Merhaba Ayşe, 2 + 3 = 5

// Açık dönüşüm
console.log(Number("21") + 1);   // 22
console.log(parseInt("180 cm")); // 180
console.log(String(42));         // 42  (ama tipi string)

// Truthy / falsy
console.log(Boolean(""));        // false
console.log(Boolean("0"));       // true

// Otomatik dönüşüm
console.log("5" + 2);            // 52
console.log("5" - 2);            // 3
console.log(5 == "5");           // true
console.log(5 === "5");          // false
```

---

## 3. Sık yapılan hatalar ve hata mesajları

| Hatalı kod | Terminal mesajı | Türkçe anlamı | Düzeltme |
|---|---|---|---|
| `console.log(typeof age); let age = 5;` | `ReferenceError: Cannot access 'age' before initialization` | age'e oluşturulmadan önce erişilemez | Önce tanımla, sonra kullan |
| `let distance = 2,5;` | `SyntaxError: Unexpected number` | Beklenmeyen sayı | Ondalıkta nokta: `2.5` |
| `10n + 5` | `TypeError: Cannot mix BigInt and other types, use explicit conversions` | BigInt başka tiplerle karıştırılamaz | `10n + 5n` |
| `console.log('Ali'nin kitabı');` | `SyntaxError: missing ) after argument list` | Argüman listesinden sonra `)` eksik | `"Ali'nin kitabı"` veya `'Ali\'nin kitabı'` |
| `console.log("Merhaba);` | `SyntaxError: Invalid or unexpected token` | Geçersiz ya da beklenmeyen işaret | Tırnağı kapat |
| `'Merhaba ${name}'` | (hata yok, `${name}` aynen yazılır) | — | Ters tırnak kullan |
| `let isOpen = True;` | `ReferenceError: True is not defined` | True tanımlı değil | `true` (küçük harf) |
| `const age = 20; console.log(age = 18);` | `TypeError: Assignment to constant variable.` | Sabit değişkene atama yapılamaz | `age === 18` |
| `console.log(score);` (hiç tanımlanmamış) | `ReferenceError: score is not defined` | score tanımlı değil | Önce `let score = ...` |
| `let city; city.length` | `TypeError: Cannot read properties of undefined (reading 'length')` | undefined'ın özellikleri okunamaz ('length' okunurken) | Önce değer ver |
| `let phone = null; phone.length` | `TypeError: Cannot read properties of null (reading 'length')` | null'ın özellikleri okunamaz | Önce `null` olup olmadığını düşün |
| `number("42")` | `ReferenceError: number is not defined` | number tanımlı değil | `Number` (büyük N) |
| `let age; age.toString()` | `TypeError: Cannot read properties of undefined (reading 'toString')` | undefined'da toString yok | `String(age)` |
| `boolean("x")` | `ReferenceError: boolean is not defined` | boolean tanımlı değil | `Boolean` (büyük B) |
| `"70" + 20` | (hata yok, sonuç `7020`) | — | `Number("70") + 20` |
| `"10" > "9"` | (hata yok, sonuç `false`) | Metinler harf harf karşılaştırılır | `Number("10") > Number("9")` |
| `Number("12,5")` | (hata yok, sonuç `NaN`) | — | Nokta kullan: `"12.5"` |
| `Boolean("false")` | (hata yok, sonuç `true`) | Boş olmayan metin hep true | Metin değil gerçek `false` kullan |

> **Ders:** Bu konudaki hataların çoğu **sessizdir**. Terminal hiçbir şey söylemez, sadece sonuç yanlış çıkar. Şüphelenince `typeof` ile kontrol et.

---

## 4. Bugünün İngilizce terimleri

| İngilizce | Türkçe |
|---|---|
| data type | veri tipi |
| primitive (value) | ilkel (değer) |
| object | nesne |
| dynamically typed | dinamik tipli |
| operator | işleç (operatör) |
| integer | tam sayı |
| floating-point number | ondalıklı (kayan noktalı) sayı |
| NaN (Not a Number) | sayı değil |
| Infinity | sonsuz |
| BigInt | büyük tam sayı |
| string | metin (karakter dizisi) |
| concatenation | birleştirme |
| template literal | şablon metin |
| interpolation | (değer) yerleştirme |
| escape character | kaçış karakteri |
| length | uzunluk |
| boolean | mantıksal değer (doğru/yanlış) |
| comparison | karşılaştırma |
| undefined | tanımsız (değer verilmemiş) |
| null | bilerek boş |
| type conversion | tip dönüşümü |
| explicit conversion | açık dönüşüm |
| implicit conversion / type coercion | örtük (otomatik) dönüşüm |
| parse | ayrıştırmak, metinden okumak |
| truthy / falsy | doğrumsu / yanlışımsı |
| loose equality (`==`) | gevşek eşitlik |
| strict equality (`===`) | katı eşitlik |
| ReferenceError | başvuru hatası |
| TypeError | tip hatası |
| SyntaxError | söz dizimi hatası |

---

## 5. Tekrar kartları

**S1:** JavaScript'te kaç veri tipi var?
**C1:** 8 — 7 ilkel (number, bigint, string, boolean, undefined, null, symbol) + object.

**S2:** `typeof null` ne döndürür? null'ı nasıl kontrol ederim?
**C2:** `"object"` (tarihî hata). Kontrol: `değer === null`.

**S3:** NaN nedir, tipi nedir, nasıl kontrol edilir?
**C3:** "Sayı değil" demek; ama tipi `number`. `NaN === NaN` false olduğu için `Number.isNaN(x)` ile kontrol edilir.

**S4:** `Number("")` ve `Number("12,5")` ne verir?
**C4:** `0` ve `NaN`.

**S5:** `Number("42px")` ile `parseInt("42px")` farkı?
**C5:** `NaN` ve `42`. Number titizdir, parseInt baştaki sayıyı okur.

**S6:** 8 falsy değeri say.
**C6:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

**S7:** `"5" + 2` ve `"5" - 2` neden farklı?
**C7:** `+` metin görünce birleştirir → `"52"`. `-` sadece sayıyla çalışır, metni sayıya çevirir → `3`.

**S8:** `==` ile `===` farkı ne, hangisini kullanmalıyım?
**C8:** `==` önce tipleri çevirir (`5 == "5"` true), `===` tip + değer bakar (`5 === "5"` false). Her zaman `===`.

---

## 6. Görevler

### Görev 1 — Koşu temposu (Normal · Sıfırdan yazma · Number + açık dönüşüm)
Girdiler: `distanceInput` (km, metin), `minutesInput` (dakika, metin). Tempoyu (dakika/km) hesapla, tipleri ve NaN durumunu yazdır.

```js
// Çözümüm:

```

### Görev 2 — Hava durumu panosu (Normal · Kodu değiştirme · String + Boolean + Number(""))
Verilen çalışan kodu şablon metne çevir, Fahrenheit ve iki boolean satırı ekle; 3. örnekte nemin neden 0 çıktığını yorumla.

```js
// Çözümüm:

```

### Görev 3 — Oyun skor tablosu (Normal · Hata bulup düzeltme · Otomatik dönüşüm + undefined + === + tırnaklar)
Koddaki 5 hatayı (1 gürültülü, 4 sessiz) bul ve düzelt.

```js
// Çözümüm:

```

### Zor Görev — Çalışma zamanlayıcısı (Zor · Sıfırdan yazma · Bütün alt konular)
Dört metin girdiden oturum, mola ve toplam süreleri hesapla; boolean kontrolleri ve "dönüştürmeden toplasaydık" satırını yazdır.

```js
// Çözümüm:

```

---

## Kendi notlarım

-
