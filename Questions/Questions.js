// calculate sum of elements in the array.

//reduce
let n= [4,5,2,3]
console.log(n.reduce((pre,curr)=>{
return pre+curr
}))

//for each
var k=0
n.forEach((ele) =>{
    k += ele
})
console.log(k);

//for
var sum=0;
for(i=0;i<n.length;i++){
      sum += n[i]
}
console.log(sum);

//sum of even elements present in array
let add=0;
n.filter((ele,i)=>{
    if(n[i] % 2 == 0){
       add += n[i]
    }
})
console.log(add);

//sum of odd elements present in array
