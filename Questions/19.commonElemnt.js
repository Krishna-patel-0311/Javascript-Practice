// 19.Write a program to find the common elements between two arrays.

const n1=[22,45,66,76,47]
const n2 =[24,45,11,22,34,76]

const common = n1.filter((a) =>{
    if(n2.includes(a)){
        return n2;
    }
})
console.log(common);