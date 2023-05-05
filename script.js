function findLargestNumber(numbers) {
	let largest = -Infinity;
  
	for (let i = 0; i < numbers.length; i++) {
	  const num = parseFloat(numbers[i]);
  
	  if (isNaN(num)) {
		console.log(`Invalid input: ${numbers[i]}. Skipping...`);
		continue;
	  }
  
	  if (num > largest) {
		largest = num;
	  }
	}
  
	if (largest === -Infinity) {
	  console.log("No valid numbers entered.");
	  return null;
	} else {
	  return largest;
	}
  }
  
  function findLargest() {
	const numbers = document.getElementById("numbers").value.split(",");
	const largestNumber = findLargestNumber(numbers);
	
	if (largestNumber !== null) {
	  document.getElementById("output").innerHTML = `The largest number is ${largestNumber}.`;
	}
  }
  