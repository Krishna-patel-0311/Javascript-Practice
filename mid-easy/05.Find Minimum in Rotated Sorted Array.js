// Find Minimum in Rotated Sorted Array II:
// Description: Suppose an array of length n sorted in ascending order is rotated between 1 and n yimes. Find the
// minimum element in it.
// Sample Test Case:
// Input: [2, 2, 2, 0, 1]
// Output: 0



//using sort method
let arr = [6,8,9,5]

let newArr = arr.sort((a,b)=>{
    return(a-b);
})
console.log(`minimum element is `,newArr[0]);



//using selection sort
function selectionSort(arr,arrSize){
    for(let i=0; i<arrSize; i++){
        let min =i;
        for(let j=i+1; j<arrSize; j++){
            if(arr[i] > arr[j]){
                min =j
            }
        }
        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp;
        }
    }
}
selectionSort(arr,arr.length)
console.log(arr[0]);