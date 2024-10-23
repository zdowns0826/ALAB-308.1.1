// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
let a1
a1 = n1 % 5 == 0
console.log('This number is valid as a divisible by 5:', a1);
let a2
a2 = n2 % 5 == 0
console.log('This number is valid as a divisible by 5:', a2);
let a3
a3 = n3 % 5 == 0
console.log('This number is valid as a divisible by 5:', a3);
let a4
a4 = n4 % 5 == 0
console.log('This number is valid as a divisible by 5:', a4);
let result = n1 > n4
console.log('The first number is larger than the last number:', result);
let subtract = n2 - n1
console.log('The difference between the second number and the first number:', subtract);
let multi = (subtract * n3)
console.log('The result of the previous difference times the third number:', multi);
let num6 = multi % n4
console.log('The remainder of the multiplied answer divided by the fourth number:', num6)
let isOver25 = (n1 || n2 || n3 || n4) > 25
console.log('The four numbers are over 25:', isOver25);
let fiftyFiveMph = 30
let sixtyMph = 28
let seventyFiveMph = 23
let tripMiles = 1500
let budget = 175
let costPerGallon = 3
console.log('Trip at 55 mph');
let fiftyFiveGallons = tripMiles/fiftyFiveMph
console.log('The trip would take this many gallons at 55mph:', fiftyFiveGallons);
let fiftyFiveBudget = fiftyFiveGallons*costPerGallon
console.log('My budget is enough to cover the trip at 55mph:', (fiftyFiveBudget <= budget));
console.log('The trip will take this many hours at 55mph:', (tripMiles/55).toFixed(2));
console.log('Trip at 60 mph');
let sixtyGallons = tripMiles/sixtyMph
console.log('The trip would take this many gallons at 60mph:', sixtyGallons.toFixed(2));
let sixtyBudget = sixtyGallons*costPerGallon
console.log('My budget is enough to cover the trip at 60mph:', (sixtyBudget <= budget));
console.log('The trip will take this many hours at 60mph:', (tripMiles/60).toFixed(2));
console.log('Trip at 75 mph');
let seventyFiveGallons = tripMiles/seventyFiveMph
console.log('The trip would take this many gallons at 75mph:', seventyFiveGallons.toFixed(2));
let seventyFiveBudget = seventyFiveGallons*costPerGallon
console.log('My budget is enough to cover the trip at 75mph:', (seventyFiveBudget <= budget));
console.log('The trip will take this many hours at 75mph:', (tripMiles/75).toFixed(2));
console.log('The trip will make the most sense at 60mph');
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
// Finally, log the results.
// console.log(isValid);
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
//     ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
//     !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
//     (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);