/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//_________Steps_______
// 1. Define the function
// 2. Check if the array is empty
// 3. Initialize the largest element
// 4. Loop through the array
// 5. Update the largest element
// 6. Return the largest element


  
  function findLargestElement(numbers) {
 if (numbers.length===0){
return null;
}
  // Initialize the largest number with the first element of the array

    let largestNum = numbers[0];
  
 // Loop through the array starting from the second element

for(let i = 1; i<numbers.length;i++){
  if (numbers[i]>largestNum){
    largestNum = numbers[i]
   
  }
}
return largestNum;
 }
module.exports = findLargestElement;
