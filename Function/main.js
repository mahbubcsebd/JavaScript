// function with parameter
function myFunction(name,year){
  console.log("my name is " + name + " & I am " + year + " years old");
}
// function call with argument
myFunction("Mahbub", 25);
myFunction("Sakib", 20);



// common multiplication function & return value
function multiplication(num1,num2){
  return num1 * num2;
}

// here return value store in a variable & print on console
let result = multiplication(7,5);
console.log("The result of multiplication is " + result);



//Function variables are Block Scope variables so we can same variable in differents function
let x = "Outside the Function";
console.log(x);

function carFunc1(carName){
  let x = carName;
  console.log(x);
}

function carFunc2(carName){
  let x = carName;
  console.log(x);
}

carFunc1("Volvo");
carFunc2("BMW");

// we can't access x outside the function
console.log(x);//this x is outside of function

