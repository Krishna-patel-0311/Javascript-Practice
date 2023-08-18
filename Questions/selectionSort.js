function selectionSort(array,arraySize){
    for(let i=0; i<arraySize -1 ; i++){
        let min = i
        for(let j=i+1; j<arraySize; j++){
            if(array[min]> array[j]){
                min = j;
            }
        }
        if(min !== i){
            let temp = array[min]
            array[min] = array[i]
            array[i] = temp
        }
    }
}
array =[11,7,34,23]
selectionSort(array,array.length)
console.log(array);