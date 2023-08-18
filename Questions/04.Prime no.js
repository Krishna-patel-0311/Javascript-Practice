let n= 4;
isPrime = true;

if(n==1){
    console.log("1 is neither prime nor composite");
}
else{
    if(n>1){
        for(i=2; i<n; i++){
            if(n%i == 0){
                isPrime= false;
                break;
            }
        }
    }
    if(isPrime){
        console.log(`${n} is a prime no`);
    }
    else{
        console.log(`${n} is not a prime no`);
    }
}
