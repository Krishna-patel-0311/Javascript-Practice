// using selectionSort
function largestNo(array,arraySize){
    for(let i=0; i<arraySize-1; i++){
        let min =i;
        for(j=i+1; j<arraySize; j++){
            if(array[min]>array[j]){
                min = j
            }
        }
        if(min !== i){
            let temp= array[min]
            array[min] = array[i]
            array[i] = temp
        }
    }
}
array = [12,34,24,56,23]
largestNo(array,array.length)
console.log(array);

console.log(largestELement = array[array.length-2])

//using sort() for array
let arr = [21,2,56,1]
newArr =arr.sort((a,b)=>{
    return(b-a)
})
console.log(newArr)
console.log(newArr[1]);
