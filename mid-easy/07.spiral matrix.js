function spiralMatrix(matrix){
    let n = matrix.length -1;
    let result =[]
    
    let top =0;
    let bottom = n;
    let left = 0;
    let right = matrix[0].length -1;
    
    // Check if the matrix has only one sub-array or element
    if(n==0){
        return matrix;
    }

    // Continue the loop until the boundaries meet
    while(top<=bottom && left<=right){

        //traverse the top row form left to right
        for(let i=left; i<= right; i++){
            result.push(matrix[top][i])
        }
        // Increment 'top' to exclude the top row from future traversals
        top++;
        
        //traverse the bottom row form top to bottom
        for(let i=top; i<=bottom ; i++){
            result.push(matrix[i][right])
        }
        right--;
        
        
        
        // Check if there's a bottom row to traverse
        if(top<=bottom){
            // Traverse the bottom row from right to left
            for(let i=right ; i>= left; i--){
                result.push(matrix[bottom][i])
            }
            bottom--;
        }
        
        //Check if there's a left column to traverse
        if(left<=right){
            // Traverse the leftmost column from bottom to top
            for(let i=bottom; i>=top; i--){
                result.push(matrix[i][left])
            }
            left++;
        }
        
    }
    return result;
}   

let matrix =[[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralMatrix(matrix));