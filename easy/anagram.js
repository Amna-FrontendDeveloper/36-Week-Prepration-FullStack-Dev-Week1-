/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 // Step 1: Convert both strings to lowercase (to make it case-insensitive)
 const sortedStr1 = str1.toLowerCase().split('').sort().join('');
 const sortedStr2 = str2.toLowerCase().split('').sort().join('');
 

 
 // Step 2: Compare the sorted strings
 return sortedStr1 === sortedStr2; // If both sorted strings are the same, return true
 }

module.exports = isAnagram;





// Why O(n log n)?
// 1. Sorting Algorithm: The sort() method in JavaScript typically uses a sorting algorithm like QuickSort or MergeSort, which have an average time complexity of O(n log n).
// 2. String Length: The number of operations performed by the sorting algorithm depends on the length of the string (n). As the string length increases, the number of operations grows logarithmically.
// 3. n log n Complexity: The product of the string length (n) and the logarithmic factor (log n) results in a time complexity of O(n log n).

// Impact on Performance
// - For short strings, the O(n log n) complexity may not be noticeable.
// - For longer strings, the sorting operation can become a performance bottleneck.

// Alternative Approaches
// - Using a hash table or frequency counter can reduce the time complexity to O(n), making it more efficient for large strings.