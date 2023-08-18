
function selectionSort(array,arraySize){
    for(let i=0; i<arraySize; i++){
        let min =i;
        for(let j=i+1; j<arraySize; j++){
            if(array[min] > arr[j]){
                min =j;
            }
        }
        if(min !== i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}
let arr =[78,89,56,22,87,65,43,11]
selectionSort(arr,arr.length)
console.log(arr[arr.length-2]); 