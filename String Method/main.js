// String length
let text = "My name is Mahbubur Rahman.";
let textLength = text.length;
console.log(textLength); //26


// Slice Method - slice(start, end)
let sliceText = text.slice(11,17);
console.log(sliceText);

let sliceNeg = text.slice(-15, -9);
console.log(sliceNeg);


// Substring - substring(start, end) => as like slice metho but it doesn't support negative index
let substingText = text.substring(11,26);
console.log(substingText);



// substr - substr(start, length) 
let name = text.substr(11,6);
console.log(name);
let fullName = text.substr(11);
console.log(fullName);



// Replacing ==> It's only replace first matching text
let arnobText = text.replace("Mahbubur", "Arnob");  //it's case sensitive
console.log(arnobText);

// To make Case Insensitive use /i flag
let arnob2 = text.replace(/mahBubur/i,"Arnob");  //Note that regular expressions are written without quotes.
console.log(arnob2);


// To replace all matches, use a regular expression with a /g flag (global match):
let newText = "Please visit Microsoft and Microsoft!";

let repAll = newText.replace(/Microsoft/g, "Google");
console.log(repAll);



// Converting to Upper Case
let toUpper = text.toUpperCase();
console.log(toUpper);

// Converting to Lower Case
let toLower = text.toLowerCase();
console.log(toLower);


// The concat() Method
// let firstName = "Mahbubur";
// let lastName = "Rahman";

// let fullName = firstName.concat(" ", lastName);


// trim() method
let alertText = "     Mahbubur Rahman     ";
let trimText = alertText.trim()
alert(trimText);

