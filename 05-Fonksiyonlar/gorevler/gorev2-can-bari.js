/*
  Görev 2: Can barı

  takeDamage fonksiyonunu değiştir:
  - hasar verilmezse 10 olsun
  - can asla 0'ın altına inmesin
  - fonksiyon yazdırmasın, yeni canı döndürsün
*/

"use strict";

let playerHealth = 100;

function takeDamage(health, damage = 10) {
  let newHealth = health - damage;
  console.log("Kalan can: " + newHealth);
}

console.log("Kalan can: " + takeDamage(playerHealth));
console.log("Kalan can: " + takeDamage(playerHealth, 30));
console.log("Kalan can: + takeDamage(playerHealth, 150");
