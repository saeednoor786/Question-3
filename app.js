"use strict";
//Q:3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
const personName = "sAeednOor";
console.log(`Name in UpperCase:${personName.toUpperCase()}`);
console.log(`Name in LowerCase:${personName.toLowerCase()}`);
// for titel case
// let step1 = personName.split(" ");
// let step2 = personName.map(word => word.charAT(0).toUpperCase() + word.substr(1).toLowerCase());
// let step3 = personName.join(" ");
// console.log(`name in LowerCase ${step3}`);
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
