/**
 * greet(name):
 * - Accepts a "name" parameter of type "string"
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name: string): void {
  return console.log(`Hello ${name}`);
}

greet("Hamza")

let x = greet("Rashed");
console.log(x); 

function greet2(n:string) {
return `Hi ${n}`
}
let xy = greet2("abeer")
console.log(xy)
// console.log(greet2("abeer"))

/**
 * isOdd(n):
 * - Accepts a "n" parameter of type "number"
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n: number): boolean {
  
  return n % 2 !== 0; // replace false with what you see is fit
  }

 console.log(isOdd(7)); 
 console.log(isOdd(10));  
 console.log(isOdd(3));   
 console.log(isOdd(4));   

/**
 * oddsSmallerThan(n):
 * - Accepts a "n" parameter of type "number"
 * - returns the number of ODD numbers smaller than "n"
 *
 * e.g.
 * oddsSmallerThan(7) -> 3; // the odd numbers being 1, 3, 5
 * oddsSmallerThan(15) -> 7; // the odd numbers being 1, 3, 5, 7, 9, 11, 13
 */
function oddsSmallerThan(n: number): number {
  return Math.floor(n/2);
; // replace -1 with what you see is fit
}
 console.log(oddsSmallerThan(21));  
 console.log(oddsSmallerThan(12));   
 console.log(oddsSmallerThan(55));  

/**
 * squareOrDouble(n):
 * - Accepts a "n" parameter of type "number"
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32; // (16 * 2)
 * squareOrDouble(9) -> 81; // (9 ^ 2)
 */
function squareOrDouble(n: number): number {
  if (n % 2 === 0 ) {
    return n*n 
  } else {
    return n*2
  }
}
  
console.log(squareOrDouble(12));  
console.log(squareOrDouble(11));  

export { greet, isOdd, oddsSmallerThan, squareOrDouble };
