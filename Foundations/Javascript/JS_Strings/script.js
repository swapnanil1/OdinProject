// Readme
// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

let APLHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = APLHABETS.length; // Returns Length
let char = APLHABETS.charAt(0); // Returns char
let charCodeAt = APLHABETS.charCodeAt(0); //Returns ASCII Value of the char
let at = APLHABETS.at(2); // same as charAt() but allows the use of negative indexes while charAt() do not.
let property_access = APLHABETS[5]; // unpredictable and not recommended | It Makes strings looks like arrays but they ar not | If no Char present , returns undefined vs CharAt() that returns empty string
console.log(length);
console.log(char);
console.log(charCodeAt);
console.log(at);
console.log(property_access);
// *************************************************** Extracting String Parts
// slice(start, end)
// substring(start, end)
// substr(start, length)
let EXTRACTION = "Apple, Banana, Kiwi";
//                0123456789012345678;
//
let slice = EXTRACTION.slice(7, 13);
let neg_slice = EXTRACTION.slice(-12);
let neg_slice2 = EXTRACTION.slice(-12, -6);
let substring = EXTRACTION.substring(7, 13); // same as slice but,
let substring2 = EXTRACTION.substring(-4, 7); // difference is that start and end values less than 0 are treated as 0 in substring() | here -4 becomes 0
let substring3 = EXTRACTION.substring(7); // it substr after the index
let substr = EXTRACTION.substr(7, 6); // substr has length so it slice upto next 6 digit
console.log(slice);
console.log(neg_slice);
console.log(neg_slice2);
console.log(substring);
console.log(substring2);
console.log(substring3);
console.log(substr);

// ************************************************* Uppercase , lowercase , concat , trim
let firstName = " Swapnanil";
let lastName = "Chakraborty ";
let upper = firstName.toUpperCase();
let lower = firstName.toLowerCase();
let fullName = firstName.concat(" " + lastName);
let fullName_trimed = fullName.trim(); // trim remove extra whites spaces from the sides of the string NOT BETWEEN
let fullName_trimStart = fullName.trimStart(); // trims only from the start | similarly theres also a trimend()
console.log(upper);
console.log(lower);
console.log(fullName);
console.log(fullName_trimed);

// ************************************************* repeat , replace , replaceAll
let line = "I love Dogs";
let repeat = line.repeat(2);
let replace = line.replace("Dogs", "Cats"); // replaces only the first occurence | also is case-sensitive | /i flag can make it insensitive
let replace_i_flag = line.replace(/dOgS/i, "Kitten"); // using /dOgS/i makes it insensitive
let replaceAll = repeat.replaceAll("Dogs", "Cats");
console.log(repeat);
console.log(replace);
console.log(replace_i_flag);
console.log(replaceAll);

// ************************************************** split ,
// Split - A func to convert strings to Arrays on basis of a seperator
let colors = "Red , Green , Yellow";
const arrColor = colors.split(",");
console.log(arrColor);
