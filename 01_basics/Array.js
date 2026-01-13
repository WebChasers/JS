//Array
// shallow copies of an object whose properties share the same references changing will change in original array too.
// deep copy don't share the same reference 





const arr = [0,1,2,3,4,5]
const football = ["NY","CR"]
const heros = new Array("NY","CR7")
//  arr.pop()
// arr.push(5)
arr.unshift(9)
arr.shift()
// console.log(arr);
//now to see value includes in array or not so return boolean 
// console.log(arr.includes(9));
// console.log(arr.indexOf(3))

//to bind and convert in string

const newArray = arr.join()
// console.log(typeof(newArray));
// slice, splice 

console.log(" A:", arr );
const an1 = arr.slice(1,3);
console.log(" B:",an1);
console.log("------------------------")

console.log(" A:", arr );
const ar2 = arr.splice(1,3);
console.log(" C:", arr );
console.log(" B:",ar2);

//splice change the  original array too with range u have defined 

//.concat
const fName = ["Asad","Ali"]
const lName = ["Khan" , "Sheikh"]

const users = fName.concat(lName)
// console.log(users);
const all_newusers = [...fName,...lName]
//console.log(all_newusers); .flat too for one all arrays 

console.log(Array.isArray("HelloWorld"));
console.log(Array.from("HelloWorld"));//from will convert in array

console.log(Array.from({name:"Nasir"}));

//is from of


