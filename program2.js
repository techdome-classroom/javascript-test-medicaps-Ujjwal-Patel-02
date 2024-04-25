function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  //Create a set to store the positive integers in the array
  const numSet = new Set();

  // Iterate through the array and add the positive integers to the set
  for (const num of nums) {
    if (num > 0) {
      numSet.add(num);
    }
  }

  // Initialize the smallest missing positive integer to 1
  let smallestMissing = 1;

  // Iterate from 1 to the maximum value in the set
  while (numSet.has(smallestMissing)) {
    smallestMissing++;
  }

  // Return the smallest missing positive integer
  return smallestMissing;
}


module.exports = smallestMissingPositiveInteger;
