const cars = ["Saab","Volvo","BMW"];

// Convert array to string ==> toString()
let carsString = cars.toString();
console.log(carsString);

// join() method work same as toString but it also define separator each element
console.log(cars.join(" * "));
console.log(cars.join(" , "));
console.log(cars.join(" - "));
console.log(cars.join(" # "));

// Delete array element (Pop & Shift method)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let delFruits = fruits.pop(); //delete last element & stored in a variable deleted elemnet
console.log(delFruits); //Mango
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]

// Shift
const persons = ["Mahbub", "Nayem", "Shahadat", "Shishir"];
let delPerson = persons.shift();
console.log(delPerson); //Mahbub
console.log(persons); //[ 'Nayem', 'Shahadat', 'Shishir' ]



// Splice(2,1) ==> Splice method can add & delete array element [here first value 2 is define the position where new element should be added& & second parameter 1 is how many elements should be removed]
const animal = ["Tiger", "Lion", "Horse", "Zebra"];
animal.splice(2,0, "Cow","Cat"); //add 2 new element without remove
console.log(animal); //[ 'Tiger', 'Lion', 'Cow', 'Cat', 'Horse', 'Zebra' ]

animal.splice(0,2) // first 2 element Tiger & Lion should be removed
console.log(animal); // [ 'Cow', 'Cat', 'Horse', 'Zebra' ]



// Slice(2,4) ==> method slices out a piece of an array into a new array.
const myFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myFav = myFruits.slice(2,4); //started after 2 & end before 4 number elemnts
console.log(myFav); //  [ 'Lemon', 'Apple' ]
const myFav2 = myFruits.slice(2); // all element slice without first 2 element



//Concate/ Merge Array
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3);
console.log(myChildren); // ['Cecilie', 'Lone', 'Emil',    'Tobias',  'Linus',   'Robin',  'Morgan']