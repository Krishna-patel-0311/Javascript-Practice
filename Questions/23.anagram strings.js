//Implement a func􀆟on to check if a given string is an anagram of another string.
let str1 = "listen";
let str2 = "silent";

function isAnagram(str1,str2){
    
    //check if length of both strings are same
    let lengthStr1 = str1.length;
    let lengthStr2 = str2.length;

    if(lengthStr1 == lengthStr2){

        //split the string, sort it and join it
        const sortedStr1  = str1.split("").sort().join() 
        console.log(sortedStr1);
        const sortedStr2  = str2.split("").sort().join()
        console.log(sortedStr2);
        //check if both are equall
        return sortedStr1 == sortedStr2;

    }
    else{
        return false;
    }

}

console.log(isAnagram(str1,str2));