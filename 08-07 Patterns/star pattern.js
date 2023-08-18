// // 1. left triangle
// let n =6
// for(let i=1; i<=n;i++){
//     let s = ""
//     for(let j=1; j<=i; j++){
//         s += "*"
//     }
//     console.log(s)
// }

// //2. reverse left triangle
// let n =6
// for(let i=0; i<n ; i++){
//     let s = ""
//     for(j=0; j<n-i; j++){
//         s = s + "*"
//     }
//     console.log(s)
// }


// // 3. right triangle pattern
// let n =5
// for(let i=1; i<=n; i++){
//     let s1=""
//     let s2=""
//     for(let l=1;l<=n-i;l++){
//         s1 += " "
//     }
//     for(let j=1; j<=i;j++){
//         s2 += "*"
//     }
//             console.log(s1 + s2)
// }


// // 4. reverse right triangle pattern
// n = 4
// for(let i=0; i<n;i++){
//     let s1=""
//     let s2=""
//     for(let l=n-i; l<n; l++){
//         s1 +=" "
//     }
//     for(let j=1; j<=n-i; j++){
//         s2 += "*"
//     }
//     console.log(s1 + s2)
// }


// //5.pyramid pattern
// let n=7
// let s =""
// for(let i=1; i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         s += " "
//     }
//     for(let k=0; k<2*i-1; k++){
//         s += "*"
//     }
//     s += "\n" 
// }
// console.log(s)


// //6. reverse pyramid
// let n =7
// let s = ""
// for(i=0 ; i<n; i++){
//     for(let j=0; j< i; j++){
//         s += " "
//     }
//     for(let k=0; k<2*(n-i)-1;k++){
//         s +="*"
//     }
//     s += "\n"
// }
// console.log(s)


// //7. diamond pattern
// let n=5
// let s = ""
// for(i=0; i<n; i++){
//     for(j=0; j<n-i; j++){
//         s +=" "
//     }
//     for(k=0; k< 2*i-1; k++){
//         s += "*"
//     }
//     s += "\n"
// }
// for(i=0; i<n; i++){
//     for(j=0; j< i; j++){
//         s+= " "
//     }
//     for(k=0; k<2*(n-i)-1; k++){
//         s += "*"
//     }
//     s += "\n"
// }
// console.log(s)


// //8.Hourglass pattern
// let n=4
// let s=""
// for(i=0; i<n; i++){
//     for(j=0; j<i; j++){
//         s += " "
//     }
//     for(k=0; k<2*(n-i)-1; k++){
//         s += "*"
//     }
//     s += "\n"
// }
// for(i=2; i<=n; i++){
//     for(j=0; j<n-i; j++){
//         s += " "
//     }
//     for(k=0; k<2*i-1; k++){
//         s += "*"
//     }
//     s += "\n"
// }
// console.log(s)






// let n =4;
// for(let i=1; i<=n; i++){
//     let s =""
//     for(let j=1; j<=i; j++){
//         s += "*"
//     }
// console.log(s)
// }

// let n=4;
// for(i=0; i<n; i++){
//     let s =""
//     for(j=n; j>=i+1; j--){
//         s += "*"
//     }
//     console.log(s)
// }

