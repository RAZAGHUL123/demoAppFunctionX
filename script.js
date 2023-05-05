function findEvenNumbers(numbers) {
	const evenNumbers = [];
  
	for (let i = 0; i < numbers.length; i++) {
	  const num = parseFloat(numbers[i]);
  
	  if (isNaN(num)) {
		console.log(`Invalid input: ${numbers[i]}. Skipping...`);
		continue;
	  }
  
	  if (num % 2 === 0) {
		evenNumbers.push(num);
	  }
	}
  
	if (evenNumbers.length === 0) {
	  console.log("No valid even numbers entered.");
	  return null;
	} else {
	  return evenNumbers;
	}
  }
  
  function findLargest() {
	const numbers = document.getElementById("numbers").value.split(",");
	const evenNumbers = findEvenNumbers(numbers);
  
	if (evenNumbers !== null) {
	  const outputElement = document.getElementById("output");
	  outputElement.innerHTML = "<ul>";
	  for (let i = 0; i < evenNumbers.length; i++) {
		outputElement.innerHTML += `<li>${evenNumbers[i]}</li>`;
	  }
	  outputElement.innerHTML += "</ul>";
	}
  }
  