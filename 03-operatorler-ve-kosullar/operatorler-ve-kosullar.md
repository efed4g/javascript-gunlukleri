# Operatörler, Karşılaştırmalar ve Koşullar (if, else, ?)

> **Tarih:** 15 Ekim 2026 · **Önceki konu:** Tip dönüşümleri · **Sıradaki konu:** Mantıksal operatörler (`&&`, `||`, `!`)
> Kodları `node dosya.js` ile çalıştır. Hata mesajları Node 22 ile denendi; başka sürümde küçük farklar olabilir.

---

## 1. Alt konuların özeti

### 1.1 Aritmetik operatörler ve işlem önceliği
- **Özet:** `+` toplama, `-` çıkarma, `*` çarpma, `/` bölme, `%` kalan, `**` üs. `%` yüzde **değil**, bölmeden kalandır. `/` ondalıklı sonuç verebilir (`7 / 2` → `3.5`). `5 / 0` → `Infinity`, `0 / 0` → `NaN`; ikisi de hata vermez.
- **Öncelik:** `()` → `**` → `* / %` → `+ -`. Aynı seviyede soldan sağa; `**` sağdan sola (`2 ** 3 ** 2` → `512`). Emin değilsen parantez kullan.
- **Benzetme:** 17 kurabiyeyi 5 çocuğa paylaştır: `/` kişi başına düşen (3.4), `%` tabakta kalan (2). Parantez, "sıra beklemeden öne geç" kartıdır.

```js
console.log(17 % 5);                  // 2
let minutes = 135 % 60;               // 15
let hours = (135 - minutes) / 60;     // 2   → "kalanı çıkar, sonra böl" kalıbı
console.log((22 + 5) % 24);           // 3   → saat 22'den 5 saat sonra
console.log((70 + 85 + 91) / 3);      // 82  → parantez önce toplatır
```

### 1.2 `+` operatörünün iki yüzü
- **Özet:** Bir taraf metinse `+` **birleştirir**; iki taraf da sayıysa **toplar**. Soldan sağa işler. `- * / %` her zaman sayıya çevirir. Tekli `+` (unary plus) = `Number()`: `+"7"` → `7`.
- **Benzetme:** `+` iki modlu bir alettir: hesap makinesi modu ve tutkal modu. Tek bir metin görürse tutkal moduna geçer. Tekli `+` ise çevirmendir: metni sayıya tercüme eder.

```js
console.log("Puan: " + 90);      // Puan: 90
console.log(2 + 2 + "1");        // 41   (önce 2+2=4, sonra 4+"1")
console.log("1" + 2 + 2);        // 122
console.log("6" - 2);            // 4
console.log("3" + "4");          // 34   (birleştirdi!)
console.log(+"3" + +"4");        // 7    (önce sayıya çevirdi)
```

### 1.3 Atama ve kısa atama operatörleri
- **Özet:** `=` "eşittir" değil, "sağı hesapla, sonucu sola koy"dur. `x += 5` ↔ `x = x + 5` (aynısı `-=`, `*=`, `/=`, `%=`, `**=` için). Metinde `+=` sona ekler. `const` ile tanımlanan değişkene yeniden atama yapılamaz.
- **Benzetme:** Kumbara: `+=` içini boşaltmadan para atmak, `-=` para çekmek; `=` ise kumbarayı boşaltıp içine yenisini koymak.

```js
let health = 100;
health = health - 15;   // 85  (uzun yazım)
health -= 15;           // 70  (kısa yazım)
health += 40;           // 110

let report = "Bugün";
report += " hava";      // "Bugün hava"

let slices = 19;
let leftover = slices % 6;   // 1
slices -= leftover;          // 18
slices /= 6;                 // 3
```

### 1.4 Artırma ve azaltma: `++` ve `--`
- **Özet:** `++` 1 ekler, `--` 1 çıkarır; sadece değişkenlerde çalışır. Sonek `x++` **eski** değeri verir sonra artırır; önek `++x` önce artırır sonra **yeni** değeri verir. Tek başına bir satırda kullanınca fark yoktur.
- **Benzetme:** Sıramatik: `x++` "önce elindeki numarayı ver, sonra ilerle"; `++x` "önce ilerle, sonra yeni numarayı ver".

```js
let a = 5;
let b = a++;    // b = 5, a = 6
let c = 5;
let d = ++c;    // d = 6, c = 6
```

### 1.5 Karşılaştırma operatörleri (sayılar ve metinler)
- **Özet:** `>`, `<`, `>=`, `<=`, `==`, `!=` → sonuç her zaman `true` / `false` (boolean). Önce aritmetik, sonra karşılaştırma yapılır. Metinler harf harf (sözlük / Unicode sırası) karşılaştırılır: büyük harf < küçük harf, `"2" > "12"` → `true`, Türkçe harfler (`ç ğ ı ö ş ü`) İngilizce harflerden sonra gelir.
- **Benzetme:** Terazi: iki şeyi koyarsın, sadece "evet" ya da "hayır" der. Metinler için ise sözlükteki sıra.

```js
let isAdult = 17 >= 18;          // false
console.log(17 + 1 >= 18);       // true  (önce 17 + 1)
console.log("Ahmet" < "Ali");    // true  (h, l'den önce gelir)
console.log("2" > "12");         // true  (METİN karşılaştırması!)
console.log(+"2" > +"12");       // false (SAYI karşılaştırması)
```

### 1.6 Eşitlik: `==`, `===` ve özel değerler
- **Özet:** `==` (gevşek eşitlik) farklı tipleri önce sayıya çevirir → sürprizler (`"" == 0` → `true`). `===` (sıkı eşitlik) tipi de kontrol eder → her zaman `===` ve `!==` kullan. `null == undefined` → `true`; ikisi başka hiçbir şeye `==` değildir. `null >= 0` → `true` ama `null == 0` → `false`. `undefined` ile `<`, `>` hep `false`. `NaN` hiçbir şeye eşit değil, kendisine bile → `Number.isNaN(x)` kullan.
- **Benzetme:** `==` sadece yüze bakar, `===` kimlik kartına da bakar.

```js
console.log(5 == "5");           // true
console.log(5 === "5");          // false
console.log(null == undefined);  // true
console.log(null >= 0);          // true
console.log(null == 0);          // false
console.log(NaN === NaN);        // false
```

### 1.7 `if` ve `else`
- **Özet:** `if (koşul) { ... } else { ... }` → koşul doğruysa ilk blok, değilse `else` bloğu çalışır; ikisi asla birlikte çalışmaz. Koşul otomatik boolean'a çevrilir: `false`, `0`, `""`, `null`, `undefined`, `NaN` → yanlışımsı (falsy); gerisi doğrumsu (truthy) — `"0"` ve `" "` dahil!
- **Benzetme:** Çatal yol: tabela (koşul) "evet" derse sol yol, "hayır" derse sağ yol.

```js
let number = 7;
if (number % 2 === 0) {
  console.log(`${number} çift sayıdır.`);
} else {
  console.log(`${number} tek sayıdır.`);   // bu çalışır
}
```

### 1.8 `else if`: birden fazla koşul
- **Özet:** Koşullar yukarıdan aşağı sırayla denenir; **ilk doğru olan** çalışır, gerisine bakılmaz. Aralık kontrolünde sıra kritiktir. `else` en sonda, tek ve koşulsuzdur. JavaScript'te tek kelimelik `elseif` yoktur. Bir if bloğunun içine başka if yazılabilir (iç içe if).
- **Benzetme:** Bozuk para ayırma makinesi: para rampada yuvarlanır, ilk sığdığı deliğe düşer, sonraki deliklere hiç uğramaz.

```js
let score = 82;
let letter;
if (score >= 85) {
  letter = "AA";
} else if (score >= 70) {
  letter = "BB";          // 82 buraya düşer
} else if (score >= 50) {
  letter = "CC";
} else {
  letter = "FF";
}
```

### 1.9 Koşul operatörü `?`
- **Özet:** `koşul ? doğruysaDeğer : yanlışsaDeğer` → bir **değer** üretir. Bir değişkene iki değerden birini atamak için ideal; farklı işler (eylemler) yaptırmak için `if` kullan. Zincirlenebilir ama 2-3 seviyeden fazlası okunmaz, o zaman `else if` kullan. Önceliği çok düşüktür; başka bir işlemin içinde kullanırken paranteze al.
- **Benzetme:** Cebe sığan if/else: `?` "doğru mu?", `:` "değilse" diye okunur.

```js
let status = age >= 18 ? "Yetişkin" : "Çocuk";
let warning = windSpeed < 20 ? "Hafif rüzgâr" : windSpeed < 50 ? "Kuvvetli rüzgâr" : "Fırtına!";
console.log(`Durum: ${isOnline ? "Çevrimiçi" : "Çevrimdışı"}`);
```

---

## 2. Sık yapılan hatalar ve hata mesajları

| Hatalı kod | Terminalde | Türkçesi | Doğrusu |
|---|---|---|---|
| `let result = -2 ** 2;` | `SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence` | Üs almanın hemen önünde tekli operatör var; öncelik belirsiz, parantez kullan. | `(-2) ** 2` → 4 ya da `-(2 ** 2)` → -4 |
| `score % 20` ("yüzde 20" sanmak) | Hata yok, sonuç yanlış: `0` | `%` kalan demek, yüzde değil. | `score * 20 / 100` |
| `"4000" + "3500"` | Hata yok: `40003500` | Metinler birleşti, toplanmadı. | `+"4000" + +"3500"` → 7500 |
| `console.log(+a ++b);` | `SyntaxError: missing ) after argument list` | Argüman listesinden sonra `)` eksik; `++` yan yana yazılınca artırma operatörü sanıldı. | `+a + +b` (aralarda boşluk) |
| `const lives = 3; lives -= 1;` | `TypeError: Assignment to constant variable.` | Sabit (const) değişkene atama yapılamaz. | `let lives = 3;` |
| `score =+ 10;` | Hata yok: `score` 10 olur | `=+` aslında `= +10` demek. | `score += 10;` |
| `let next = 5++;` | `SyntaxError: Invalid left-hand side expression in postfix operation` | Sonek işleminde sol taraf geçersiz; değişken olmalı. | `let n = 5; n++;` |
| `console.log(level++)` ile yeni değeri beklemek | Hata yok, eski değeri yazar | Sonek önce eski değeri verir. | `++level` ya da artırmayı ayrı satırda yap |
| `age =< 18` | `SyntaxError: Unexpected token '<'` | Beklenmeyen simge `<`. | `age <= 18` (eşittir hep sonda) |
| `age => 18` | Hata yok: `[Function (anonymous)]` | `=>` karşılaştırma değil, başka bir yapı (ok fonksiyonu). | `age >= 18` |
| `pin ==== 1234` | `SyntaxError: Unexpected token '='` | Beklenmeyen simge `=`. | `pin === 1234` |
| `input == 0` (boş metni kontrol ederken) | Hata yok: `true` | `""` sayıya çevrilince 0 olur. | `input === ""` |
| `result === NaN` | Hata yok: hep `false` | NaN kendisine bile eşit değil. | `Number.isNaN(result)` |
| `if (level = 10) {` | Hata yok; blok her zaman çalışır, `level` 10 olur | Karşılaştırma yerine atama yaptın. | `if (level === 10) {` |
| `if level > 5 {` | `SyntaxError: Unexpected identifier 'level'` | Beklenmeyen tanımlayıcı `level`; koşul parantez içinde olmalı. | `if (level > 5) {` |
| `if (level > 5); {` | Hata yok; blok her zaman çalışır | `;` if'i orada bitirdi. | `;` işaretini sil |
| `else if` zincirinde küçük sınır önce (`>= 50`, sonra `>= 85`) | Hata yok; 95 bile "CC" alır | İlk doğru koşul kazanır. | Büyükten küçüğe sırala |
| `} else (score >= 70) {` | `SyntaxError: Unexpected token '{'` | Beklenmeyen simge `{`; `else` koşul almaz. | `} else if (score >= 70) {` |
| `};` ardından `else {` | `SyntaxError: Unexpected token 'else'` | Beklenmeyen `else`; `;` if'i kapattı. | `}` ile `else` arasındaki `;` işaretini sil |
| `let result = score >= 50 ? "Geçti";` | `SyntaxError: Unexpected token ';'` | Beklenmeyen `;`; `:` ve ikinci değer eksik. | `score >= 50 ? "Geçti" : "Kaldı";` |
| TODO'yu doldurmadan çalıştırmak | `ReferenceError: average is not defined` | `average` diye bir değişken tanımlanmamış. | TODO satırını yaz |

---

## 3. Bugünün İngilizce terimleri

| İngilizce | Türkçe |
|---|---|
| operator | operatör (işleç) |
| operand | işlenen |
| expression | ifade |
| unary / binary / ternary | tekli / ikili / üçlü |
| arithmetic operators | aritmetik operatörler |
| addition / subtraction / multiplication / division | toplama / çıkarma / çarpma / bölme |
| remainder (modulo) | kalan (mod) |
| exponentiation | üs alma |
| operator precedence | işlem önceliği |
| string concatenation | metin birleştirme |
| unary plus | tekli artı |
| assignment operator | atama operatörü |
| compound assignment | kısa (birleşik) atama |
| increment / decrement | artırma / azaltma |
| prefix / postfix | önek / sonek |
| comparison operators | karşılaştırma operatörleri |
| boolean | mantıksal değer (`true` / `false`) |
| lexicographical order | sözlük sırası |
| loose equality / strict equality | gevşek eşitlik / sıkı eşitlik |
| condition | koşul |
| if statement | if deyimi |
| code block | kod bloğu |
| truthy / falsy | doğrumsu / yanlışımsı |
| nested if | iç içe if |
| conditional (ternary) operator | koşul (üçlü) operatörü |
| indentation | girinti |

---

## 4. Tekrar kartları

**S1.** `17 % 5` kaç eder? `%` ne yapar?
> **C:** `2`. Bölmeden kalanı verir; yüzde değildir.

**S2.** `"3" + 4` ve `"3" - 4` ne verir?
> **C:** `"34"` (bir taraf metin, `+` birleştirir) ve `-1` (`-` her zaman sayıya çevirir).

**S3.** `x += 5` neyin kısaltmasıdır? `x =+ 5` ne yapar?
> **C:** `x = x + 5`. `x =+ 5` ise `x = +5` demektir; x'in eski değeri kaybolur, 5 olur.

**S4.** `let a = 5; let b = a++;` satırlarından sonra a ve b kaçtır?
> **C:** a = 6, b = 5. Sonek `a++` önce eski değeri verir, sonra artırır.

**S5.** `"2" > "12"` neden `true`?
> **C:** İki taraf da metin; harf harf karşılaştırılır ve ilk harflerde "2", "1"den büyüktür. Sayı olarak karşılaştırmak için önce `+` ile çevir.

**S6.** `==` ile `===` farkı nedir? Hangisini kullanmalısın?
> **C:** `==` tipleri çevirip karşılaştırır, `===` tipi de kontrol eder. Her zaman `===` (ve `!==`).

**S7.** `let points = 0; console.log(points ? "Puan var" : "Puan yok");` ne yazdırır, neden?
> **C:** `Puan yok`. `0` yanlışımsıdır. Yanlışımsı değerler: `false`, `0`, `""`, `null`, `undefined`, `NaN`. `"0"` ise doğrumsudur!

**S8.** `else if` zincirinde iki koşul da doğruysa ne olur?
> **C:** Sadece yukarıdaki (ilk doğru olan) bloğu çalışır; gerisine bakılmaz. Bu yüzden aralıkları düzenli sırayla yaz.

---

## 5. Görevler

### Görev 1 — Geri sayım sayacı
`Normal · Sıfırdan yazma · 1.1 Aritmetik (%), 1.3 Kısa atama`

En üstte `let secondsLeft = 200000;` olsun. Kalan saniyeyi gün, saat, dakika ve saniyeye çevir; hiçbir sonuç ondalıklı olmasın. Hesapta en az bir `-=` ve bir `/=` kullan. Çıktı biçimi: `Kalan süre: X gün Y saat Z dakika W saniye`

| `secondsLeft` | Beklenen çıktı |
|---|---|
| `200000` | `Kalan süre: 2 gün 7 saat 33 dakika 20 saniye` |
| `90061` | `Kalan süre: 1 gün 1 saat 1 dakika 1 saniye` |
| `0` (sınır) | `Kalan süre: 0 gün 0 saat 0 dakika 0 saniye` |

```js
// Çözümüm:

```

### Görev 2 — Maç sonucu ve puan
`Normal · Çalışan kodu değiştirme · 1.6 ===, 1.8 else if ve iç içe if, 1.9 ?`

Başlangıç kodu:

```js
let homeGoals = 2;     // ev sahibi takımın golü
let awayGoals = 1;     // deplasman takımının golü

if (homeGoals > awayGoals) {
  console.log("Ev sahibi kazandı!");
} else {
  console.log("Deplasman kazandı!");
}
```

Değişiklikler: (1) Goller eşitse `Berabere!` (`else if` + `===`). (2) Kazanan 3 veya daha fazla gol farkıyla kazandıysa kazanma mesajının altına `Farklı galibiyet!` (iç içe if). (3) Ev sahibinin puanı (galibiyet 3, beraberlik 1, mağlubiyet 0) `?` ile `homePoints` değişkenine; en sona `Ev sahibi bu maçtan X puan aldı.`

- `2`, `1` → `Ev sahibi kazandı!` / `Ev sahibi bu maçtan 3 puan aldı.`
- `0`, `0` (sınır) → `Berabere!` / `Ev sahibi bu maçtan 1 puan aldı.`
- `1`, `4` → `Deplasman kazandı!` / `Farklı galibiyet!` / `Ev sahibi bu maçtan 0 puan aldı.`

```js
// Çözümüm:

```

### Görev 3 — Takdir mi, teşekkür mü?
`Normal · Hatalı kodu bulup düzeltme · 1.2 + ve tekli artı, 1.7 if (= / ===), 1.8 else if sırası`

Kural: Disiplin cezası olan belge alamaz; ceza yoksa ortalama 85 ve üstü Takdir, 70 ile 85 arası (85 hariç) Teşekkür, 70'in altı belge yok. Dönem ortalamaları sistemden METİN olarak geliyor. Kodda 4 hata var: 1'i SyntaxError, 3'ü sessiz. Düzelttiğin her satırın sonuna `// DÜZELTME: ...` yaz.

```js
let term1Text = "88";      // 1. dönem ortalaması (sistemden METİN geliyor)
let term2Text = "92";      // 2. dönem ortalaması (METİN)
let hasPenalty = false;    // disiplin cezası var mı?

let average = (term1Text + term2Text) / 2;
console.log("Yıl sonu ortalaması: " + average);

if (hasPenalty = true) {
  console.log("Disiplin cezası olduğu için belge verilemez.");
} else if (average >= 70) {
  console.log("Teşekkür belgesi kazandın!");
} else if (average >= 85 {
  console.log("Takdir belgesi kazandın!");
} else {
  console.log("Bu yıl belge yok, seneye!");
}
```

- Şu anki değerler (`"88"`, `"92"`, `false`) → `Yıl sonu ortalaması: 90` / `Takdir belgesi kazandın!`
- `"100"`, `"70"`, `false` (sınır: tam 85) → `Yıl sonu ortalaması: 85` / `Takdir belgesi kazandın!`
- `"75"`, `"68"`, `true` → `Yıl sonu ortalaması: 71.5` / `Disiplin cezası olduğu için belge verilemez.`
- `"0"`, `"0"`, `false` (sınır: 0) → `Yıl sonu ortalaması: 0` / `Bu yıl belge yok, seneye!`

```js
// Düzeltilmiş kodum:

```

### Görev 4 — Boss savaşı hesaplayıcı (ZOR)
`Zor · Sıfırdan yazma · Bugünün bütün alt konuları`

Girdiler: `bossHealth`, `attackPower`, `bossArmor`, `isCritical`. Hasar = saldırı − zırh; kritik moddaysa hasar 2 katı (kısa atama). Hasar 0 veya altındaysa sadece `Zırh çok güçlü, boss'a hasar veremiyorsun!`. Değilse: `Vuruş başına hasar: X`, `Gereken vuruş: Y` (can 1 bile kalsa bir vuruş daha), `Zorluk: ...` (1-3 Kolay, 4-6 Orta, 7+ Zor), `Son vuruştan önce boss'un canı: Z`. En az bir kısa atama, bir `?` ve bir `else if` kullan.

- `250, 55, 15, true` → `Vuruş başına hasar: 80` / `Gereken vuruş: 4` / `Zorluk: Orta` / `Son vuruştan önce boss'un canı: 10`
- `300, 40, 10, false` → `Vuruş başına hasar: 30` / `Gereken vuruş: 10` / `Zorluk: Zor` / `Son vuruştan önce boss'un canı: 30`
- `100, 20, 25, true` (sınır: negatif hasar) → `Zırh çok güçlü, boss'a hasar veremiyorsun!`

```js
// Çözümüm:

```

---

## Kendi notlarım
- Operatör (operator): Bir değer üzerinde işlem yapan semboldür, örneğin + ya da *.
- İşlenen (operand): Operatörün üzerinde çalıştığı değerdir. 5 * 2’de 5 ve 2 işlenendir.
- İfade (expression): Değerler, değişkenler ve operatörler birleşip bir sonuç üreten parçadır. 5 * 2 bir ifadedir, sonucu 10'dur.
- İkili (binary) ve tekli (unary) operatör: İki işlenenle çalışana ikili, tek işlenenle çalışana tekli denir. a - b ikili eksidir; -a tekli eksidir ve sayının işaretini çevirir.
