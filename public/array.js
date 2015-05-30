/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {
 
 return number * 2
}

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {

  for (var i=0; i <array.length; i++){
    
    array[i] = doubler(array[i])

  }
  
  return array
}
/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
  return numerator / denominator;
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
  var random = []
  for(var i = 0; i < array.length; i++){

    var x = (array[i]) / denominator
    random.push(x)
  }
  return random
}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {
 return a + b 
}
/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(array) {
  var addition = 0
  for(var i = 0; i < array.length; i++){
    addition = sum(array[i], addition)
  }
  return addition
}

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {
  if (a > b){
    return b;
  }
  return a;
 }
/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {
  var min = array[0]
  for (var i=0; i < array.length; i++){
    min=minimum (array[i], min)
  }
  
  return min
}

/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
  var lastChar = string.substring (string.length-1);
  if (lastChar === "."){
    return true;
  }
  return false;
}

  /*
  This functions should accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
  var period =[];
  for(var i=0; i<array.length; i++){
    if (endsInPeriod(array[i])) {
      period.push(array[i])
    }  
  }
  return period
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
  return false
}

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {
   var multiple =[];
   for(var i=0; i<array.length; i++) {
      if (multiple3(array[i])) {
        multiple.push(array[i]);
      } 
   }
   return multiple
}


