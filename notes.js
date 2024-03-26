// ! Day 2 JS => 19/02/2024

// ? Variable?
// * Variable is container or box to store, retrive and update values,
// * num = 10, name = "Pugazharasan C", place = "Chennai", favFood = "Biryani"
// ? Things needed to declare a variable?
// * var, let, const are the keywords to declare variable
// ? What is keyword ?
// * Keywords are reserved words in javascript
// ? How to declare variable using keywords?
// * <keyword> <variable name> = <value>
// * var num = 10;
// * let name = "Pugazharasan C";
// * const place = "Chennai";
// ? what is datatype?
// * Data type is the type of data stored in variable
// ? What are all the datatypes we have in javascript?
// * Number => All the numeric values like 10, 20, 30, 12.34, 45.67, 1e7, (NaN)
// * String => All the values inside a single quote or double quote is string, like "Hello", 'World', 'Pugazharasan C', '12345'
// * Boolean => true or false
// * Undefined => undefined, value is absent  Example : variable is declared but value is not assigned
// * Object => All the values enclosed in {},[], etc.., like {}, [], {name: "Pugazharasan C", age: 20} {} is object, like {name: "Pugazharasan C", age: 20}
// * Function => All the functions etc.., like function() {}
// * Symbol => All the unique values
// ? How to check the datatype of a variable?
// * typeof <variable name>
// ? What is NaN?
// * NaN is a special numeric value, it is not equal to any other numeric value, it is equal to itself
// ? What is Infinity?
// * Infinity is a special numeric value, it is greater than any other numeric value, it is equal to itself
// ? What is undefined?
// * undefined is a special value, it is not equal to any other value, it is equal to itself, if we try to access any values which we dont have, we will get undefined
// ? Browser JS vs Node JS?
// * Browser JS is a javascript code which we used to run inside browser using browser javascript engine, it has two extra objects which are document and window
// * Node JS is a javascript code which we used to run inside nodejs application, it has only one extra object which is global
// ? Window vs Document?
// * Window is a global object which is used to access browser javascript engine, it has all the informations and global variables, function and objects, document is one of the object inside window
// * document is an object. it is used interact with the html document or html web page. using this we can make our website more interactive and functional to the user.

// ? Copy by value vs Copy by reference?
// * Copy by value => All the values are copied by value, it means if we change the value of one variable, it will not affect the other variable
// * Copy by reference => All the values are copied by reference, it means if we change the value of one variable, it will affect the other variable

// ! Day 3 JS => 20/02/2024
// ? What is Array?
// * Array is used to store multiple values in a single variable using []
// * Example : let arr = [10, 20, 30, 40, 50]
// ? How to access individual elements?
// * By using index values we can access each value in an array
// * Index is usually starting from 0 and goes till the length of the array -1
// * Index of the first value is always 0 in javascript
// * Example : arr[0] => 10
//     =>      0,  1,  2,  3,  4
// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0]); // 10
// console.log(arr[1]); // 20
// console.log(arr[2]); // 30
// console.log(arr[3]); // 40
// console.log(arr[4]); // 50
// console.log(arr[5]); // undefined
// ? How to find the length of the array?
// * arr.length => it will return the length of the array, it will always be one more than the index of the last value in the array
// console.log(arr.length); // 5
// ? Is it possible to have negative index?
// * If we give any negative value to the index, it will return undefined
// console.log(arr[-1]); // undefined
// let arr = [10, 20, 30, 40, 50];
// console.log(arr, arr.length); // [10, 20, 30, 40, 50] 5
// arr[arr.length] = 60; => arr[5] = 60; => arr = [10, 20, 30, 40, 50, 60];
// arr[arr.length] = 60;
// console.log(arr, arr.length); // [10, 20, 30, 40, 50, 60] 6
// console.log(arr.push(70, 80, 90, 100)); // 10
// console.log(arr, arr.length); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] 10
// * remove values from the end of the array
// console.log(arr.pop()); // 100
// console.log(arr, arr.length); // [10, 20, 30, 40, 50, 60, 70, 80, 90] 9
// * adding the values in the front of the array
// arr.unshift(5); // 6
// console.log(arr, arr.length); // [5, 10, 20, 30, 40, 50] 6
// * remove values from the front of the array
// console.log(arr.shift()); // 10
// console.log(arr, arr.length); // [ 20, 30, 40, 50] 4
// let arr = [10, 20, 30, 40, 50];
// * indexOf
// console.log(arr.indexOf(30)); // 2
// console.log(arr.indexOf(60)); // -1

// ? What is Object?
// * Object is a collection of key value pairs enclosed in {}
// =>              0 , 1,  2,  3,  4
// let studentMark = [90, 87, 95, 93, 86];
// * Example :
// let studentMark = {
//   tamil: 90,
//   english: 87,
//   maths: 95,
//   science: 93,
//   social: 86,
// };
// console.log(studentMark); // {tamil: 90, english: 87, maths: 95, science: 93, social: 86}
// console.log(studentMark.tamil); // 90
// console.log(studentMark.english); // 87
// console.log(studentMark["maths"]); // 95
// console.log(studentMark["science"]); // 93
// console.log(studentMark["social"]); // 86

// let subject = "science";
// studentMark[subject] ; => studentMark["science"] ; 93
// console.log(studentMark[subject]); // 93
// console.log(studentMark.subject); // undefined
// subject = "social";
// console.log(studentMark[subject]); // 86
// console.log(studentMark.subject); // undefined

// const keys = Object.keys(studentMark);
// const values = Object.values(studentMark);

// console.log(keys);
// console.log(values);

// ? Hoisting in javascript?
// * Hoisting is a javascript feature which is used to declare variable using var and function before using them, it is a default behaviour of javascript
// * let and const are not hoisted
// * Hoisting means to move the declaration of variable or function to the top of the scope
// ? What is scope?
// * Scope is the area where we can access the variable or function

// ? What is block scope?
// * Block scope is the area where we can access the variable or function inside the block
// * Example :
// {
//     const a = 10;
//     console.log(a); // 10
// }
// console.log(a); // ReferenceError: a is not defined

// ! Day 4 JS => 21/02/2024
// ? What is function?
// * A named block of code which can be reused multiple times
// * we can pass the inputs to the functon as arguements and it will return the output, both are optional

// ! Day 5 JS => 22/02/2024
// //var vs let vs const
// // ? block scoping?
// // * block scoping means the lifetime of the variable declared is within the block.
// //spread & rest operators
// // array & object destructure
// //Object property shorthand
// // Template literals
// //Arrow functions

// Spread Operator   => ...
// Rest Operator    => ...

// let arr = [1, 2];
// let arr1 = [3, 4];

// // let combined = [arr, arr1];
// let combined1 = [...arr, ...arr1];
// // [...[1, 2], ...[3, 4]], [1, 2, 3, 4];
// console.log(arr); // console.log(arr) => console.log([1, 2]) => [1, 2]
// console.log(...arr); // console.log(...arr) => console.log(...[1, 2]) => console.log(1, 2) => 1, 2
// console.log(1, 2);

// ! Day 7 JS => 26/02/2024
// ? map method => it will return a new array with the result of calling a provided function on every element in the calling array
// * Example :
// * let arr = [1, 2, 3, 4, 5];
// * <result array> = <calling array> .map(function)
// * let result = arr.map((val) => val * val);
// * console.log(result); // [1, 4 ,9, 16, 25]
// * Map method has only one arguement, which is a function. that function takes maximum of 3 arguements
// * first one is value
// * second one is index
// * third one is array
// * Example :
// * let result = arr.map((val, index, arr) => {
// *   console.log(val, index, arr);
// * }
// * result array size will be same as calling array size

// ? filter method => it will return a new array with all elements that pass the test implemented by the provided function
// * Example :
// * let arr = [1, 2, 3, 4, 5];
// * let result = arr.filter((val) => val % 2 === 0);
// * console.log(result); // [2, 4]
// * Filter method has only one arguement, which is a function. that function takes maximum of 3 arguements
// * first one is value
// * second one is index
// * third one is array
// * Example :
// * let result = arr.filter((val, index, arr) => {
// *   console.log(val, index, arr);
// * }
// * result array size will be less than or equal to the calling array size, it can be zero

// ? reduce method => it will return a single value after iterating through all elements in the array and performed the operation provided in the function
// * The Last value returned by the function will be the final result
// * Example :
// * let arr = [1, 2, 3, 4, 5];
// * let result = arr.reduce((accum, curr) => accum + curr);
// * console.log(result); // 15
// * Reduce method has maximum 2 arguements, first one is a function, second one is a initial value
// * Example :
// * let result = arr.reduce((accum, curr) => accum + curr, 0);
// * console.log(result); // 15
// * Example :
// * let result = arr.reduce((accum, curr) => accum + curr, 10);
// * console.log(result); // 25
// * maximum number of arguements to the provided function is 4
// * first one is the accumulator
// * second one is the current value
// * third one is the index of the current value
// * fourth one is the array
// * Example :
// * let result = arr.reduce((accum, curr, index, arr) => {
  // *   console.log(accum, curr, index, arr);
// * }
// * if the default value is not provided for accumulator, the first value of the array will be the accumulator.
// * if the default value is provided for accumulator, the first value of the array will be the current value.
// * if you wanna change the output type of the reduce, you have to change the default value
// * The result can be a Number, String, Object or anything... it is based on the accumulator
