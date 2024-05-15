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

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
	return (side1 + side2) - 1;	
}
console.log(nextEdge(8,10));

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSometing (a) {
	return "something" + " " + a;
}
console.log(giveMeSometing("is better than nothing"));
// Or if we want the first character of "a" is convertted to lower case

function giveMeSometingLowCase (a) {
	const formattedArg = a.charAt(0).toLowerCase() + a.slice(1);
	return "something " + formattedArg;
}
console.log(giveMeSometingLowCase("do something"));
/* 
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */
const points = (twoPointers, threePointers) => (2 * twoPointers) + (3 * threePointers);
console.log(points(1,1));
/* 
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true */

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true;
	} else {
		return false;
	}
};
console.log(lessThanOrEqualToZero(-1));
console.log(lessThanOrEqualToZero(5));
/* 
Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
Examples
swap(100, 200) ➞ [200, 100]

swap(44, 33) ➞ [33, 44]

swap(21, 12) ➞ [12, 21] */

function swap (a,b) {
	 // Use a temporary variable to hold the value of 'a'
	let temp = a;
	 // Assign the value of 'b' to 'a'
	a = b;
	 // Assign the temporary value (initial 'a') to 'b'
	b = temp;
	 // Return an array containing the swapped values
	return [a,b];
}
console.log(swap(100,200));