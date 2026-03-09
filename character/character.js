// Jason Schmitz 3/8/2026 Week 2- Use JS interactions to create a character

alert(`Welcome to the Adventure Realm! Let's create your hero!`);

const characterName = prompt(`What is your character's name?`, `Aragorn`);
const pet = prompt(`What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`, `wolf`);
const superpower = prompt(`What is ${characterName}'s special superpower?`, `flying`);
const likesFighting = confirm(`Does ${characterName} like fighting monsters? 
Click OK for YES
Click Cancel for NO`);

alert(`Gathering magic for [character's name]... almost ready!`);

alert(`====================================
Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
Monster fighter? ${likesFighting ? "Yes " : "No "}
In the land of Gondor, ${characterName} travels alongside 
his mighty ${pet}, wielding the incredible power of ${superpower}!\n
May the force be with you...
====================================`);
