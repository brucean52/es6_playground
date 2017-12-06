//import addStuff, {subtract, multiply} from './calc';
//
//console.log("5 + 7 =", addStuff(5,7));
//console.log("8 - 9 =", subtract(8,9));
//console.log("4 * 4 =", multiply(4,4));


import * as math from './calc';
console.log("math:", math);
console.log("5 + 7 =", math.default(5,7));
console.log("8 - 9 =", math.subtract(8,9));
console.log("4 * 4 =", math.multiply(4,4));