//Implement a function to check if a given string is a valid palindrome ignoring spaces and punctuation.

let str="Was it a car or a cat I saw?"
let str1 =str.toLowerCase()

//to remove spaces and punctuations
const alphanumericRegex = /[^\w]+/g;
const  cleanStr = str1.replace(alphanumericRegex,"")
console.log(cleanStr);

let isPalindrome= false;

for(i=0; i<cleanStr.length/2;i++){
        if(cleanStr[i] == cleanStr[cleanStr.length-i-1]){
            isPalindrome= true;
        }
}

if(isPalindrome){
    console.log("The given string is palindrome");
}
else{
    console.log("The given string is not palindrome");
}
