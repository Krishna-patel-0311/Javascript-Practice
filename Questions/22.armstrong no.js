//Write a program to check if a number is a Armstrong number.

const n = 9474;
let n1 = n.toString();
let n2 = n1.split("");
console.log(n2);

//Raise each digit to the power of totalDigits and sum them up
let sum =0
for(let i=0; i<n2.length; i++){
    const digit = parseInt(n2[i])
    sum += Math.pow(digit,n2.length)
}

const isArmstrong = sum == n
console.log(isArmstrong);