function addNumbers() {
	// Get the input values
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);

	// Call the add function and store the result
	var result = add(num1, num2);

	// Display the result in the output div
	document.getElementById("output").innerHTML = "The result is: " + result;
}

function add(a, b) {
	// Add the two numbers and return the result
	return a + b;
}
