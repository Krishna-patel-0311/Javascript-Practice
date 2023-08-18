// let myArray =[1,67,89,12]

//sort
// console.log(myArray.sort((a,b)=>{
//     return a-b
// }));

//using selection sort
function sort(myArray,myArraySize){
    for(let i=0; i<myArraySize-1;i++){
        let min =i
        for(let j= i+1; j<myArraySize; j++){
            if(myArray[min]>myArray[j]){
                min = j;
            }
        }
        if( min !== i){
            let temp = myArray[min]
                myArray[min] = myArray[i];
                myArray[i] = temp
        }
    }
}
let myArray =[34,1,23,21]
sort(myArray,myArray.length)
console.log(myArray);

