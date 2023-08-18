let arr =[12,11,10,9,10,10,10,9,9,12,10,12,12]

function majorityElement(arr){
    let n = arr.length-1;
    let maxCount = 0;
    for(let i=0; i<n; i++){
        if(arr[i] = arr[n/2]){
            return i;
        }
    }

}

majorityElement(arr)