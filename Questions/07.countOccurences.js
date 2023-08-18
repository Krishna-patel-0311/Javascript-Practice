let array =["Cat","Mat","Chair","Mat","Table","Book","Cat","Table","Mat"]
let map = new Map()
// using forEach iterate through every element
array.forEach((item)=>{

//check if the item is present in the map or not
if(map.has(item)){
    // if present store its value 
    let count = map.get(item)
    //again set the item with increased value
    map.set(item,count+1)
}
// if the keys are not in the map add it with value 1
else{
    map.set(item,1)

}
})
console.log(map);