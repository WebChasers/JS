const name = "Ali"
let age = 20
// string interpolation
//console.log(`Name of the user ${name} and age of this user ${age}`);
// string is object key value pair and also give length 
// const user = new String("JavaScript")
// console.log(user[0])
// console.log(user.__proto__) // showing object
// console.log(user.length)
// console.log(user.charAt(7))
// console.log(user.indexOf('S'))

// string methods 
// SUBSET OR SPLIT
const city = "London-UK"
const newCity = city.substring(0,6)
console.log(newCity);
// same slice but can be used for reverse string like
const sliceCity = city.slice(-8,5)
console.log(sliceCity)
// .trim() spaces will be removed whitespaces charactersc
console.log(city.replace('-UK', '-en'))
//url.includes() now spilt
const para = "Hello tom i have a good news for you - Be ready.";
console.log(para.split('-'));

