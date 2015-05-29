/*  
  This function should accept an array as a parameter.
  It should return an object that contains the number of times each unique
    value showed up in the array.

  For instance, [ "a", "b", "c", "b" ] would produce { "a": 1, "b": 2, "c": 1 }
*/
var frequency = function(array) {
// create an empty object
  var obj = {}

//loop through array 
  for (i = 0; i < array.length; i++) {
//send the array [i] to object
    var itemName = array[i]
    obj[itemName] = obj[itemName] || 0
    obj[itemName] += 1
  }

  return obj
}

/*
  This function should accept an array as a parameter.
  It should return an array that contains the unique values that showed up in the array.
  (Order of the values in the resulting array is not important.)

  For instance, [ "a", "b", "c", "b" ] would produce [ "a", "b", "c" ].
*/
var unique = function(array) {
  var obj = {}
  var arr = []
  for (var i = 0; i < array.length; i++) {
    var itemName = array[i]
    obj[itemName] = itemName
}

// first approach - works

    for (var itemName in obj) {
     arr.push(obj[itemName])   
    }

// Object.keys(itemName) - but don't know how to use it
/*
arr = Object.keys(itemName)
*/
return arr
}



/*
  This function should accept a number as a parameter.
  It should return the value of the number times 3.
*/
var tripler = function(number) {
  return number * 3 
}

/*
  This function should accept an object as a parameter.
  It should return the object with all of its *values* tripled.
*/
var objectTripler = function(object) {
  for (var i in object) {
 //perform the function on object[i] to change the VALUE. The KEY stays unaffected
 //remember to set the key equal to a new value or nothing happens (i think)
    object[i] = tripler(object[i])
  }
  return object
}

/*
var test = {
  a: 2,
  b: 537,
}

console.log(objectTripler(test))
*/

/*
  This function should accept two objects as parameters.
  It should return a single object that combines the properties of both the parameters.
  If a property is on both objects, use the value of the property on the left.

  For instance, ({ a: 1, b: 2 } and { b: 9, c: 3 }) would produce { a: 1, b: 2, c: 3 }
*/
var extend = function(left, right) {
  //loop through left
  for (var pizza in left) {
  //send the contents of left to right
    right[pizza] = left[pizza]
  }
  //shitcan left (if desired)
  delete left
  //return right

  return right
}

/*
  This function should accept two parameters: an array of objects, and a string.
  It should return an array. The array should contain the values of 
    the named property in each object in the array.

  For instance, [{a: 1, b: 2}, {a: 3, c: 4}] for "a" would produce [1, 3]
*/
var pluck = function(arrayOfObjects, string) {
  var xavierSchool = []
  var giftedYoungster = 0
  //loop through the array, with objects as the var      
  for (var i = 0; i < arrayOfObjects.length; i++) {
    //loop each object
    for (var giftedYoungster in arrayOfObjects[i]) {
    //if it finds var string
      if (giftedYoungster === string) {
    //push that to a new array
        xavierSchool.push(arrayOfObjects[i][giftedYoungster])
      }
    }
  }
  return xavierSchool
}

