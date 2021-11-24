// Object Declaration
let person = {
  name: "Mahbub",
  age: 25,
  gender: "Male",
}

// Object invokes
console.log(person.name);
console.log(person.age);
console.log(person["gender"]);


// An Object can contains different type of data like string,number,function & array
let carName = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "Black",
  start: function(){
    console.log("The car has start");
  },

  drive: function(){
    console.log("The car is driving");
  },

  stop: function(){
    console.log("The car is stop");
  },
}

// object function invokes
carName.start();