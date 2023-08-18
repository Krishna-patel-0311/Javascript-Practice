// let n=4;
// for(let i=1; i<=n; i++){
//     let s =""
//     for(let j=1; j<=i;j++){
//         s += "*"
//     }
//     console.log(s);
// }

// let n=5;
// for(let i=1; i<=n; i++){
//     let s=""
//     for(let j=n ; j>=i; j--){
//         s += "*"
//     }
//     console.log(s);
// }

// let n=3;
// for(let i=1; i<=n; i++){
//     let s1=""
//     let s2=""
//     for(let j=1; j<=n-1; j++){
//         s1 += " "
//     }
//     for(let k=1; k<=i; k++){
//         s2 += "*"
//     }
//     console.log(s1+s2);
// }

// let n=4;
// for(let i=1; i<=n; i++){
//     let s1=""
//     let s2=""
//     for(let k=n-i-1; k<n; k++){
//         s1 += " "
//     }
//     for(let j=1; j<=n-i; j++){
//         s2 += "*"
//     }
//     console.log(s1+s2);
// }

let n=4
let s=""
for(let i=1; i<=n ;i++){
    for(let j=1; j<=n-i; j++){
        s += " "
    }
    for(let k=1; k<=2*i-1; k++){
        s +="*"
    }
    s += "\n"
}
console.log(s);
