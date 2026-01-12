"use strict"; // treat all JS code as newer version
//alert(3+3) using nodejs not browser 

//symbol => for unique
//number ,string , bigInt , null , boolean
// object
// typeof  to know which type of varibale is this 
// but typeof null is only bug which shows object

// data types can be primitive and non primitive
//primitive (call by value) copy changes not an address. 
// string, Number, Boolean ,null , undefined , symbol , BigInt(big values )


const id = symbol('2');
const anotherId = symbol('2 ')
console.log(id === anotherId);  // so in this return values will not be same

// mostly unique things like IDs 
// Reference (Non-primitive) return types mostly object
// from memory directly using address can be called
// arrays , objects , functions 
const arr = ["Ali", "Ahmed", "Anus"]
//objects
let obj = {
    name:"Nasir",
    age:22
}

const my = function arr(){
    console.log("helloworld");
}


//Memory:
// stack (Primitive) ,              heap(non-primitive)
// \> original value ki copy            \> value ka reference  


let a = "Hello To B"
let b = a
console.log(b)