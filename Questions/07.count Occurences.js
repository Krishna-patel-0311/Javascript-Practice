let array =["Cat","Mat","Chair","Mat","Table","Book","Cat","Table","Mat"]
let map = new Map();


array.forEach((item)=>{
    if(map.has(item)){
        let count = map.get(item);
        map.set(item,count+1)
    }
    else{
        map.set(item,1)
    }
})
console.log(map);