// SET
// myArray = [1,2 ,4,5]
// let obj= new Set(myArray);

// var obj1 = {name:"Krishna"}
// obj.add(obj1)
// console.log(obj)

// for(let new1 of obj){
//     console.log(new1)
// }
// obj.forEach((element)=>{
//      console.log(element)
// }
// )


//MAP

//new Map()   -> creates a map
let myMap = new Map([["a1","Krishna"],["a2","Patel"]])
console.log(myMap)

//get
console.log(myMap.get("a2"))

//has
console.log(myMap.has("a1"))

//size
console.log(myMap.size)

//clear
myMap.clear();
console.log(myMap)



//WeakSet -> It can only store value but cannot display it.
// new WeakSet()
let ws = new WeakSet()
var obj1={"name" :"Krishna"}
ws.add(obj1)                    //add
console.log(ws.has(obj1))       //has


//WeakMap
//new WeakMap
let wm = new WeakMap()
var obj2 ={}





