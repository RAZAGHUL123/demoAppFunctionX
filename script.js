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
	  console.log("No even numbers found.");
	  return null;
	} else {
	  return evenNumbers;
	}
  }
  
  function findEven() {
	const numbers = document.getElementById("numbers").value.split(",");
	const evenNumbers = findEvenNumbers(numbers);
  
	if (evenNumbers !== null) {
	  let outputHtml = "The even numbers are:<br>";
	  for (let i = 0; i < evenNumbers.length; i++) {
		outputHtml += `${evenNumbers[i]}<br>`;
	  }
	  document.getElementById("output").innerHTML = outputHtml;
	}
  }
  