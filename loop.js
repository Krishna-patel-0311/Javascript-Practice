//LOOP:for,for each,for in(use to get index of the items),for of(for accessing items),  while,do while

//Syntax: for(initialization,termination,updation)

// for
for(var i =1;i<=5;i++){
     console.log("Current value of i:"+i);
}

//FOR EACH
var a =["Apple","Orange","Lemon"];
a.forEach(item => console.log(item));

//for in(for index)
for(var item in a)
console.log(item);

//for of
for(var item of a)
console.log(item);

//While
var i =0;
while(i<3){
    console.log("Current value of i:" +i);
    i++;
}

//Do While
var i =1;
do{
    console.log("Current value of i:" +i)
    i++
}
while(i<20)
