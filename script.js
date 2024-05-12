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
function nameString(name){
	var b = "Edabit"
	var result = name.concat(b);
  	return result;
}
//Or
 const nameString1 = name1 => `${name1}Edabit`;