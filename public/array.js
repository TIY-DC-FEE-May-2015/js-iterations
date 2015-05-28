/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {
    var double = number * 2

  return double
}

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {
  
  for (var i in array) {

    array[i] = array[i] * 2

  }

  return array;
  
}

/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
  var divided = numerator/denominator;

  return divided
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
  
  for (var i in array) {
    array[i] = array[i]/denominator;
  }

  return array

}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {

  return a + b;
  
}

/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(array) {

  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum = array[i] + sum
  }
  return sum
}

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {

  if (a < b) {
    return a
  }

  return b
  
}

/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {
    
    if (array.length === 0) {
        
        return undefined
        
    }
    
    else {
        var min = array[0]
    
        for(var i = 0; i < array.length; i++) {
        
            if (array[i] < min) {
                min = array[i]
            }
        }
    return min
    }

}

/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {

    var split = string.split("")
    
    var last = split.length - 1
    
    if (split[last] === ".") {
        return true
    }
    
    return false
  
}

/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
  var arrayPeriod = []
  
  for (var i = 0; i < array.length; i++) {
      
      var word = endsInPeriod(array[i])
      
      if ( word === true) {
          
          arrayPeriod.push(array[i])
      }

  }
  return arrayPeriod 
  
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
  
  var numMultiple3 = []
  
  for (var i = 0; i < array.length; i++) {
      
      var number = multiple3(array[i]) 
      
      if( number === true) {
          
          numMultiple3.push(array[i])
      }
  }
  
  return numMultiple3

}







