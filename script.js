//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a,b) {
    if(a + b < 100){
        return true;
    } else {
        return false;
    }
}
const res = lessThan100(20, 50);
console.log(res);


//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
/* function nameString(name){
	var b == "Edabit"
	var result == name + b
  	return result
} */
// Solution 01
function nameString(name){
	var b = "Edabit"
	var result = name.concat(b);
  	return result;
}
//Or
// Solution 02
 const nameString1 = name1 => `${name1}Edabit`;

 /* In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

 chickens = 2 legs
 cows = 4 legs
 pigs = 4 legs */
// Solution 01
 function animals (chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
 }
 console.log(animals(2,2,2));
// Or
// Solution 02
const animal = (chikens, cows, pigs) => (chikens * 2) + (cows * 4) + (pigs * 4);
 console.log(animals(2,2,2));
// Solution 03
const anim = (chickens, cows, pigs) => chickens * 2 + (cows + pigs) * 4;

/* Create a function that takes length and width and finds the perimeter of a rectangle. */
function findPerimeter(length, width){
	return 2 *(length + width);
}
console.log(findPerimeter(6,4));
