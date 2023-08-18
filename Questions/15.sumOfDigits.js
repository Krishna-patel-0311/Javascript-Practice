const a = 123

let b = a.toString();
let c =b.split("")
console.log(c);

console.log(c.reduce((pre,curr)=>{
    return parseInt(pre) + parseInt(curr);
}));


//using for loop
let sum=0;
for(let i=0; i<c.length; i++){
    sum +=parseInt(c[i]);
}
console.log(sum);
