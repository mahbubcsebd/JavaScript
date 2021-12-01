// sort() ==> method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// reverse() ==> reverse array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.reverse()); //[ 'Mango', 'Apple', 'Orange', 'Banana' ]




// Numeric Sort Lower to Upper
const points = [0,100,1,5,25,10];
const toUpper = points.sort(function (a,b){
  return a - b;
});

console.log(toUpper);// [ 0, 1, 5, 10, 25, 100 ]

// Numeric Sort Upper to Lower
const toLower = points.sort(function(a, b){
  return b - a;
});

console.log(toLower); //[ 100, 25, 10, 5, 1, 0 ]


// Find the Max Value
let pointsMax = `The Max value of points array is ${toLower[0]}.`;
console.log(pointsMax); //The Max value of points array is 100.


// Find the Min Value
let pointsMin = `The Min Value of points array is ${toLower[toLower.length-1]}.`;
console.log(pointsMin); //The Min Value of points array is 0.



//Sorting an Array in Random Order
let pointsRandom = points.sort(function(a, b){
  return 0.5 - Math.random();  
});

console.log(pointsRandom);


// Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

const yearSorting = cars.sort(function(a, b){return a.year - b.year});
console.log(yearSorting);
