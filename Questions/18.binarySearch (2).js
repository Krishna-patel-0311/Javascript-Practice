function binarySearch(start,end,arr,value){
    let mid = Math.floor((start+end)/2)

    if(arr[mid] == value){
        return mid+1
    }
    else if(arr[mid] > value){
        return binarySearch(mid+1,end,arr,value)
    }
    else if(arr[mid] < value){
        return binarySearch(start,mid-1,arr,value)
    }
}

let arr=[67,34,15,11,43]
let value=15
let result = binarySearch(0,arr.length-1,arr,value)
console.log(result);