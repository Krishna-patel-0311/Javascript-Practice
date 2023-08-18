// Given a string, write a program to count the frequency of each character.
const str = "Hii, I am Krishna Patel"
const str1 = str.toLowerCase();

let a = str1.split("")
console.log(a);

let newstr = new Map();

a.forEach((item)=>{
    if(newstr.has(item)){
        let count = newstr.get(item)
        newstr.set(item,count +1)
    }
    else{
        newstr.set(item,1)
    }
})
console.log(newstr);