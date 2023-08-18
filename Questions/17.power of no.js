// Write a program to calculate the power of a number.

function calculatePower(base,exponent){
    if(base == 0){
        return 1;
    }

    let result =1;
    // Take the absolute value of the exponent to handle negative exponents
    let absExponent = Math.abs(exponent)

    //Use a loop to multiply the base by itself for absExponent times
    for(let i=1; i<=absExponent; i++){
        result *= base;
    }

    //If the original exponent was negative, take the reciprocal of the result
    if(exponent<0){
        result = 1/result;
    }

    return result;
}

const a =calculatePower(3,5)
console.log(a);

//using Math.pow
let b=Math.pow(2,5);
console.log(b);