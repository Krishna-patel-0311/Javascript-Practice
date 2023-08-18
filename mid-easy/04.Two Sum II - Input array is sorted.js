// Two Sum II - Input array is sorted:
// Description: Given an array of integers that is already sorted in ascending order, find two numbers such that
// they add up to a specific target number.
// Sample Test Case:
// Input: [2, 7, 11, 15], target = 9
// Output: [1, 2]

let arr =[1,5,10,12,20]

let target =6;
let result =null;

for(let i=0; i<arr.length; i++){
    for(let j=arr.length;j>=i;j--){
        if(arr[i] + arr[j] == target){
            result =[i+1,j+1]
            break;
        }
    }
}
if(result == null){
    result="No two elements found that matches the target value";
}
console.log(result);