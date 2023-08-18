let arr=[78,23,28,67,65,45,76]
let n = arr.length-1;

if(n%2==0){
    console.log(arr[n/2]);
}
else{
    console.log(arr[(n-1)/2]);
}