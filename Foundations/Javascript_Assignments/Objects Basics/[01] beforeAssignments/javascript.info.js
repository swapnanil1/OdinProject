// Hello Object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// CHECK FOR EMPTINESS
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(object) {
  for (key in object) {
    return false;
  }
  return true;
}
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

// SUM OBJECT PROPERTIES
// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum.
// Should be 390 in the example above.
let sum = 0;
for (key in salaries) {
  sum = sum + salaries[key];
}
alert(`salary sum ${sum}`);

// MULTIPLY NUMERIC PROPERTIES BY 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For EXAMPLE
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

function multiplyNumeric(object) {
  for (ele in object) {
    if (object[ele] == NaN) {
      continue;
    } else {
      object[ele] = object[ele] * 2;
    }
  }
}
alert(menu.height);
