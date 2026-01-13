//singleton
//object.create -->constructors method


//object literals
const mySym = Symbol("key1")
const user = {
    name: "Ali",
    [mySym]:"mykey",
    age:23,
    isLoggedIn: false,
    lastActiveStatus: ["Mon","Tues","Wed"]
}
// console.log(user[mySym]);

user.name = "ALi";
// console.log(user);
//Object.freeze(user) //now no value can be changed.

user.add = function(){
    user.isLoggedIn = true
}
user.greeting = function(){
    console.log(`hello to ${this.name}`);
    
}
//console.log(user.add());
//console.log(user.add); // function didn't executed just told its reference of funtion
console.log(user.greeting());
