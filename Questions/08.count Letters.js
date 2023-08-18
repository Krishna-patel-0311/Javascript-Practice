const str ="This is program for count letters";
const str1 = str.toLowerCase();

let a = str1.split("");
console.log(a);

let newStr = new Map();

a.forEach((item)=>{
    if(newStr.has(item)){
        let count = newStr.get(item);
        newStr.set(item,count+1)
    }
    else{
        newStr.set(item,1)
    }
})
console.log(newStr);