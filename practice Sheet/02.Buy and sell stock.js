// Description: You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the
// maximum profit you can achieve by buying and selling stocks mul􀆟ple 􀆟mes.
// Sample Test Case:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 7

function maxProfit(array){
    let result =0;

    for(let i=1; i<array.length; i++){
        if(array[i] > array[i-1]){
            result += array[i] - array[i-1]
        }
    }
    return result
}

let array = [7,1,5,3,6,4]
console.log(maxProfit(array));


