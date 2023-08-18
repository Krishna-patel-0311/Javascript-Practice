function factorial(n){
    
    if(n == 0 || n==1){
        return 1
    }
    else{
        return n* factorial(n-1)
    }
}

function strongNo(n){
    //find individual digits
    let n1 = n.toString();
    let n2 = n1.split("");

    //sum up the factorial of all digits
    let sum =0
    for(let i=0; i<n2.length; i++){
        let digit = parseInt(n2[i])
        sum += factorial(digit)
    }
    
    //checking the sum is equall or not
    return sum == n
}

let n = 872
console.log(strongNo(n));
