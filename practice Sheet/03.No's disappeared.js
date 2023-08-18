// Description: Given an array nums of n integers where 1 ≤ nums[i] ≤ n, some elements appear twice and others
// appear once. Find all the elements of [1, n] inclusive that do not appear in this array.
// Sample Test Case:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [5, 6]

let array =[4, 3, 2, 7, 8, 2, 3, 1]

let sortedArray = array.sort((a,b) =>{return (a-b)})
console.log(sortedArray);

let n = sortedArray[sortedArray.length -1]
console.log(n);

let result = []
for(let i=1; i<n; i++){
    if(!array.includes(i)){
        result.push(i);
    }
}
console.log(result);