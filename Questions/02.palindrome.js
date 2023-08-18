let str = "Krishna";
let nStr= str.toLowerCase();
let isPalindrome = true;

for(let i=0; i<nStr.length/2; i++){
    if(nStr[i] !== nStr[nStr.length-i-1]){
        isPalindrome= false;
        break;
    }
}
if(isPalindrome){
    console.log(`${str} is palindrome string`);
}
else{
    console.log(`${str} is not palindrome string`);
}