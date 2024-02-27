// function isOdd(num) {
//     return num % 2 !== 0;
// }
// function isEven(num) {
//     return num % 2 === 0;
// }
// function sumofnthnumber(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//             sum += i;
//     }
//     return sum;
// }
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }
// console.log(sumofnthnumber(6));



class Ship {
    constructor(shipType, radarRange, sonarRange, speedInKnots, fuelType) {
      this.shipType = shipType;
      this.radarRange = radarRange;
      this.sonarRange = sonarRange;
      this.speedInKnots = speedInKnots;
      this.fuelType = fuelType;
    }
  }
  
  const myShip = new Ship("Frigate", 100, 50, 25, "Nuclear");
  console.log(myShip);
  