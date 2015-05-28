/*
  This function should accept an array as a parameter.
  It should return an object that contains the number of times each unique
    value showed up in the array.

  For instance, [ "a", "b", "c", "b" ] would produce { "a": 1, "b": 2, "c": 1 }
*/
var frequency = function(array) {
  var freqObj = {};

  for (var i = 0; i < array.length; i++) {
    if (freqObj[array[i]] >= 1) {
      freqObj[array[i]] += 1;
    } else {
      freqObj[array[i]] = 1;
    }
  }
  return freqObj;
}

/*
  This function should accept an array as a parameter.
  It should return an array that contains the unique values that showed up in the array.
  (Order of the values in the resulting array is not important.)

  For instance, [ "a", "b", "c", "b" ] would produce [ "a", "b", "c" ].
*/
var unique = function(array) {
    var newArray = [];
    var origLength = array.length;

    for(var i = 0; i < origLength; i++) {
      var testIfExists = newArray.indexOf(array[i]);
      if (testIfExists === -1) {
        newArray.push(array[i]);
      }
    }
    return newArray;
}

/*
  This function should accept a number as a parameter.
  It should return the value of the number times 3.
*/
var tripler = function(number) {
  return number * 3;
}

/*
  This function should accept an object as a parameter.
  It should return the object with all of its *values* tripled.
*/
var objectTripler = function(object) {
    for (var prop in object) {
      object[prop] = object[prop] * 3;
    }
    return object;
  }

/*
  This function should accept two objects as parameters.
  It should return a single object that combines the properties of both the parameters.
  If a property is on both objects, use the value of the property on the left.

  For instance, ({ a: 1, b: 2 } and { b: 9, c: 3 }) would produce { a: 1, b: 2, c: 3 }
*/
var extend = function(left, right) {
  
  //test if object(left) has prop
  for (var prop in right) {
    if (left.hasOwnProperty(prop) === false) {
      left[prop] = right[prop];
    }
  }
  return left;
}

/*
  This function should accept two parameters: an array of objects, and a string.
  It should return an array. The array should contain the values of 
    the named property in each object in the array.

  For instance, [{a: 1, b: 2}, {a: 3, c: 4}] for "a" would produce [1, 3]
*/
var pluck = function(arrayOfObjects, string) {
  var answer = [];
  
  //loop through each object in the array
  for (var i= 0; i < arrayOfObjects.length; i++) {
    var currentObj = arrayOfObjects[i];
    
    answer.push(currentObj[string]);
  }

  return answer;
}
