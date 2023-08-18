// Primitive data type : undefined,null,number,string,bollean,symbol
// Non Primitive data type : array and object

//Number
a = 20.5;
console.log(a);

// String 
a = "Hello"
b = 'Hi'
console.log(a,b)
//template literals = ``
let fname = "Krishna";
let lname = "Patel";
   // let sentence = `I am lname fname`
let sentence = `I am ${lname} ${fname}`
console.log(sentence);
//escape character
let text = 'It\'s fine.';
console.log(text);
  // n -> for new line
  // t -> for tab


//Bollean
var a = true;
var b = false;
console.log(a,b)

//Undefined
var d;
console.log(d)

//Objects
var marks = {
    a: 79,
    b: 80,
    c: 67,
    d:98,
}
console.log(marks)

//ways to copy an object.
//using {...} spread syntax
const obj ={msg:"Hello", from:"Krishna"}
console.log({...obj}); 
//using object.assign()
console.log(Object.assign(obj));
//using JSON.parse and JSON.stringify
console.log(JSON.parse(JSON.stringify(obj)));

//Object destructuring
const Person ={name: "Krishna", age:20}
const{name,age} = Person
console.log(name) 
console.log(age);

//Looping through an object.
//for in
let fruit1={name:"apple", color:"red" }
for(let key in fruit1){
  console.log(`${key}: ${fruit1[key]}`);
}
//Object.keys()
let fruit2={name:"banana", color:"yellow" }
const keys = Object.keys(fruit2);
keys.forEach(function(key){
  console.log(`${key}: ${fruit2[key]}`);
})
//Object.values()
let fruit3 ={name:"Guava", color:"green"}
const values =Object.values(fruit3)
values.forEach(function(ele){
  console.log(ele);
})
//Object.entries()
let fruit4 ={name:"Cherry", color:"red"}
const entries = Object.entries(fruit4)
entries.forEach(function([key,value]){
  console.log(`${key}: ${value}`);
})



//Array
var arr=[1,2,"Hello",3,4,'Bye']
console.log(arr)
console.log(arr[2]);
