// Jason Schmitz 4/12/2026 Week 6 project-- Calculate average weekly gas

// Step 1 & 2: Declare two global variables
let entryCount = 0;
let gasTotal = 0;

// MAIN PROGRAM
// Step 3: Prompt for name
let username = prompt("Enter your name:");

// Step 4 & 5: Validate name
if (username === null) {
	alert("You cancelled the name prompt.");
} else if (username.trim() === "") {
	alert("You must type a name.");
} else {
	// Step 6: Call calcGasAvg()
	let average = calcGasAvg();

	// Step 7: Check if user hit cancel
	if (average === null) {
		alert("You cancelled entering gas totals.");
	} else {
		// Step 8: Output Phase
		let message = "";
		if (entryCount === 0) {
			alert("No gas totals were entered.");
		} else if (entryCount === 1) {
			message = `${username}, your gas total is $${gasTotal.toFixed(2)}.`;
		} else {
			message = `${username}, your average weekly gas bill is $${average.toFixed(2)}.`;
		}
		
		alert(message);
	
		let entryMessage = "";
		if (entryCount === 1) {
			entryMessage = "You entered 1 gas total.";
		} else {
			entryMessage = `You entered ${entryCount} gas totals.`;
		}
		alert(entryMessage);
	}
}


// calcGasAvg function
function calcGasAvg() {
	// Step 9: Prompt user for gas total
	let input;
	input = prompt("Enter your first week's gas total. Enter -1 when you are done.");
	
	// Step 10: Check if user hits cancel
	if (input === null) return null;
	
	// Step 11: Change string input into a float
	let weeklyGas = parseFloat(input);

    // Step 12: While loop logic
    while (weeklyGas !== -1) {
		if (isNaN(weeklyGas)) {
			alert("Please enter a valid number.");
			input = prompt("Enter your first week's gas total. Enter -1 when done.");
			if (input === null) return null;
			weeklyGas = parseFloat(input);
		} else {
			gasTotal += weeklyGas;
			entryCount++;

			input = prompt("Enter your next week's gas total. Enter -1 when done.");
			if (input === null) return null;
			weeklyGas = parseFloat(input);
		}
	}
	
	// Step 13: Calculate average
    let average = 0;
    if (entryCount > 0) {
		average = gasTotal / entryCount;
    }
    
	return average;
	}
