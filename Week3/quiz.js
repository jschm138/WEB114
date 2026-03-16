// Jason Schmitz 3/15/2026 Week 3 Extra Credit Assignment - Create a question quiz game

alert(`Welcome to Supernatural Quiz!`);

let answer = prompt(`What city in Kansas was Sam and Dean from in Supernatural?`);
if (answer.toLowerCase() === `lawrence`)
{
	console.log(`Correct!!! Sam and Dean was from Lawrence Kansas!`);	
}
else
{
	console.log(`Incorrect.... They were from Lawrence Kansas!`);
}

let answer2 = prompt(`What model was their 1967 Chevrolet car that Dean refered to as "Baby"?`);
if (answer2.toLowerCase() === `impala`)
{
	console.log(`Correct!!! This 1967 Chevrolet Impala would turn out to be the most important car -- no, the most important object -- in pretty much the whole universe!`);	
}
else
{
	console.log(`Incorrect.... Baby was a 1967 Chevrolet Impala!`);
}

let answer3 = parseInt(prompt(`How many seasons did Supernatural air?`));
if (answer3 === 15)
{
	console.log(`Correct!!! but there has been rumors of another season!`);	
}
else
{
	console.log(`Incorrect.... There were 15 amazing seasons!`);
}

let answer4 = prompt(`What is Deans favorite dessert?`);
if (answer4.toLowerCase() === `pie`)
{
	console.log(`Correct!!! Love me some pie!`);	
}
else
{
	console.log(`Incorrect.... Don't forget the pie Sammy!`);
}
