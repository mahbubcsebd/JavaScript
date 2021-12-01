// Declare a array 
const cars = ["Saab","Volvo","BMW"];
const number = [1,2,3,4];
const points = new Array(10,20,30);
const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Orange";

// Accecing array element
console.log(cars[0]); //Saab
console.log(cars[1]); //Volvo
console.log(number[2]); //3
console.log(points[1]); //20


// To change array element
cars[2] = "Scania"; //BMW replace by Scania
console.log(cars) //[ 'Saab', 'Volvo', 'Scania' ]


//Array is one kind of object
console.log(typeof cars); //Object


//how to check arrays type
const single = {firstName:"John", lastName:"Doe", age:46};
console.log(Array.isArray(cars)); //true
console.log(Array.isArray(single)); //false


// how to check array length (by array method)
console.log(cars.length); //3

//Accessing the First Array Element
console.log(cars[0]); //Saab

//Accessing the Last Array Element
console.log(cars[cars.length-1]); //Scania


// Adding array element
fruits[3] = "Pineapple";
console.log(fruits); //[ 'Apple', 'Banana', 'Orange', 'Pineapple' ]
fruits[8] = "Grape";
console.log(fruits); //[ 'Apple', 'Banana', 'Orange', 'Pineapple', <4 empty items>, 'Grape' ] 
//In middle due index it makes empty holes


// To proper way of adding elemnt (Push & Unshift)
const persons = ["Shishir","Nayem","Sakil"];
persons.push("Shahadat"); //push added on last
console.log(persons); //[ 'Shishir', 'Nayem', 'Sakil', 'Shahadat' ]

persons.unshift("Sohel");
console.log(persons);