// to check if age is between 14 and 90
let age = 23;
if (age >= 14 && age <= 90) {
  console.log("OK");
} else {
  console.log("NOT OK");
}
// to check if age is not between 14 and 90
age = 100;
if (age <= 14 || age >= 90) {
  // if (!(age >= 14 && age <= 90)) this is also valid
  console.log("OKB");
} else {
  console.log("NOT OKB");
}
