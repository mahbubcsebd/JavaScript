// forEach(value, index, array) ==> 

const numbers = [2,9,7,45,4,37,96];
numbers.forEach(myFunc);

function myFunc(value,index,array){
  let a = value;
  let b = index;
  console.log(`${b} number index value is ${a}`);
}


// map(value,index,array) ==> map method makes a new array
const points = [6,3,9,5,7];
let newPoints = points.map(myMap);

function myMap(value,index,array){
  return value * 2;
}

console.log(newPoints); //[ 12, 6, 18, 10, 14 ]

// filter(value,index,array) ==> filter method also make new array with  which achived specific condition

const result = [22,66,96,7,28,65,12,88];

let filterResult = result.filter(myFilter);

function myFilter(value,index,array){
  return value > 30;
}

console.log(filterResult); //[ 66, 96, 65, 88 ]

// reduce(total,value,index,array) ==> it makes a single value of full array (sum) & stored a new variable

const numberss = [45, 4, 9, 16, 25];
let sum = numberss.reduce(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum); //99


// indexOf() ==> find specific array element index ()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let appleIndex = fruits.indexOf("Apple");

console.log(appleIndex); // 0 (By default it Show first founded apple index);

// lastIndexOf()
let lastApple = fruits.lastIndexOf("Apple");
console.log(lastApple); // 2 



// includes() ==>