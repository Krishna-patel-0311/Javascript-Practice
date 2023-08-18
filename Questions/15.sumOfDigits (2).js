let n= 172
let n1= n.toString();
let newN = n1.split("");
console.log(newN);

console.log(newN.reduce((pre,curr)=>{
    return parseInt(curr) + parseInt(pre);
}));

