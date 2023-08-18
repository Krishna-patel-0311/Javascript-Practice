let array = [12,45,67,34,23,78,54]
let n = array.length -1

if(n%2 == 0){
    console.log(array[n/2]);
}
else{
    console.log(array[(n+1)/2]); 
}