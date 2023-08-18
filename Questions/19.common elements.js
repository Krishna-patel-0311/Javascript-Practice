let n1 = [34,67,88,31,14,15,11]
let n2 = [78,34,15,89,11,88,16]

const common = n1.filter((a)=>{
    if(n2.includes(a)){
        return n2;
    }
})
console.log(common);

console.log(2 +'2' -1);