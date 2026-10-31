# JavaScript'e Giriş ve Değişkenler

> **Tarih:** 12 Ekim 2026
> **Konu:** İlk program (Merhaba Dünya), kod yapısı, yorumlar, değişkenler, isim verme, `"use strict"`
> **Çalıştırma:** VS Code → Terminal → `node dosya.js` (önce Ctrl+S ile kaydet!)

---

## 1. Alt konuların özeti

### 1.1 JavaScript nedir, ilk program
- JavaScript bir **programlama dili**. Tarayıcıda çalışır; **Node.js** sayesinde bilgisayarda ve sunucuda da çalışır.
- Kod **yukarıdan aşağı**, sırayla çalışır. `console.log(...)` parantez içindekini terminale yazar, her çağrı yeni satıra.
- **Benzetme:** Program = yemek tarifi, bilgisayar = tarifi harfiyen uygulayan aşçı, Node.js = mutfak.

```js
console.log("Merhaba Dünya");
```

### 1.2 console.log ile metin, sayı ve hesap
- Tırnaklı = **metin** (aynen yazılır). Tırnaksız sayı/işlem = **önce hesaplanır**.
- Virgül (`,`) değerlerin arasına **boşluk** koyar. `+` metinleri **boşluksuz yapıştırır**.
- İşlem sırası: önce parantez, sonra `*` ve `/`, en son `+` ve `-`.
- **Benzetme:** console.log bir megafon: tırnaklıyı "aynen oku", tırnaksızı "önce hesapla, sonra söyle".

```js
console.log("2 + 3");               // 2 + 3
console.log(2 + 3);                 // 5
console.log("Ortalama:", (80 + 90) / 2); // Ortalama: 85
console.log("Ali" + " " + "Veli");  // Ali Veli
```

### 1.3 Komutlar ve noktalı virgül
- **Komut (statement):** tek bir tam talimat. **Noktalı virgül (`;`)** komutun bittiğini gösterir.
- JS satır sonunu çoğu zaman örtük `;` sayar ama **her zaman değil** → her komutun sonuna `;` koy.
- Boşluklar ve boş satırlar sonucu değiştirmez.
- **Benzetme:** Komut = cümle, `;` = cümle sonundaki nokta.

```js
console.log("A"); console.log("B"); // aynı satırda iki komut: arada ; şart
```

### 1.4 Yorumlar
- `//` tek satır yorum, `/* ... */` çok satırlı yorum. JS yorumları **tamamen görmezden gelir**.
- Bir satırı geçici kapatmak = **yoruma almak**. VS Code: Ctrl + / (Mac: Cmd + /).
- Yorumlar **iç içe konamaz**.
- **Benzetme:** Kitabın kenarına kurşun kalemle alınan notlar; matbaa (JS) onları basmaz.

```js
// Bu satır çalışmaz
console.log("Selam"); // satır sonu yorumu
/* çok
   satırlı */
```

### 1.5 Değişkenler: let, const (var)
- **Değişken:** değeri saklayan isimli kutu. `let` = değiştirilebilir, `const` = sabit. `var` eski, kullanmıyoruz.
- `=` "eşittir" değil, **"sağdakini soldakine koy"** demek. Sağ taraf önce hesaplanır.
- Yeni değer konunca eskisi **kaybolur**. `let b = a;` → b'ye a'nın **o anki değerinin kopyası** konur.
- Değer verilmeden oluşturulan `let`'in değeri `undefined`.
- **Benzetme:** let = kapağı açılan kavanoz, const = mühürlü kavanoz, kopyalama = fotokopi.

```js
const playerName = "Mira";
let score = 0;
score = score + 10;   // 10
let first = "elma";
let second = first;   // "elma" kopyası
first = "armut";      // second hâlâ "elma"
```

### 1.6 İsim verme
- **Kurallar:** harf, rakam, `$`, `_` olur; rakamla başlamaz; boşluk ve `-` olmaz; büyük/küçük harf duyarlı; anahtar kelimeler (`let`, `class`, `return`...) isim olamaz.
- **Gelenekler:** camelCase (`userFirstName`), anlamlı İngilizce isimler, önceden bilinen sabitler için `UPPER_SNAKE_CASE` (`MINUTES_IN_HOUR`).
- **Benzetme:** Kavanoz etiketleri: "kavanoz1" yazarsan bir gün çaya tuz atarsın.

```js
const MINUTES_IN_HOUR = 60;
let studyHours = 2;
const studyMinutes = studyHours * MINUTES_IN_HOUR; // 120
```

### 1.7 "use strict"
- Dosyanın **en üstüne** yazılan yönerge; **katı modu** açar. Üstünde sadece yorum olabilir. Açılınca kapatılamaz.
- Katı modda tanımlanmamış değişkene atama **hata verir** (gevşek mod sessizce yeni değişken uydurur).
- Yanlış yere ya da yanlış yazılırsa (`"use stirct"`) **sessizce görmezden gelinir**.
- Modüller ve sınıflar otomatik katı moddadır.
- **Benzetme:** Futbol hakemi: maçın başında sahada olmalı; her faulde düdük çalar.

```js
"use strict";
let score = 100;
scroe = score + 50; // ReferenceError: scroe is not defined
```

---

## 2. Sık yapılan hatalar ve mesajları

| Hatalı kod | Terminal mesajı | Türkçe anlamı | Düzeltme |
|---|---|---|---|
| `Console.log("Merhaba");` | `ReferenceError: Console is not defined` | Console diye bir şey tanımlı değil | `console` küçük harf |
| `console.log(Merhaba Dünya);` | `SyntaxError: missing ) after argument list` | Argüman listesinden sonra `)` eksik | Metni tırnağa al |
| `node merhab.js` | `Error: Cannot find module '...merhab.js'` | Böyle bir dosya bulunamadı | Dosya adını ve klasörü kontrol et |
| `console.log("Merhaba);` | `SyntaxError: Invalid or unexpected token` | Geçersiz ya da beklenmedik parça | Kapanış tırnağını ekle |
| `console.log("Toplam:" 15);` | `SyntaxError: missing ) after argument list` | `)` ya da `,` bekleniyordu | Araya virgül koy |
| `console.log("5" + 3);` | (mesaj yok, çıktı `53`) | Metin + sayı = yapıştırma | Sayıyı tırnaksız yaz |
| `console.log("a") console.log("b")` | `SyntaxError: Unexpected identifier 'console'` | Beklenmedik isim: console | Araya `;` koy |
| `console.log("Merhaba")` + alt satırda `(1 + 2)` | `TypeError: console.log(...) is not a function` | console.log(...) bir fonksiyon değil | İlk satırın sonuna `;` |
| `Bu satır toplamı yazar` | `SyntaxError: Unexpected identifier 'satır'` | Beklenmedik isim | Başına `//` koy |
| `/* kapanmayan yorum` | `SyntaxError: Invalid or unexpected token` | Geçersiz parça | `*/` ile kapat |
| `/* /* iç */ */` | `SyntaxError: Unexpected token '*'` | Beklenmedik `*` | Yorumları iç içe koyma |
| `const lives = 3; lives = 2;` | `TypeError: Assignment to constant variable.` | Sabit değişkene atama yapılamaz | `let` kullan |
| `let score = 1; let score = 2;` | `SyntaxError: Identifier 'score' has already been declared` | score adı zaten tanımlı | İkinci `let`'i sil |
| `console.log(level); let level = 1;` | `ReferenceError: Cannot access 'level' before initialization` | İlk değer verilmeden erişilemez | Önce tanımla |
| `console.log(total);` (tanımsız) | `ReferenceError: total is not defined` | total tanımlı değil | Değişkeni oluştur / yazımı düzelt |
| `const speed;` | `SyntaxError: Missing initializer in const declaration` | const'ta ilk değer eksik | `const speed = 10;` |
| `let 1stPlace = "Ada";` | `SyntaxError: Invalid or unexpected token` | Geçersiz parça | `firstPlace` |
| `let user-name = "Ada";` | `SyntaxError: Unexpected token '-'` | Beklenmedik `-` | `userName` |
| `let class = "10-A";` | `SyntaxError: Unexpected token 'class'` | class ayrılmış kelime | `className` |
| `let userName...; console.log(username);` | `ReferenceError: username is not defined` | username tanımlı değil | Aynı harflerle yaz |
| `"use strict"; let package = 5;` | `SyntaxError: Unexpected strict mode reserved word` | Katı modda ayrılmış kelime | Başka isim |
| `"use strict";` 2. satırda | (mesaj yok) | Katı mod açılmadı | En üste taşı |

> **Hatırla:** `SyntaxError` kod hiç çalışmadan önce yakalanır (dosya baştan okunur). `ReferenceError` ve `TypeError` kod çalışırken, o satıra gelince çıkar.

---

## 3. Bugünün İngilizce terimleri

| İngilizce | Türkçe |
|---|---|
| programming language | programlama dili |
| browser | tarayıcı |
| server | sunucu |
| runtime | çalışma ortamı (Node.js) |
| engine | motor (V8) |
| terminal / console | terminal / konsol |
| statement | komut |
| semicolon | noktalı virgül |
| whitespace | boşluk karakterleri |
| comment / comment out | yorum / yoruma almak |
| string | metin |
| number | sayı |
| operator | işleç |
| concatenation | birleştirme |
| argument | argüman (parantez içine verilen değer) |
| variable | değişken |
| declaration | bildirim (oluşturma) |
| assignment | atama |
| initialization | ilk değer verme |
| reassignment | yeniden atama |
| constant | sabit |
| undefined | tanımsız |
| identifier | tanımlayıcı (isim) |
| keyword / reserved word | anahtar kelime / ayrılmış kelime |
| case-sensitive | büyük/küçük harf duyarlı |
| camelCase | deve hörgücü yazımı |
| strict mode / sloppy mode | katı mod / gevşek mod |
| directive | yönerge |
| syntax | söz dizimi |
| logic error | mantık hatası |
| debugging | hata ayıklama |

---

## 4. Tekrar kartları (soru → cevap)

1. **S:** `node merhaba.js` ne yapar?
   **C:** merhaba.js dosyasındaki JavaScript kodunu Node.js ile çalıştırır; çıktılar terminalde görünür.
2. **S:** `console.log("2 + 3")` ile `console.log(2 + 3)` arasındaki fark ne?
   **C:** İlki tırnaklı olduğu için metni aynen yazar (`2 + 3`); ikincisi hesaplar (`5`).
3. **S:** Virgül ile `+` arasındaki fark ne?
   **C:** Virgül değerlerin arasına boşluk koyar; `+` metinleri boşluksuz yapıştırır.
4. **S:** JS satır sonunu zaten `;` sayıyorsa neden hep `;` koymalıyız?
   **C:** Çünkü her zaman doğru tahmin etmez; örneğin `(` ile başlayan satırdan önce `;` koymaz ve iki satırı tek komut sanar.
5. **S:** Yorum iç içe konabilir mi?
   **C:** Hayır. İlk `*/` görüldüğünde yorum biter, kalan kısım kod sanılır ve hata çıkar.
6. **S:** `let` ile `const` farkı ne? Hangisini varsayılan seçmeliyiz?
   **C:** `let`'in değeri değiştirilebilir, `const`'unki değiştirilemez. Değeri değişmeyecekse `const`, değişecekse `let`.
7. **S:** `let b = a; a = 20;` sonrasında b neden değişmez?
   **C:** b'ye a'nın o anki değerinin kopyası konmuştu; a'ya yeni değer koymak kopyayı etkilemez.
8. **S:** `"use strict"` nereye yazılır, yanlış yere yazılırsa ne olur?
   **C:** Dosyanın en üstüne (üstünde sadece yorum olabilir). Aşağıya yazılırsa hata vermeden görmezden gelinir; katı mod açılmaz.

---

## 5. Görevler ve çözümlerim

### Görev 1 — Normal · Sıfırdan yazma · Hava durumu: Sıcaklık günlüğü
Tek bir `let temperature` ile sabah, öğlen ve akşam sıcaklığını yazdır. Girilen değerler: `cityName`, `morningTemp`, `noonIncrease`, `eveningDecrease`.

```js
// Çözümüm:

```

### Görev 2 — Normal · Çalışan kodu değiştirme · Okul: Not ortalaması
Başlangıç kodu:
```js
"use strict";
let a = "Zeynep";
let x = 70;
let y = 85;
let z = 90;
console.log("Öğrenci:", a);
console.log("Ortalama:", (x + y + z) / 3);
```
İsimleri düzelt, const/let seç, 4. notu (proje) ekle, `EXAM_COUNT` sabiti kullan, yorumları ekle.

```js
// Çözümüm:

```

### Görev 3 — Normal · Hatalı kodu düzeltme · Oyun: Uzay Kaşifi raporu
Başlangıç kodu (4 hata var):
```js
// Uzay Kaşifi - seviye sonu raporu
let playerName = "Mira";
"use strict";
const startScore = 120;      // girilen değer: başlangıç puanı
const lives = 3;             // başlangıçtaki can sayısı
let score = startScore;

// Oyuncu bir yıldız topladı: +50 puan
scroe = score + 50;

// Bir meteor çarptı: bir can gitti
lives = lives - 1;

console.log("Oyuncu: " + playerName);
console.log("Puan:", score);
console.log("Kalan can:", lives);
console.log("Seviye bitti!") console.log("Tebrikler!");
```

```js
// Çözümüm:

```

### Görev 4 — Zor · Sıfırdan yazma · Spor: Basketbol skorbordu
Skorları sabitlerle hesapla, devre arasında `leftSide` ve `rightSide` değerlerini yer değiştir, üçüncü çeyrekte ev sahibinin skorunu güncelle.

```js
// Çözümüm:

```

---

## 6. Kendi notlarım

-
-
-
