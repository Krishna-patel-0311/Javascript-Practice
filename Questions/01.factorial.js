// function factorial(){
//     let n = 5;
//     sum = 1;
//     for(j=n;j>0;j--){
//         sum *= j
//     }
//     console.log(sum);
// }
// factorial()
//Write a program to find the factorial of a given number.

function factorial(n){
    
    if(n==0 || n==1){
     return 1
    }
    else{
     return n * factorial(n-1)
    }
 }
 console.log(factorial(4));