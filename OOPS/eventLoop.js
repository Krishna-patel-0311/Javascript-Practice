console.log(1);
setTimeout(()=>{
console.log(2);
},0)
console.log(3);
console.log(4);

setTimeout(()=>{
console.log(5);
},1000)
console.log(6);


setTimeout(()=>{
console.log(7);
},0)
setTimeout(()=>{
console.log(8);
},0)
console.log(9);

//1 3, 4, 6,9,2,7,8,5