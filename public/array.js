/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/

var doubler = function(number) {
    number*= 2
    return number;
  }
  

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(arr) {
    for(var i = 0; i< arr.length; i++) {
        arr[i] = doubler(arr[i]);
        
    }
  return arr
}

/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
      number = (numerator/denominator)
      return number;
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(arr, denominator) {
  for(var i = 0; i< arr.length; i++) {
        arr[i] = (arr[i])/(denominator);
        
    }
  return arr
}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {
     number = (a + b)
     return number  
}

/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(arr) {
  var total = 0
 for(var i = 0; i< arr.length; i++) {
        
        total += arr[i];
    }
  return total;
} 


/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {
 if (a > b)
  return b
}

/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {
var lowest = array[0]
for (var i = 0; i < array.length; i += 1) {
   if (array[i] < lowest) { lowest = array[i];}
   if (array.length < 0) { lowest = undefined}
}
return lowest
}
/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
  var words = "text." 
if ( "text.".substr(-1) === "." ) {return true} else{return false}; 
 }
/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
var wordbox = []
}

/*
  This function should accept a number as a parameter.
  It should return true if the number is a multiple of 3.
  Otherwise, it should return false.
*/
var multiple3 = function(number) {
if (number % 3 === 0) {
     return true
}
else {return false}
}
 

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {
  var years = array[0]
  if (years % 3 === 0){
      return years
  }
  
}







