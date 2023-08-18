let data = [{name:"John",age:51},
{name:"Sam",age:32}]

function getDatas(){
    setTimeout(()=>{
        let Output ="";
        data.forEach((data,index)=>{
            Output +=`${data.name}`
            Output+= "\n"
        })
        console.log(Output);
        return Output;
    },1000);
} 

// // in this vivek will not be displayed as setTimeout for getDatas() is 1000 whereas 
// // for createData it is 2000
// function createData(newData){
//     setTimeout(()=>{
//         data.push(newData)
//     },2000);
// }
// createData({name:"Vivek",age:25})

////using callback
// // callback ensure that certain code runs after a specific task is completed.
// function createData(newData,callback){
//     setTimeout(()=>{
//         data.push(newData);
//         callback();
//     },2000)
// }
// createData({name:"Vivek",age:30},getDatas)

// // promise
function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push(newData)
            let err = false;
            if(!err){
                resolve()
            }
            else{
                reject("Error")
            }
        },2000)
    })
}
// createData({name:"Vivek",age:30}).then(getDatas).catch(err =>console.log(err));

// // Async await
async function start(){
    await createData({name:"Vivek",age:30})
    getDatas()
} 
start();
console.log(getDatas());
