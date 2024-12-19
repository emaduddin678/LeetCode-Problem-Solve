function b() {
  return function () {
    console.log("Hello World!");
  };
}

// b()();

// let a = b();
// a();

// built in higher order functions are: "map, filter, reduce, foreach, some, every, sort etc common iterators "

// example 1 without higher order function
var numbers = [1, 2, 3];
var resultP = [];
for (let i = 0; i < numbers.length; i++) {
  resultP.push(numbers[i] * 2);
}
// console.log(result);

// example 1 with higher order function

var result = numbers.map((v) => v * 2);
// console.log(result, "25");

function myMap(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

const myArray = myMap(numbers, (v) => {
  return v * 2;
});
// console.log(myArray);

// higher order function is that function which return a function or take a function as arguments or both.

