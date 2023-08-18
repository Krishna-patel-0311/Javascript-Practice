let a = "Hellolleh"
b = a.toLowerCase();
let isPalindrome = true

for(let i=0; i<b.length/2;i++){
    if(b[i] !== b[b.length -i-1]){
        isPalindrome = false;
    }
}

if(isPalindrome){
    console.log("It is palindrome");
}else{
    console.log("It is not palindrome");
}   