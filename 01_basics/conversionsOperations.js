let score = "45abc" //it its mixed 

// console.log(typeof (score))


let res = Number(score) 
// console.log(typeof(res))
// console.log(res) //what it will print NaN ?

//converting in Number
// so if "50" => number 50
// if "546abc" => NaN
// true => 1;  false => 0;

let isLoggedIn = 1
let boolisLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(boolisLoggedIn))

// 1>true 0>false "">false "srefre">true

let value = 5
let negValue = -value
// console.log(typeof(negValue))
let str1 = "Hello" , str2 =" World"
let str3 = str1 + str2
// console.log(str3)
// 1. Postfix (x++) → "Use First, Update Later"
let counter  = 19
let newCounter = counter++
console.log(newCounter)
console.log(counter)

// Prefix (++x) → "Update First, Use Later"
let oldCounter = 19
let count = ++oldCounter

console.log(count)
console.log(oldCounter)
