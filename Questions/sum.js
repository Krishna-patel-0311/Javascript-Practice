// calculate sum of elements in the array.
const array=[2,3,4,10,4]

//method for each
// var sum=0;
// array.forEach((ele)=>{
//     sum = sum + ele
// })
// console.log(sum)

//reduce
// var sum = array.reduce((initial,currentVal)=>{
//     return initial + currentVal
// }
// )
// console.log(sum);

//
// let sum=0;
// for(let i=0; i< array.length; i++){
//     sum = sum + array[i]
// }
// console.log(sum);

//sum of even no present in array
let sum = 0;
array.filter((ele)=>{
    if(ele % 2 == 0){
        sum = sum + ele
    }
})
console.log(sum);

