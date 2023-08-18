// Implement a func􀆟on to find the smallest posi􀆟ve missing number in an array.


function findsmallestMissingNo(n){
    
    //filter all positive no
    const positiveN = n.filter((n => n>0))
    console.log(positiveN);
    
    //arrange it in ascending order
    positiveN.sort((a,b) => a-b);
    console.log(positiveN);
    
    //check if the number matches its index
    let smallestno =1;
    for(let i=0; i<positiveN.length; i++){
        if(positiveN[i] == smallestno){
            smallestno ++
        }
        else if(positiveN[i] > smallestno){
            break;
        }
    }
    return smallestno;

}
const arr =[56,89,-2,-1,1,2,4]
const smallestMissingNo = findsmallestMissingNo(arr)
console.log("The smallest missing no is:", smallestMissingNo);