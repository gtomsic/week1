//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black'];

//CODE HERE
const colorCopy = faveColors.slice(0, 3);
console.log('Check Value colorCopy: ', colorCopy);
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('blue');
console.log('Check Value colorCopy: ', colorCopy);

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

//CODE HERE
const middleNums = numbers.slice(1, 4);
console.log('Middle Numbers: ', middleNums);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];
const answers = [];

// CODE HERE
for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push(`${bigOrSmallArray[i]}`);
  } else if (bigOrSmallArray[i] <= 100) {
    answers.push(`${bigOrSmallArray[i]}`);
  }
}

console.log('Bir or small array: ', bigOrSmallArray);
console.log('Problem answers: ', answers);
