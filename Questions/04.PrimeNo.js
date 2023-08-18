const no= 30;
let isTrue = true;

//check if no is 1
if(no === 1){
console.log("1 is not prime nor composite");
}

//check if no>1
else{
    if(no>1){
        //looping from 2 to no-1
        //checking if no is multiple of itself and 1 only, or it is multiple of more than that
        for(let i=2; i<no; i++){
            if(no % i === 0){
                isTrue = false;
                break;
            }   
        }
    }
    if(isTrue){
        console.log(`${no} is prime no`);
    }
    else{
        console.log(`${no} is not a prime no`);
    }
}

