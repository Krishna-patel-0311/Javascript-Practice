// Find First and Last Posi􀆟on of Element in Sorted Array:
// Description: Given an array of integers nums sorted in ascending order, find the starting and ending posi􀆟on of
// a given target value.
// Sample Test Case:
// Input: [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

let n =[1,2,4,5,13,13,13,13,14]
let target =13

let firstIndex = n.indexOf(target)
let lastIndex = n.lastIndexOf(target)
console.log(firstIndex,lastIndex);