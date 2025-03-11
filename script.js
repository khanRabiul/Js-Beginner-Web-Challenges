//01 Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
	if (a + b < 100) {
		return true;
	} else {
		return false;
	}
}
const res = lessThan100(20, 50);
console.log(res);


//02 A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
/* function nameString(name){
	var b == "Edabit"
	var result == name + b
		return result
} */
// Solution 01
function nameString(name) {
	var b = "Edabit"
	var result = name.concat(b);
	return result;
}
//Or
// Solution 02
const nameString1 = name1 => `${name1}Edabit`;

/*03 In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs */
// Solution 01
function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}
console.log(animals(2, 2, 2));
// Or
// Solution 02
const animal = (chikens, cows, pigs) => (chikens * 2) + (cows * 4) + (pigs * 4);
console.log(animals(2, 2, 2));
// Solution 03
const anim = (chickens, cows, pigs) => chickens * 2 + (cows + pigs) * 4;

/*04 Create a function that takes length and width and finds the perimeter of a rectangle. */
function findPerimeter(length, width) {
	return 2 * (length + width);
}
console.log(findPerimeter(6, 4));

//05 Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
	return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10));

//06 Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSometing(a) {
	return "something" + " " + a;
}
console.log(giveMeSometing("is better than nothing"));
// Or if we want the first character of "a" is convertted to lower case

function giveMeSometingLowCase(a) {
	const formattedArg = a.charAt(0).toLowerCase() + a.slice(1);
	return "something " + formattedArg;
}
console.log(giveMeSometingLowCase("do something"));
/* 07
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */
const points = (twoPointers, threePointers) => (2 * twoPointers) + (3 * threePointers);
console.log(points(1, 1));
/* 08
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
/* 09
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

function swap(a, b) {
	// Use a temporary variable to hold the value of 'a'
	let temp = a;
	// Assign the value of 'b' to 'a'
	a = b;
	// Assign the temporary value (initial 'a') to 'b'
	b = temp;
	// Return an array containing the swapped values
	return [a, b];
}
console.log(swap(100, 200));

/*10  JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.

Make a function using the && operator.

Examples
and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false */
function and(a, b) {
	if (a === true && b === true) {
		console.log("true");
		return true;
	} else {
		console.log("false")
	};
	return false;
}
console.log(and("true", "false"));
console.log(and("true", "true"));

/* 11 JavaScript Practice Problem for ASSDI Batch-2

FizzBuzz
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz". */
const fizzBuzz = () => {
	for (i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};
fizzBuzz();

const fizzBuzzor = () => {
	for (i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			return ("FizzBuzz");
		} else if (i % 3 === 0) {
			return ("Fizz");
		} else if (i % 5 === 0) {
			return ("Buzz");
		} else {
			return (i);
		}
	}
};
//console.log(fizzBuzzor());

/*  12  Count Vowels
Write a function that counts the number of vowels in a given string. (Vowels are 'a', 'e', 'i', 'o', 'u').
*/

const countVowel = (str) => {
	const vowels = "aeiouAEIOU";
	let count = 0;
	for (const char of str) {
		if (vowels.includes(char)) {
			count++
		}
	}
	return count;
}
console.log(countVowel("Khan Rabiul Islma"));

// OR
const countVowels = (str) => {
	let count = 0;
	// converting input(str) to lowercase
	str = str.toLowerCase();
	for (let char of str) {
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			count++;
		}
	}
	return count;
}
console.log(countVowels("Suliman Khan"));

/*>>>>>>>>>>>>  13  Find Maximum Number
Write a function that finds the maximum number in an array of numbers.
 <<<<<<<<<<<<<<<*/

const maxNumber = [54, 45, 47, 45, 5, 540, 245, 21, 54, 1, 5, 4, 45];
const maxNumberMax = Math.max(...maxNumber);
console.log(maxNumberMax);

const maxNumberApply = Math.max.apply(null, maxNumber);
console.log(maxNumberApply);

const maxNumberLoop = (number) => {
	let max = number[0];
	for (let i = 0; i < number.length; i++) {
		if (number[i] > max) {
			max = number[i];
		}
	}
	return max;
};
console.log(maxNumberLoop(maxNumber));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
14 const array = [45, 4, 8, 87, 4, 89, 5, 4, 45];

const minNumber = Math.min(...array);
console.log(minNumber);
const maxNumber = Math.max(...array);
console.log(maxNumber);


const minNumber1 = Math.min.apply(null, array);
console.log(minNumber1); // Output: 4
const maxNumber1 = Math.max.apply(null, array);
console.log(maxNumber1);


let minNumber2 = array[0] //Assume the first element as initial minimum
for (let i = 1; i < array.length; i++) {
		if(array[i] < minNumber2) {  //if find any smaller number
				minNumber2 = array[i];  // stored it 
		}
}
console.log(minNumber2);

let maxNumber2 = array[0]; //Assume the first element as initial maximum
for (let i = 1; i < array.length; i++) {
		if (array[i] >  maxNumber2) { //if find any big number
				maxNumber2 = array[i];  // stored it 
		}
}
console.log(maxNumber2);

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Write a function that finds the sum of all elements in an array of numbers. */
const arraySum = [45, 584, 54, 5, 1, 245, 4, 421];
const arraySumFunction = (numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		// sum = sum + numbers[i];
		sum += numbers[i];
	}
	return sum;
}
const resArraySum = arraySumFunction(arraySum);
console.log(resArraySum);

/* 15 Reverse a String
Write a function that reverses a string without using the built-in reverse method
 */
const stringReverse = "Khan Rabiul Islam"
const stringReversed = (char) => {
	const charArray = char.toLowerCase().split("");
	const reversed = charArray.reverse();
	const joint = reversed.join("");
	return joint;
}
console.log(stringReversed(stringReverse));

/* 16 Write a function that removes duplicates from an array and returns a new array without duplicates. */

const duplicates = [4, 15, 452, 154, 4, 54, 4, 2, 2, 2, 77, 88, 77, 4];
const removeDuplicates = (array) => {
	let uniqueArray = [];
	array.forEach((element) => {
		if (!uniqueArray.includes(element)) {
			uniqueArray.push(element);
		}
	})
	return uniqueArray;
};
console.log(removeDuplicates(duplicates));

/* 17 Factorial
Write a function to calculate the factorial of a given number. The factorial of a non-negative integer 𝑛 is the product of all positive integers less than or equal to 𝑛.
 */
const getFactorial = (n) => {
	let fact = 1;
	for (let i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact;
}
console.log(getFactorial(4));


/* 18 Palindrome Check
Write a function to determine if a word or phrase is a palindrome (reads the same backward as forward). Ignore spaces and non-alphanumeric characters.
 */
const isPalindrome = (str) => {
	const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

	return cleanedStr === cleanedStr.split('').reverse().join('');
};
console.log(isPalindrome("mom"));
console.log(isPalindrome("Man"));


/* 19 
Create a function that returns true when num1 is equal to num2; otherwise return false. */

function isSameNum(num1, num2) {
	return num1 === num2;
}
console.log(isSameNum(4, 4));

/* 20 Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. */
const footballPoints = (wins, draws, losses) => {
	let pointsFromWins = wins * 3;
	let poinsFromDraws = draws * 1;
	let totalPoins = pointsFromWins + poinsFromDraws;
	return totalPoins;
}
console.log(footballPoints(4, 2, 0));

/* 21 Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them. */
const convetSeconds = (hours, minutes) => {
	return (hours * 60) * 60 + (minutes * 60);
	// return hours * (60 * 60) + (minutes * 60);

}
console.log(convetSeconds(1, 3));

/* 23 Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

Examples
isSeven(4) ➞ false

isSeven(9) ➞ false

isSeven(7) ➞ true */

function isSeven(x) {
	return x === 7 ? "true" : "false";

}
console.log(isSeven(4));

/* 24 Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true */

/* function profitableGamble(prob, prize, pay) {
	return prob * prize > pay ? "true" : "false";
}
console.log(profitableGamble(4,24,20)); */

const profitableGamble = (prob, prize, pay) => prob * prize > pay ? "true" : "false";
console.log(profitableGamble(4, 24, 20));


/* 25 Create a function that takes a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false" */

const boolToString = (flag) => flag.toString();
console.log(boolToString(false));
// Or not outside solution
const boolToNumber = (flag) => Number(flag);
console.log(boolToNumber(true));
console.log(boolToNumber(false));
console.log(boolToNumber(5));


/* 26 Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000
Notes
FPS stands for "frames per second" and it's the number of frames a computer screen shows every second */
const frames = (minutess, fps) => minutess * 60 * fps;
console.log(frames(10, 1));

/* 27 Check Prime Number
Write a function to determine if a number is prime (a number greater than 1 that has no positive divisors other than 1 and itself).
 */

/* Steps: 1. A prime number is a natural number greater than 1.
2. That has no positive divisors other than 1 and itself.
*/
function isPrime(num) {
	//3. Check if num is less than or equal to 1.
	//4. If it is, num is not a prime number.
	if (num <= 1) {
		return false;
	}
	//5. Check for factors from 2 up to the square root of num.
	//6. If any number in this range divides num evenly, then num is not a prime num
	//7. The reason we check up to the square root is that a larger factor if num
	//8. would have acorresponding smaller factor that has already ben checked.
	for (let i = 2; i <= Math.sqrt(num); i++) {
		//9. If num is divisible by i, it means i is a factor of num.
		//10. Hence, num is not a prime number
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(25));
console.log(isPrime(29));


/* 28  Fibonacci Series
Write a function to generate the Fibonacci sequence up to a certain number of terms.
 */
// Examples: Sum of the last 2 numbers will be the next number;
// 1 1 2 3 5 8 13 21 34.....
const generateFibonacci = (n) => {
	//Step 1: Initialize an array to hold the Fibonacci sequence
	let fibonacciSequence = [];
	//Step 2: Handle edge cases for n <= 0;
	if (n <= 0) {
		return fibonacciSequence;
	}
	//Step 3: Add the first term (0) if n >= 1;
	fibonacciSequence.push(0);
	//Step 4: Add the second term (1) if n >= 2;
	if (n > 1) {
		fibonacciSequence.push(1);
	}
	//Step 5: Generate the remaining terms up to n;
	for (let i = 2; i < n; i++) {
		//The next term is hte sum of the previous two terms
		const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
		fibonacciSequence.push(nextTerm);
	}
	return fibonacciSequence;
}
console.log(generateFibonacci(0));

/* 
29 Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true */

const defMakes10 = (a, b) => {
	if (a === 10 || b === 10 || a + b === 10) {
		return true;
	} else return false;
}
console.log(def(10, 0));
// Or
const makes10 = (a, b) => a === 10 || b === 10 || a + b === 10;


/* 30 A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

Examples
calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100
Notes
Distance will be a number greater than zero.
Return 100 if the calculated fuel turns out to be less than 100
 */

const calculateFuel = (distance) => {
	// Calculate the fuel required for the given distance
	const requiredFuel = distance * 10;
	// Ensure the fuel is at least 100 units
	return Math.max(requiredFuel, 100);
	// here if Math.max() returns the maximum value from(requiredFuel, the valu/100), So if required value is maximum then 100 it will return the required value. But if it is less then 100 is max value. Then the function will return the value.
}
console.log(calculateFuel(5));
console.log(calculateFuel(15));

// 31
/* Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
maxNum(3, 7) ➞ 7

maxNum(-1, 0) ➞ 0

maxNum(1000, 400) ➞ 1000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
 */
function maxNum(n1, n2) {
	if (n1 > n2) {
		return n1;
	} else if (n1 < n2) {
		return n2;
	}
}
console.log(maxNum(2, 2))
console.log(maxNum(2, 3))


// 32
/* Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215] */

// Hints: Two araguments will make an array 1st argument will be 1st element 2nd will be second

const makePair = (a, b) => {
	return [a, b];
}
console.log(makePair(51, 21));

//33 
/* Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

Examples
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If  */

const comp = (a, b) => {
	if (a.length === b.length) {
		return true;
	} else return false;
}
console.log(comp("AB", "CD"));
// Or
const comP = (a, b) => {
	return a.length === b.length;
}
console.log(comP("ABC", "DE"));

//34
/* Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibl */
const divisibleByFive = (n) => {
	return n % 5 === 0;
}
console.log(divisibleByFive(25));
console.log(divisibleByFive(26));

//35
/* Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.

Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */
const isStringEmpty = (string) => {
	return string === '';
}
console.log(isStringEmpty(""));
console.log(isStringEmpty("a"));


//36
/* Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

Examples
divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
 */
const divisibleBy100 = (num) => {
	return num % 100 === 0;
}
console.log(divisibleBy100(100))
console.log(divisibleBy100(1000))
console.log(divisibleBy100(98))

// 37
/* Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0
Notes
Check the Resources tab for info on recursion. */
const lengthOfString = (string) => {
	return string.length;
}
console.log(lengthOfString("Total Length of String"));
console.log(lengthOfString(""));

// 38
/* Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
// 98/7 = 14

dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25
Notes
a will always be greater than or equal to b. */
const dividesEvenly = (a, b) => {
	return a % b === 0;
};
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));

// 39
/* Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole.
All numbers will be positive. */
const stringToNumber = (string) => {
	// return parseInt(string);
	return (+string);
}
console.log(stringToNumber("5"))

// 40
/* Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1 */
const areaOfRectangle = (h, w) => {
	if (isNaN(h) || h <= 0 || isNaN(w) || w <= 0) {
		return -1;
	} else {
		return h * w;
	}
}
console.log(areaOfRectangle(4, 2));
console.log(areaOfRectangle(4, -5))

// 41
/* Create a function that evaluates an equation.

Examples
eq("1+2") ➞ 3

eq("6/(9-7)") ➞ 3

eq("3+2-4") ➞ 1
Notes
Don't print, return a value.
Return the value, not the equation.
The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information. */
function eq(expression) {
	try {
		// Evaluate the expression using eval()
		const result = eval(expression);
		return result;
	} catch (error) {
		return "Error: Invalid expression"; // Handle any 
		exceptions
	}
}

// Example usage:
console.log(eq("1+2")); // ➞ 3
console.log(eq("6/(9-7)")); // ➞ 3
console.log(eq("3+2-4")); // ➞ 1


// 42
/* Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0 */

const votes = {
	upvotes: 33,
	downvotes: 0
}

function votesCounts(vote) {
	return vote.upvotes - vote.downvotes;
}

console.log(votesCounts(votes));


// 43
/* Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

Examples
returnNegative(4) ➞ -4

returnNegative(15) ➞ -15

returnNegative(-4) ➞ -4

returnNegative(0) ➞ 0
 */

function retrunNegativeNumber(num) {
	return num >= 0 ? -num : num;
}
console.log(retrunNegativeNumber(5))
console.log(retrunNegativeNumber(-5))
console.log(retrunNegativeNumber(0))
console.log(retrunNegativeNumber(-0))

// Or
function negativeNumber(num) {
	if (num >= 0) { return -num; }
	else { return num; }
}
console.log(retrunNegativeNumber(5))
console.log(retrunNegativeNumber(0))
console.log(retrunNegativeNumber(-0))
console.log(retrunNegativeNumber(-5));

// 44
/* Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result. */

const numbers = [1, 2, 3, 4];

const reversed = [...numbers].reverse();
console.log(reversed);

// Or
function rev(num) {
	return num.reverse();
}
console.log(rev(numbers));
console.log(rev([10, 11, 12, 13, 14]));


// 45
/* Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

The person is at least 15 years old.
They have parental supervision.
The function accepts two parameters, age and isSupervised. Return a boolean.

Examples
acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true
Notes
age is a decimal.
isSupervised is a boolean. */

function acceptIntoMovie(age, isSupervised) {
	if (age >= 15) {
		return true;
	} else if (isSupervised) { // or (isSupervised === true)
		return true;
	} else {
		return false;
	}
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));

// Or
function acceptIntoMovie1(age, isSupervised) {
	if (age >= 15 || isSupervised) {
		return true;
	}
	else {
		return false;
	}
}

// Or
function acceptIntoMovie2(age, isSupervised) {
	return age >= 15 || isSupervised;
}

// Or

const acceptIntoMovie4 = (age, isSupervised) => {
	return age >= 15 || isSupervised;
}


// 46
/* 
Create a function that takes an angle in radians and returns the corresponding angle in degrees.

Examples
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163 */

const radiansToDegrees = (radins) => {
	return radins * (180 / Math.PI)
}

// 47
/* Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

Examples
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
 */

// Problem:
/* function incrementItems(arr) {
	for (let i = 0; i < array.length; i++)
		arr[i] === arr[i] + 1
	return array
} */

// Solution

function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] += 1;
	}
	return arr;
}

console.log(incrementItems([0, 1, 2, 3]))
console.log(incrementItems([2, 4, 6, 8]))
console.log(incrementItems([-1, -2, -3, -4]))


//48
/* A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

Examples
shouldServeDrinks(17, true) ➞ false

shouldServeDrinks(19, false) ➞ true
 */

const shouldServeDrinks = (age, onBreak) => {
	return age > 17 && onBreak;
}
console.log(shouldServeDrinks(18, true))
console.log(shouldServeDrinks(17, true))
console.log(shouldServeDrinks(25, false))


// 49
/* Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

You must calculate the number of people there will be in three decades from now.

The variable population is the world population now.
Assume that every month, someone gives birth to more people n.
Return the number of people there will be when the spaceship is complete.

Examples
futurePeople(256, 2) ➞ 976

futurePeople(3248, 6) ➞ 5408

futurePeople(5240, 3) ➞ 6320
Notes
Humanity's fate lies in your calculation. */

const futurePeople = (population, n) => {
	const months = 30 * 12; // Nunber of months in three decades

	const newPeople = months * n; // number of people added in the three decades

	const futurePopulation = population + newPeople; // 
	return futurePopulation;
}

console.log(futurePeople(200, 2))


// 50
/* Write a template string according to the following example:

Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack." */

const a = "John";
const b = "Joe";
const c = "Jack";

const format = (a, b, c) => {
	const template = `Their names were: ${a}, ${b}, and ${c}.`;
	return template;
};
console.log(format(a, b, c));


// 51
/* In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write five adder functions:

add2(x) should return 2 + x.
add3(x) should return 3 + x.
add5(x) should return 5 + x.
add7(x) should return 7 + x.
add11(x) should return 11 + x.
 */
/* Tips
Functions that consist only of a return can be written as a one-liner with an arrow function.

For example, the code:

function areSame(a, b) {
		return a == b;
}
Can be simplified to:

areSame = (a, b) => a == b;
Bonus
(a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().
 */

function add3(x) {
	return x + 3;
}

function add5(x) {
	return x + 5;
}

function add7(x) {
	return x + 7;
}

function add11(x) {
	return x + 1;
}

// Or

const add2 = x => x + 2;
const add3 = x => x + 3;
const add5 = x => x + 5;
const add7 = x => x + 7;
const add11 = x => x + 11;

console.log(add2(5));   // ➞ 7
console.log(add3(5));   // ➞ 8
console.log(add5(5));   // ➞ 10
console.log(add7(5));   // ➞ 12
console.log(add11(5));  // ➞ 16

// 52
/* Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

Examples
yeah_nope(true) ➞ "yeah"

yeah_nope(false) ➞ "nope" */

const yeahOrNope = (bool) => {
	return bool === true ? "yeah" : "Nope";
}

// 53
/* Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write a function that returns the boolean true if the given number is zero, the string "p */

/* Problem:
	function equilbrium (x) {
	if (x > 0) {
		return "positive"
	} else if (x < 0) {
		return "negative"
	} else {
		return true
	}
} */

// Solution 01
function equilbrium1(num) {
	if (num === 0) {
		return "true";
	} else if (num < 0) {
		return "negative";
	} else {
		return "positive";
	}
}

// Solution 02

function equilbrium2(num) {
	switch (true) {
		case num === 0:
			return "true";
			break;
		case num < 0:
			return "negative";
			break;
		case num > 0:
			return "positive";
		default:
			return "Invalid Number";
	}
}


// Solution 03
const equilbrium4 = (num) => {
	return num > 0 ? "positive" : num < 0 ? "negeative" : "true";
}
// Solution 04
const equilbrium3 = (num) => {
	return num > 0 ? "positive" : num < 0 ? "negeative" : num === 0 ? "true" : "Invalid Number";
}

// 54 
/* Given a string, return true if its length is even or false if the length is odd. */

const oddOrEven = (str) => {
	return str.length % 2 === 0 ? true : false;
}
console.log(oddOrEven("hello"));



// 55
/* You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2. */

const desArr = [1, 2, 3, 4, 5, 6]
const [x, y] = desArr;
console.log(a);
console.log(b);



// 56 ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]
const [a, b] = arr;
console.log(a)
console.log(b)


// 57 Inches to Feet
/* Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

Examples
inchesToFeet(324) ➞ 27

inchesToFeet(12) ➞ 1

inchesToFeet(36) ➞ 3
Notes
If inches are under 12, return 0.
12 inches = 1 foot. */

// Example 1:
const inchesToFeet = (inc) => {
	if (inc < 12) {
		return 0;
	} else {
		return inc / 12;
	}
}

// Or
// Example 2:
// const inchesToFeet = (inc) =>  inc < 12 ? 0 : inc / 12;

console.log(inchesToFeet(324))
// 27
console.log(inchesToFeet(3))
// 0


// 58 
//I'd Like a New Shade of Blue, Please
/* 
 I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

n is the number of square meters I can paint.
w and h are the widths and heights of a single wall in meters.
Examples
howManyWalls(100, 4, 5) ➞ 5

howManyWalls(10, 15, 12) ➞ 0

howManyWalls(41, 3, 6) ➞ 2
Notes
Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
All walls will have the same dimensions.
All numbers will be positive integers. */

const howManyWalls = (n, w, h) => {
	const walls = n / (w * h);
	return Math.floor(walls);
}

// 59 To the Power of 
/* Create a function that takes a base number and an exponent number and returns the calculation.

Examples
calculateExponent(5, 5) ➞ 3125

calculateExponent(10, 10) ➞ 10000000000

calculateExponent(3, 3) ➞ 27
Notes
All test inputs will be positive integers
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

const calculateExponent = (base, exponent) => {
	return Math.pow(base, exponent);
};

// Examples:
console.log(calculateExponent(5, 5)); // 3125
console.log(calculateExponent(10, 10)); // 10000000000
console.log(calculateExponent(3, 3)); // 27


// 60 Return the Last Element in an Array
/* Create a function that accepts an array and returns the last item in the array.

Examples
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

const lastArrayItem = (arr) => {
	return arr[arr.length - 1];
}


// 61  String and Number Conversions

/* You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

Examples:
intToString(4) ➞ "4"

stringToInt("4") ➞ 4

intToString(29348) ➞ "29348"
Notes
You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat. */

const intoString = (num) => {
	return num.toString();
}

const intoNum = (str) => {
	return parseInt(str)
}

// Or
const intToString = (num) => {
	return num + ""; // Concatenates the number with an empty string, turning it into a string
};

// Examples:
console.log(intToString(4)); // "4"
console.log(intToString(29348)); // "29348"


const stringToInt = (str) => {
	return str * 1; // Multiplies the string by 1, converting it to a number
};

// Examples:
console.log(stringToInt("4")); // 4
console.log(stringToInt("29348")); // 29348

// 62 Return a String as an Integer
/*Create a function that takes a string and returns it as an integer.*/
const stringInt = (str) => {
	return parseInt(str)
}
stringInt("6")
stringInt("1000")
stringInt("12")

// 63 Concatenate First and Last Name into One String
/* Given two strings, firstName and lastName, return a single string in the format "last, first".*/
const concatName = (firstName, lastName) => {
	return lastName.concat(" ", firstName)
}
concatName("First", "Last")
concatName("John", "Doe")
concatName("Mary", "Jane")

// 64 Buggy Code
/* The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.*/
const has_bugs = (buggy_code) => {
	if (buggy_code) {
		return 'sad days'
	} else {
		return `it's a good day`
	}
} 
has_bugs(true) 
has_bugs(false)