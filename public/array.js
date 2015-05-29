/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {
  return number*2
}
doubler(2);
doubler(3.3);
doubler(0);
/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {
  for (var i = 0; i < array.length; i++) {
      array[i]= array[i]*2
  };
  return array
}
arrayDoubler([1, 2, 3]);
arrayDoubler([0, -5, 10, 3]);
arrayDoubler([]);
/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
 return numerator/denominator
}
divide(6, 3);
divide(3, 1);
divide(5, 1);
/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
  for (var i = 0; i < array.length; i++) {
      array[i]= array[i]/denominator
  };
  return array
}
arrayDivide([3, 6, 9, 12], 2);
arrayDivide([1, 2, 3], 1);
arrayDivide([], 4);
/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {
  return a+b 
}
sum(6, 3);
sum(3.3, 1.1);
sum(5, 1);
/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(array) {
  var sum=0
  for (var i = 0; i < array.length; i++) {
      sum= sum + array[i]
  };
  return sum
}
arraySum([1, 2, 3, 4, 5]);
arraySum([10, 0, -10]);
arraySum([]);

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {
  if(a<b){
    return a
  }
  else{
    return b
  }
}
minimum(6, 3);
minimum(3.3, 1.1);
minimum(5, 1);
/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {
  if(array.length === 0){
    return undefined
  }
  else{
    var smallestNumber= Infinity 
    for (var i = 0; i < array.length; i++){
        if(array[i]< smallestNumber){
          smallestNumber=array[i]
        }
    }
    return smallestNumber
  }
}
arrayMinimum([1, 2, 3, 4, 5]);
arrayMinimum([10, 0, -10]);
arrayMinimum([]);

/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
 if(string[string.length-1] === "."){
  return true
  }
else{
  return false
  }
}
endsInPeriod("hello, world");
endsInPeriod("hello, world.");
endsInPeriod("what. now?");

/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
  var newArray=[];
  for( var i=0; i<array.length; i++){
    if( endsInPeriod(array[i]) === true){
    newArray.push(array[i])
    }
  }
  return newArray
}
arrayEndsInPeriod(["yep.", "nope", "ok.", "nah"]);
arrayEndsInPeriod(["you", "are", "correct."]);

/*
  This function should accept a number as a parameter.
  It should return true if the number is a multiple of 3.
  Otherwise, it should return false.
*/
var multiple3 = function(number) {
 if( number%3 === 0)
  return true
else
  return false 
}

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {

  var newArray=[]
  for (var i = 0; i < array.length; i++){
    if( multiple3(array[i]) === true){
      newArray.push(array[i])
    }
  }
  return newArray
}







