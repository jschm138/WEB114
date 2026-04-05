// Jason Schmitz 4/4/2026 Week 5 Project- Using loops in space station
"use strict";

let fragileCount = 0;
let loadedCount = 0;
let inspectedCount = 0;
let crateInput = prompt(`How many crates need to be scanned?`);

if (crateInput === null) {
	console.log(`You hit cancel... exiting scan`);
} else {
	let numCrates = parseInt(crateInput)
	for (let crate = 1; crate <= numCrates; crate++) {
		if (crate % 5 === 0) {
			console.log(`Crate ${crate}: Handle with care`);
			fragileCount++;
		} else if (crate % 2 === 0) {
			console.log(`Crate ${crate}: Load crate`);
			loadedCount++;
		} else {
			console.log(`Crate ${crate}: Inspect crate`);
			inspectedCount++;
		}
	}
	
	console.log(`\nNumber of fragile crates: ${fragileCount}`);
	console.log(`Number of loaded crates: ${loadedCount}`);
	console.log(`Number of inspected crates: ${inspectedCount}`);
}
