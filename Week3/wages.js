"use strict"

// Jason Schmitz 3/22/2026 Week 3 Calculate Weekly Earnings

let hourlyWage = Number(prompt(`What is your hourly wage?`));

let isWageCorrect = confirm(`You entered $${hourlyWage} per hour.  Is that Correct? 
Click OK for yes
Click Cancel for no`);

let hoursWorked  = Number(prompt(`How many hours did you work this week?`).trim());

let isHoursCorrect = confirm(`You entered ${hoursWorked} hours.  Is that Correct? 
Click OK for yes
Click Cancel for no`);

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * .1;
let netPay = grossPay - taxes;

console.log(`You earned $${netPay.toFixed(2)} this week.`);

if (hoursWorked > 40)
{
	console.log(`You worked overtime this week!`);
}
else if (hoursWorked === 40)
{
	console.log(`You worked exactly 40 hours.`);
}
else
{
	console.log(`No overtime this week.`);
}

if (netPay > 800)
{
	console.log(`Great paycheck this week!`);
}
else
{
	console.log(`Keep working toward a bigger paycheck!`);
}
