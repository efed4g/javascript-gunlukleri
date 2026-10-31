/*
  Ekstra (Zor): Asansör mü, merdiven mi?

  - Bulunduğun kat ile hedef aynıysa sadece "Zaten bu kattasın." yazılır.
  - Değilse kaç kat yukarı ya da aşağı gidileceği yazılır.
  - Merdiven: yukarı çıkarken kat başına 20 sn, aşağı inerken 12 sn.
  - Asansör bakımdaysa sadece merdiven süresi yazılır.
  - Değilse asansör önce senin katına gelir, sonra hedefe gider (kat başına 3 sn,
    kapılar toplam 20 sn). İki süre ve hangisinin daha hızlı olduğu yazılır.
*/

"use strict";

let currentFloor = 2;
let targetFloor = 7;
let elevatorFloor = 0;
let isUnderMaintenance = false;

if (currentFloor === targetFloor) {
  console.log("Zaten bu kattasın.");
} else {
  let diff = targetFloor > currentFloor ? targetFloor - currentFloor : currentFloor - targetFloor;
  let direction = targetFloor > currentFloor ? "yukarı" : "aşağı";
  console.log(`Hedef: ${diff} kat ${direction}.`);

  let secondsPerStair = direction === "yukarı" ? 20 : 12;
  let stairSeconds = diff * secondsPerStair;

  if (isUnderMaintenance) {
    console.log(`Asansör bakımda, merdivenle: ${stairSeconds} sn`);
  } else {
    let pickup = elevatorFloor > currentFloor ? elevatorFloor - currentFloor : currentFloor - elevatorFloor;

    let elevatorSeconds = pickup * 3;
    elevatorSeconds += diff * 3;
    elevatorSeconds += 20;

    console.log(`Asansörle: ${elevatorSeconds} sn`);
    console.log(`Merdivenle: ${stairSeconds} sn`);

    if (stairSeconds < elevatorSeconds) {
      console.log("Öneri: Merdiven daha hızlı!");
    } else if (stairSeconds === elevatorSeconds) {
      console.log("Öneri: İkisi de aynı, keyfine göre.");
    } else {
      console.log("Öneri: Asansörü bekle.");
    }
  }
}
