//Find All Numbers Disappeared in an Array

let arr =[1,6,7,20,17,25];

//first sort the array in ascending order
let arr1 = arr.sort((a,b)=>{
    return(a-b);
})
console.log(arr1);

//calculate length of the array
let n = arr1[arr1.length-1];
console.log(n);

let result=[]

//loop through the array from 1 to array.length-1
for(let i=1; i<=n; i++){
    //if array doesn't include i,push i
    if(!arr.includes(i)){
        result.push(i)
    }
}
console.log(result);

