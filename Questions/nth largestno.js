
let arr =[1,34,5,23,99,37,89,2,7]
let n = 4
console.log(arr.sort((a,b)=>{ return b-a}))

console.log(arr[n-1]);

// for nth smallest no
console.log(arr.sort((a,b) => {return a-b}))
console.log(arr[n-1])
