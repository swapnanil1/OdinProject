// let’s consider a sumOfTripledEvens function.
//It will:
// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
// do all the above using map filter reduce
function sumOfTripledEvens(list) {
  ``;
  let filteredList = list.filter((ele) => {
    if (ele % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });
  let sum = filteredList.reduce((total, currentElement) => {
    return total + currentElement * 3;
  }, 0);
  return sum;
}
arr = [1, 2, 3, 4, 5];
console.log(sumOfTripledEvens(arr));
