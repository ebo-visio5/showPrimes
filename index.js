// // Assignment 5
// let programming = {
//   languages: ["JavaScript", "c++", "java"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.languages.push("Go");

// programming.difficulty = 7;

// delete programming.jokes;

// Object.assign(programming, { isFun: true })

// for (let language of programming.languages) {
//   console.log(language);
// }

// for (let programme in programming) {
//   console.log(programme);
// }

// for (let val in programming) {
// }
//   console.log(programming[val]);




// Assignment 3

function areEqual(a, b) {
        return (object.keys(a) == obect.keys(b)) ? true : false;
} 
let address1 = new ConstructorAddress();
let address2 = new ConstructorAddress();

function areSame(a, b) {
    return (a == b) ? true : false;
}

 












// So in the last exercise we used the object literal syntax to initialize an address object.
//  In this exercise, I want you to initialize an address object,
//   first using a factory function and then using a constructor function.
//    So your exercise is to write two different functions, one is a factory function, 
//    the other is a constructor function, to initialize an address object.

// // Assignment no 2 
// function factoryFunction(Address) {
//   return {
//       street: "56 Mbari Street",
//       city: "Owerri",
//       zip: 1891,
//   };
// }

// const check = factoryFunction()
// console.log(check)

// function ConstructorFunction(Address) {
//   this.street = "56 Mbari Sreet";
//   this.city = "Owerri";
//   this.zip = 1891;  
// }

// const see = ConstructorFunction()
// console.log(see)





















// // assignment in exercise one
// let address = {
//   street: "56 mbari street",
//   city: "owerri",
//   zip: 1891,
// }

// function showAddress(property) {
//   for (let property in address) {
//       console.log(address[property]);
//   }
// }
// showAddress()









// function showPrimes(limit) {

//     for (let i = 2; i < limit; i++) {
//       if (!isPrime(i)) continue;
        
//        console.log(i);  
//     }
//   }
  
//   function isPrime(i) {
//     for (let a = 2; a < i; a++) {
//       if ( i % a == 0) return false;
//     }
//     return true;
//   }

//   showPrimes(75)