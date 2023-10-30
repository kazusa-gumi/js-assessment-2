// Create a numerical array
let numArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
 // Print the array
 console.log(numbers); 


// Create a numerical array
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
// Sort the array in ascending order
numbers.sort((a, b) => a - b);
 // Print the array
 console.log(numbers); 
 
// // Remove 8 and 31 from the array
// numbers = numbers.filter(num => num !== 8 && num !== 31); 

// // Sort the array in ascending order
// numbers.sort((a, b) => a - b);
// // Print the array
// console.log(numbers); 



// Function definition for sequentialSearch
// Accepts two arguments: an array and a target value
// Returns the index of target value if found in the array, otherwise returns -1
// function sequentialSearch(array, target) {
//     // Iterate over each element in the array
//     for(let i = 0; i < array.length; i++) {
//       // If the current array element is equal to the target,
//       // return the index i 
//       if(array[i] === target) {
//         return i;
//       }
//     }
//     // If target is not found in the array after iterating over all elements,
//     // return -1 
//     return -1;
//   }
  
//   // Array of numbers to search in
//   let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

//   // Test 1: Search for the target 8 in the array
//   // Since 8 is present in the array, the index of 8 (which is 2) will be printed
//   console.log(sequentialSearch(numbers, 8));  
  
//   // Test 2: Search for target 100 in the array
//   // Since 100 is not present in the array, -1 will be printed 
//   console.log(sequentialSearch(numbers, 100));
  
//   // Print the array
//   console.log(numbers); 

// Accepts two arguments: an array and a target value
// Returns the index of target value if found in the array, otherwise returns -1
// function binarySearch(array, target) {
//     // Define the left and right boundaries of the search
//     let left = 0;
//     let right = array.length - 1;
  
//     // Continue searching as long as there is a valid subarray to search within
//     while (left <= right) {
//       // Calculate the mid index
//       let mid = Math.floor((left + right) / 2);
  
//       // If the middle element is the target, return its index
//       if (array[mid] === target) {
//         return mid;
//       } 
//       // If the middle element is less than the target, discard the left half
//       else if (array[mid] < target) {
//         left = mid + 1;
//       } 
//       // If the middle element is greater than the target, discard the right half
//       else {
//         right = mid - 1;
//       }
//     }
  
//     // If the search completes without finding the target, return -1
//     return -1;
//   }
  
//   // Array of numbers to search in 
//   let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  
//   // Test 2: Search for target 100 in the array. 
//   // Since 100 is not present in the array, -1 will be printed 
//   console.log(binarySearch(numbers, 100));