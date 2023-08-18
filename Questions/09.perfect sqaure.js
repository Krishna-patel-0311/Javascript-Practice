let n =89;
let isSquare = false;
// Loop from 1 to the square root of 'n'
    for(i=1; i*i<=n; i++){
        if(i*i == n){
            isSquare = true;
            break;
        }
    }
    if(isSquare){
        console.log("It is perfect square");
    }
    else{
        console.log("It is not a perfect square");
    }



// //using Math.sqrt
// let n = 16;
// let isSquare = false;

// function isPerfectSquare(num) {
//     let sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
// }

// isSquare = isPerfectSquare(n);
// console.log(isSquare); // Output: false



// // using Binary Search
// let n=11;
// let isSquare = false;

// function perfectSquare(start,end,n){

//     let mid = Math.floor((start+end)/2)
//     let square = mid* mid;

//     if(square == n){
//         isSquare = true;
//         return;
//     }
//     else if(square < n){
//         return perfectSquare(mid+1,end,n)
//     }
//     else if(square > n){
//         return perfectSquare(start,mid-1,n)
//     }
// }
//  perfectSquare(1,n,n)
//  console.log(isSquare)





