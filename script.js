// This function takes an array of numbers and returns an array of the even numbers.
function findEvenNumbers(numbers) {
	const evenNumbers = [];
  
	// Loop through the array of numbers.
	for (let i = 0; i < numbers.length; i++) {
	  const num = parseFloat(numbers[i]);
  
	  // Check if the current value is not a number and skip it.
	  if (isNaN(num)) {
		console.log(`Invalid input: ${numbers[i]}. Skipping...`);
		continue;
	  }
  
	  // Check if the current number is even and add it to the evenNumbers array.
	  if (num % 2 === 0) {
		evenNumbers.push(num);
	  }
	}
  
	// If no even numbers were found, log a message and return null.
	if (evenNumbers.length === 0) {
	  console.log("No even numbers found.");
	  return null;
	} else {
	  // Otherwise, return the array of even numbers.
	  return evenNumbers;
	}
  }
  