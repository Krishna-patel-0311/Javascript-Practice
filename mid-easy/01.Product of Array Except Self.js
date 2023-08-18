// Product of Array Except Self:

// Sample Test Case:
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]


function productExpSelf(a){
    
    //create empty array for leftProducts,rightProducts and result;
    let leftProducts =[];
    let righProducts =[];
    let result =[];
    
    //Calculate the product of all elements to the left of each element
    let leftProduct =1;
    for(let i=0;i<a.length;i++){
        leftProducts[i] = leftProduct;
        leftProduct *= a[i]
    }
    
    //Calculate the product of all elements to the right of each element
    let righProduct =1;
    for(let i=a.length-1; i>=0; i--){
        righProducts[i] = righProduct;
        righProduct *= a[i]
    }
    for(let i=0; i<a.length; i++){
        result[i] =leftProducts[i] * righProducts[i]
    }
    return result;
}
let a =[1,2,3,4]
console.log(productExpSelf(a));