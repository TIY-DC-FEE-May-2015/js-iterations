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
  //loop through each array item
  for (var i = 0; i < array.length; i++) {
  //double it
  array[i] = doubler(array[i])
  }
  //return that
  return array
}

/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {
  return  numerator/denominator
}

/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {
  //loop thru array
  for (var i = 0; i < array.length; i++) {
    //divide array[i] by denominator
    array[i] = divide(array[i], denominator)
  }
  return array
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
  var total = 0

  for (var i = 0; i < array.length; i++) {
     total = sum(array[i], total)
  }
  return total
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
  //make a variable that will hold the lowest number so far
  var lowest = array[0]

  for (var i = 1; i < array.length; i++) {
     lowest = minimum(array[i], lowest)
  }

  return lowest
}


/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/
var endsInPeriod = function(string) {
  //make a var to hold the last charactr of string
  var chars = string.length - 1
  var last = string[chars]

  //check if it is a period
  if (last === ".") {
    return true
  } else {
    return false
  }
}

/*
  This functions hould accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {
//make an empty array
  var godsChosen = []

//loop through array
  for (i = 0; i < array.length; i += 1) {
//run endsinperiod on each array element

//push passing strings into a new array
    if (endsInPeriod(array[i])) {
      godsChosen.push(array[i])

    }

  }
  return godsChosen
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
    var holyTrinity = []

//loop through array
  for (i = 0; i < array.length; i += 1) {
//run multiple 3 on each array element

//push passing strings into a new array
    if (multiple3(array[i])) {
      holyTrinity.push(array[i])

    }

  }
  return holyTrinity
}







