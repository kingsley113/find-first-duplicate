function findFirstDuplicate(arr) {
  // type your code here
  let prev;
  let dup = -1;

  for (const num of arr) {
    if (prev === num) {
      dup = num;
      break;
    }
    prev = num;
  }

  return dup;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// create a variable to assign the previously inspected number
// create a dup variable, set it to -1, this will return -1 if no duplicate is fount
// iterate through the array comparing the current index to the previous number
// if previous & current are = assign dup variable the number then break the loop
// return the dup number
// And a written explanation of your solution
