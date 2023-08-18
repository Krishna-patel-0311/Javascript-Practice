let array =["Cat","Mat","Chair","Mat","Table","Book","Cat"]
console.log(array);

//set is used to remove duplicate element
let newSet = new Set(array)
let newArray = Array.from(newSet)
console.log(newArray);

//
let newArr2  =[]
array.forEach((item) =>{
     if(newArr2.includes(item)){

     }
     else{
        newArr2.push(item);
     }
})
console.log(newArr2);