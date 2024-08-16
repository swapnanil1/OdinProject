// Write a function to print prime numbers without using if statement
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// Using ? AKA Ternary Operator
function checkAge(age){
    return (age>18) ? true : false
}

// Using || Aka logical OR
function checkAge2(age){
    return age>18 || false
}

console.log(checkAge(20))
console.log(checkAge2(20))