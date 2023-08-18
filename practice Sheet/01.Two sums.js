// Question: Given an array of integers nums and an integer target, return indices of the two numbers such that
// they add up to target.

let nums =[3,7,2,1,4];

const target = 3
let result;

for(let i=0; i<nums.length; i++){
    for(let j=nums.length; j>=i; j--){
        if(nums[i] + nums[j] == target){
            result = [i,j]
            break;
        }
    }
}
if(result == null){
    result = "No two element adds up the target element"
}
console.log(result);