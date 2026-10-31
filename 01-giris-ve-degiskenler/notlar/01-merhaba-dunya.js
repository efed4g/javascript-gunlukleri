// =====================================================================
// 01 - Merhaba Dünya: console.log, komutlar ve yorumlar
// Notlar: javascript-giris-ve-degiskenler.md → 1.1, 1.2, 1.3, 1.4
// Çalıştır: node 01-giris-ve-degiskenler/notlar/01-merhaba-dunya.js
// =====================================================================


// ---------------------------------------------------------------------
// 1) İlk program
// ---------------------------------------------------------------------
console.log("Merhaba Dünya"); // tırnak içindeki metni terminale yazar

console.log("1. Sabah uyandım.");        // önce bu satır çalışır
console.log("2. Kahvaltı yaptım.");      // sonra bu
console.log("3. Kod yazmaya başladım."); // en son bu; her console.log yeni satıra yazar

console.log("=== Tanışma Kartı ===");
console.log("Ad: Deniz");
console.log("Hedef: Junior Yazılımcı Olmak");
console.log("=============================");


// ---------------------------------------------------------------------
// 2) console.log ile metin, sayı ve hesap
// ---------------------------------------------------------------------
console.log("2 + 3"); // tırnak içinde: metin olarak AYNEN yazar
console.log(2 + 3);   // tırnaksız: önce hesaplar (5), sonra yazar
console.log(7 / 2);   // bölmenin sonucu ondalıklı olabilir

console.log("Toplam:", 10 + 5);          // virgül: "Toplam:" ile 15'in arasına boşluk koyar
console.log("Ortalama:", (80 + 90) / 2); // parantez önce: 170, sonra 170 / 2
console.log(6 * 4 - 2);                  // önce çarpma (24), sonra çıkarma (22)
console.log(10 - 15);                    // sonuç negatif olabilir

console.log("Ali" + "Veli");       // + iki metni yapıştırır, arada boşluk YOK
console.log("Ali" + " " + "Veli"); // boşluğu kendimiz bir metin olarak ekledik
console.log("Sonuç: " + 12);       // metin + sayı → yan yana yazar
// TODO: Virgül kullanarak "Alan: 12" yazdır. 12'yi doğrudan yazma, 3 * 4 ile hesaplat.
console.log("Alan:", 3 * 4);


// ---------------------------------------------------------------------
// 3) Komutlar ve noktalı virgül
// ---------------------------------------------------------------------
console.log("Komut 1"); // birinci komut, ; ile bitti
console.log("Komut 2"); // ikinci komut
console.log("Komut 3"); // üçüncü komut

console.log("Aynı"); console.log("satırda"); // ; sayesinde aynı satırda iki komut
console.log("Noktalı virgülsüz")             // satır sonu örtük ; sayıldı, çalışır
console.log("ama önerilmez");                // biz yine de her zaman ; koyacağız

console.log("Sabah rutini:");   // başlık


      console.log("- Uyan");    // girinti ve boş satırlar sonucu değiştirmez
// TODO: "- Yüzünü yıka" yazdıran komutu tam buraya ekle (sıra önemli!)
console.log("- Yüzünü yıka");
console.log("- Kahvaltı yap");  // son adım

// HATA ÖRNEĞİ (çalıştırırsan SyntaxError verir, o yüzden yorumda):
// console.log("Merhaba") console.log("Dünya");
// Notum: Aynı satırda iki komut varsa aralarına ; ŞART. JS soldan sağa okur;
// ; sadece en sona konunca ilk komutun nerede bittiğini anlayamıyor → hata.
console.log("Merhaba"); console.log("Dünya"); // düzeltilmiş hali


// ---------------------------------------------------------------------
// 4) Yorum satırları
// ---------------------------------------------------------------------
// Bu program bir selam yazdırır   ← bu satırın tamamı yorum, çalışmaz
console.log("Selam!"); // satır sonu yorumu: kod çalışır, bu açıklama çalışmaz

/*
   Program: Ders programı
   Yazan: Deniz
   Amaç: Pazartesi derslerini yazdırmak
*/
console.log("Pazartesi: Matematik"); // ilk ders
console.log("Pazartesi: Fizik");     // ikinci ders

console.log("Isınma turu");     // çalışır
// console.log("Sprint");       // yoruma alındı: çalışmaz
/* console.log("Mola"); */      // bu da yoruma alındı
console.log("Soğuma");          // çalışır
// TODO: "Esneme" yazdıran bir satır ekle ve yanına ne yaptığını anlatan bir satır sonu yorumu yaz
console.log("Esneme"); // terminale Esneme yazdırır
