//ES5
// console.log(sum(5,3));

//Node.js
// var callSum = require('./sum.js');

// console.log("Cong 2 so: " + callSum(5,3));

//ES6
// import callSum from "./sum.js";
// console.log("Cong 2 so: " + callSum(5,3));

// import {sum as callSum} from "./sum.js";
// console.log("Cong 2 so: " + callSum(5,3));

// import {sum,sum2} from "./sum.js";
// console.log("Cong 2 so: " + sum(5,3));
// console.log("Cong 3 so: " + sum2(5,3,2));

import * as sumFunctions from "./sum.js";
console.log("Cong 2 so: " + sumFunctions.sum(5,3));
console.log("Cong 3 so: " + sumFunctions.sum2(5,3,2));