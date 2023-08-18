//charAt -> returns a character at the specific index of a string
let s= "Hello Krishna!"
console.log(s.charAt(1))


//charCode ->returns the unicode value(0 - 65535) of the character present in the given index of a string
console.log(s.charCodeAt([2]))


//endsWith ->determines whether the string ends with a specified substring or not.
console.log(s.endsWith("a!"))
console.log(s.endsWith("!",4))  //checks till index 4


// includes ->determines whether a given substring is present in the calling string or not
console.log(s.includes("Krishna!"))


// indexOf -> Returns the index (position) of the first occurrence of a value in a string
console.log(s.indexOf("Krishna"))
console.log(s.indexOf("hello"))        //if case sensitive it will return -1


//lastIndex -> Returns the index (position) of the last occurrence of a value in a string
let x = "to do or not to do"
console.log(x.lastIndexOf("to"))
console.log(x.lastIndexOf("do",8))     //search till index 8


//match
const str = "RkU145jRhgIL"
console.log(str.match(/[A-Za-z0-9]/g))    //g flag is used to return all the complete match and its caputuring group

const str2= "to do or not to do"
console.log(str2.match(/do/))             // if g flag is not there it will return only i occurence of given string


//matchAll                                // it's compulsory to use g flag in matchAll
const array =[...str2.matchAll(/do/g)]
console.log(array)


//Replace
var text = " I am staying in Vapi"
var newtext = text.replace("Vapi", "Rajkot");
console.log(newtext);


// Replace All
const p= "to do or not to do"
console.log(p.replaceAll("do","any")) 


//repeat -> repeats the string by specific no of times
console.log(str2.repeat(2))
console.log(str2.repeat(3.5))            //converts decimal to int


//search  ->returns the index value of the first match within the string
const h = "RR12567jiklL";
console.log(h.search(/[A-Z]/))


//String length
let fname = "Krishna"
console.log(fname.length);


// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)
things =("Table, Chair, Blackboard,Pen")
a= console.log(things.slice(5,12));
b= console.log(things.substring(12));
c= console.log(things.substr(10,14));


//UpperCase
console.log(newtext.toUpperCase());


//LowerCase
console.log(newtext.toLowerCase());


//Concat
var a = "hello "
var b = "krishna"
console.log(a.concat(b));


//trim ->removes whitespace
let g = "    Hello    "
console.log(g);
f = g.trim();
console.log(f);


//trimStart -> removes whitespace only from start of string
f = g.trimStart();
console.log(f);


//trimEnd -> removes whitespace only from end of string
f = g.trimEnd();
console.log(f);


// split
const sen="Cat is sitting on a mat"
console.log(sen.split());
console.log(sen.split(""))
console.log(sen.split(" "))
console.log(sen.split('is'))              //split at each is and remove 'is'


//startsWith
console.log(sen.startsWith("Cat"))
console.log(sen.startsWith("s",5))        // checks by giving index


//valueOf ->Returns the primitive value of a string or a string object
const m = new String("Hello World")
console.log(m.valueOf(m))







