//01 Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a,b) {
    if(a + b < 100){
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
function nameString(name){
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

/*04 Create a function that takes length and width and finds the perimeter of a rectangle. */
function findPerimeter(length, width){
	return 2 *(length + width);
}
console.log(findPerimeter(6,4));

//05 Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
	return (side1 + side2) - 1;	
}
console.log(nextEdge(8,10));

//06 Write a function that returns the string "something" joined with a space " " and the given argument a.
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
/* 07
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */
const points = (twoPointers, threePointers) => (2 * twoPointers) + (3 * threePointers);
console.log(points(1,1));
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
	if(a === true && b === true) {
		console.log("true");
		return true;
	} else {
		console.log("false")};
		return false;
}
console.log(and("true", "false"));
console.log(and("true", "true"));

/* 11 JavaScript Practice Problem for ASSDI Batch-2

FizzBuzz
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz". */
const fizzBuzz = () => {
	for (i = 1; i <=100; i++) {
		if (i % 3 === 0 && i % 5 === 0){
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
	for (i = 1; i <=100; i++) {
		if (i % 3 === 0 && i % 5 === 0){
			return ("FizzBuzz");
		} else if (i % 3 === 0) {
			return("Fizz");
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
		if (char === 'a' || char === 'e' || char === 'i'|| char === 'o' || char === 'u') {
			count++;
		}
	}
	return count;
}
console.log(countVowels("Suliman Khan"));

/*>>>>>>>>>>>>  13  Find Maximum Number
Write a function that finds the maximum number in an array of numbers.
 <<<<<<<<<<<<<<<*/

const maxNumber = [54,45,47,45,5,540,245,21,54,1,5,4,45];
const maxNumberMax = Math.max(...maxNumber);
console.log(maxNumberMax);

const maxNumberApply = Math.max.apply(null, maxNumber);
console.log(maxNumberApply);

const maxNumberLoop = (number) => {
	let max = number[0];
	for(let i = 0; i < number.length; i++){
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
const arraySum = [45,584,54,5,1,245,4,421];
const arraySumFunction = (numbers) => {
	let sum = 0;
	for (let i= 0; i < numbers.length; i++) {
		// sum = sum + numbers[i];
		sum +=numbers[i];
	}
	return sum;
}
const resArraySum = arraySumFunction(arraySum);
console.log(resArraySum);

/* 15 Reverse a String
Write a function that reverses a string without using the built-in reverse method
 */
const stringReverse = "Khan Rabiul Islam"
const stringReversed =(char) => {
	const charArray = char.toLowerCase().split("");
	const reversed = charArray.reverse();
	const joint = reversed.join("");
	return joint;
}
console.log(stringReversed(stringReverse));

/* 16 Write a function that removes duplicates from an array and returns a new array without duplicates. */

const duplicates = [4,15,452,154,4,54,4,2,2,2,77,88,77,4];
const removeDuplicates = (array) => {
	let uniqueArray = [];
	array.forEach((element)=> {
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
	const cleanedStr = str.replace(/[^A-Za-z0-9]/g,"").toLowerCase();

	return cleanedStr === cleanedStr.split('').reverse().join('');
};
console.log(isPalindrome("mom"));
console.log(isPalindrome("Man"));


/* 19 
Create a function that returns true when num1 is equal to num2; otherwise return false. */

function isSameNum (num1, num2) {
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
console.log(footballPoints(4,2,0));

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
	return x  === 7 ? "true":"false";
	
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
console.log(profitableGamble(4,24,20));


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
	for(let i = 2; i < n; i++) {
		//The next term is hte sum of the previous two terms
		const nextTerm = fibonacciSequence[i -1] + fibonacciSequence[i -2];
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
	} else  return false;
}
console.log(def(10,0));
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
console.log(maxNum(2,2))
console.log(maxNum(2,3))


// 32
/* Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215] */

// Hints: Two araguments will make an array 1st argument will be 1st element 2nd will be second

const makePair = (a, b) =>{
	return [a, b];
}
console.log(makePair(51,21));

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