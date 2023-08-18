// Best Time to Buy and Sell Stock II:
// Description: You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the
// maximum profit you can achieve by buying and selling stocks multiple times.
// Sample Test Case:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 7

function maxProfit(price){
    let totalProfit =0
    
    // Loop through the prices starting from the second day
    for(let i=1; i<price.length; i++){
        // If the price of the current day is higher than the previous day, there's profit
        if(price[i] > price[i-1]){
            // Add the difference between the current day's price and the previous day's price to the total profit
            totalProfit += price[i] - price[i-1]
        }
    }
    return totalProfit
}

// const price=[34,78,67,7,32,88];
const price =[7, 1, 5, 3, 6, 4]
console.log(maxProfit(price));