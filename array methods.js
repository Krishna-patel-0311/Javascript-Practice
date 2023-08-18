var arr=[2,"Hello",3,4,'Bye',"hii"]

//PUSH-> to add element
arr.push("krishna")
console.log(arr)

//POP -> to remove element
arr.pop();
console.log(arr)

//toString -> to print element in string
console.log(arr.toString());

//shift -> removes first element and shifts all other elements to a lower index
arr.shift();
console.log(arr)

//unshift -> adds element to array
arr.unshift("lemon");
console.log(arr);

//concat -> merging or concatinatin g array
var a=[23,78,'bye','hello'];
var b =['a','b','c',11,15];
const d = a.concat(b);
console.log(d)
//merging three array
var c =['js']
console.log(a.concat(d,c))
//string as argument
console.log(a.concat("Vapi"))

//spice ->adds new items to an array and also used to remove element.
var city =["vapi","silvassa","surat","rajkot"]
city.splice(1,2,"Mumbai","pune")
// console.log(city)
city.splice(2,3)
console.log(city)

//slice ->slices out a piece of an array
const f = ["Orange", "Lemon", "Apple", 0];
const g= f.slice(2);
console.log(g)

//sort ->sorts an array alphabetically
f.sort();
console.log(f);
//numeric sorting by compare function
num=[1,20,200,80,34,11,15]
num.sort(function(a,b){return(a-b)});
console.log(num);
//sorting of object
const student=[
    {fname:"nirav", year:2002},
    {fname:"krishna" ,year:2003},
    {fname:"bhavya" ,year:2011},
]
a=student.sort(function(a,b) {return(a.year-b.year)});
console.log(a);

//reverse ->reverses the elements in an array
f.reverse();
console.log(f);


//map 
//creates a new array by performing some operation on each array element (uses callback function)
let arr1 = [45,23,21,0,1,2,5]

// let arr2 = arr1.map((value) =>{
//     console.log(value)
//     return value + 1;
// })

let arr2 = arr1.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index;
})
console.log(arr2)

//filter -> filters an array with values that passes a test and creates a new array (uses callback function)
let arr3 = arr1.filter((a) =>{
    return a<20;
})
console.log(arr3)

//reduce -> reduces an array to a single value (uses callback function)
let x =[5,6,7,10]
let y = x.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})
console.log(y)  





//converting the name to uppercase using map
let students =[
    {name:"Ved" , marks:41, city:"Valsad", rollNo:12},
    {name:"Krishna" , marks:20, city:"Vapi", rollNo:24 },
    {name:"Nirav" , marks:51, city:"Silvassa", rollNo:54 },
    {name:"Bhavya" , marks:22, city:"Vapi",rollNo:30 }
]

let newArr = students.map((stdname)=>{
        return stdname.name.toUpperCase();
    })
console.log(newArr)


//return only details of those students whose marks is more than 15 using filter
let agemorethan15 = students.filter((ageArr)=>{
    return ageArr.marks > 15;
})
console.log(agemorethan15)

//multiple filter condition
let newArr1 = students.filter((element)=>{
    return element.marks >15 && element.rollNo > 20
})
console.log(newArr1)

// sum of marks of all students using reduce
let sum = students.reduce((acc,currVal)=>{
    
     return acc + currVal.marks 
},0)
console.log(sum)

//return only namesof students who's marks more than 20
let details = students.filter((stu)=>stu.marks >= 20).map((stu)=>stu.name);
console.log(details)

// return total marks for students with marks greater than 60 
//after 20 marks is added to those who scored less than 60

let newMarks = students.filter((a)=> a.marks < 30).map((a)=> a.marks + 20)
console.log(newMarks)


//some -> checks at least one element in the array passes certain conditions by providing a callback function.
const nums =[12,34,45,21]
console.log(num.some((ele)=> ele>35))


//every ->checks if every elements satisfy the condition
const n1=[1,2,3,4,5,3]
const n2=[22,32,44]

function isEven(num){
    return num % 2 ===0
}

console.log(n1.every(isEven));
console.log(n2.every(isEven));


//find  ->returns the first value of array element which satisfies provided condition(uses callback function)
console.log(n1.find((ele)=>ele > 3))

//findIndex  ->same as find() but it returns the index value of the element, not the value itself (uses callback function).
console.log(n1.findIndex((ele)=> ele>2))

//fill  ->returns a modified array by filling a specified index with the specified value
const arr8 =["a","b","c","d", "e","f","g"]
console.log(arr8.fill("d"))           //fill the whole array with d
console.log(arr8.fill("s",3))         //arr.fill(value,start)        //fill the index from d to 3
console.log(arr8.fill("k",0,4))       //arr.fill(value,start,end)

//for each   -> used to iterate over each and every element of the array and execute a function for all elements.
function print(element, index){
    console.log(element +" "+ index)
}
arr8.forEach(print)

//flat   ->Create a new array with the sub-array elements concatenated:
let s =[[1,3],[4,8],[5,6],[3,[7,50,21]]]
const new1 =s.flat();
const newArrs = s.flat(2);
console.log(new1)
console.log(newArrs)


//speard operator
//
const myLocation=['vapi','rajkot']
const otherLocation=['pune',...myLocation,'surat,banglore']
console.log(otherLocation)

// spread operator to separate strings to individual array items
const fname='Krishna'
console.log([...fname])

// Spread operator in function call
const functionArgs = [1,2,3,4];

function mulNumbers (a, b, c, d) {
    return a*b*c*d;
}

console.log(mulNumbers(...functionArgs));


//rest operator
//rest operator in function parameter
function testRest(...values){
    return values;
}
console.log(testRest("Nirav","Krishna"))

//Rest operator in destructuring assignment
const [firstname,sname,...otherInfo]= ["Krishna","Patel",20,"Vapi"]
console.log(otherInfo)

