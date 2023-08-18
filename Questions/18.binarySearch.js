// Implement a func􀆟on to perform binary search on a sorted array. 

function binarySearch(start,end,array,num){
    let mid = Math.floor((start+end)/2)
    if(array[mid] === num){
        return mid+1
    }
    else if(array[mid] < num){
        return binarySearch(mid+1,end,array,num)
    }
    else if ( array[mid] > num){
        return binarySearch(start, mid-1, array,num)
    }
}

let array =[1,4,7,12,23,45,89,65]
let num = 23
let result = binarySearch(0,array.length-1,array,num)
console.log(result);