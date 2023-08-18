let arr=["chair","table","cat","chair","pen","slate","key"]
console.log(arr);

let newSet = new Set(arr);
console.log(newSet);

let newArr=[]
arr.forEach((item)=>{
    if(newArr.includes(item)){

    }else{
        newArr.push(item);
    }
})
console.log(newArr);