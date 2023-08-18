let arr=[100,567,237,8765,643]

let arr1 = arr.sort((a,b)=>{
    return (a-b)
})
console.log(arr1);

function selectionSort(arr,arrSize){
    for(let i=0; i<arrSize; i++){
        let min =i;
        for(let j =i+1; j<arrSize; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
}
selectionSort(arr,arr.length)
console.log(arr);