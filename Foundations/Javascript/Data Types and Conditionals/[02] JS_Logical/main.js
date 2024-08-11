/* There are 4 Logical Operator in javascript 
AND && 
OR  ||
NOT  !
Nullish Coalescing ??
*/

// ****************************************** OR
// Basic of OR | It is same for most languages
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (1 || 0) {
  // works just like if( true || false )
  console.log("truthy!");
}
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}
/* 
Extra Feature#1 of "OR" in Javascript , it always returns the first "truthly" value
result = value1 || value2 || value3;
if any value is true, it stops and returns the result of that value
if non of the values are true then it will return the last value

Things to Remember is that Null and UnDefined are falsy values
*/
console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)
// This is Powerfull and it can be used as if else
let firstName = "";
let lastName = "";
let nickName = "Rimo";
console.log(firstName || lastName || nickName || "Anonymous"); // if all fields were unknown then the person is Anonymous
/*
Extra Feature#2 of "OR" in javascript | Short-circuit evaluation
It means that "OR" processes its arguments until the first truthy value is reached, 
and then the value is returned immediately, without even touching the other argument.
Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
*/
true || console.log("not printed");
false || console.log("printed");

// ************************************************* AND
console.log(false && true); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
/*
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

Also somthing to NOTE is operator precedence of AND is greater than OR . 
This means doing 
a && b || c && d is same as (a&&b) || (c&&d) 
*/

// ************************************************** NOT !
/* 
NOT is pretty simple it just outputs the inverse
Theres is also a !! or double not . It's for converting something to boolean type`
*/
value = true;
let result = !value;
console.log(result); // false
console.log(!0); // true
console.log(!true); // false
// !! double not
console.log(!!null); // false
console.log(!!"non-empty string"); // true as empty strings are considered as false
