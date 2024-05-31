// let z="abcdefghijklmnopqrstuvwxyz"

// let y="abc"
// // let x=y.split('')
// // console.log(x)
// // let total=""
// // let index=0;
// let str=""
// for(let i=0;i<y.length;i++){
//  index=y.indexOf(y[i])
// //  console.log(index)
//  let r=index+2;

//  if(index==24){

//  str=str+"a"
//  }else if(index==25){
//      str=str+"b"
//  }else{
//     str=str+z[r]
//  }

 

// }
// console.log(str)

// // console.log(total)

let str="abc";
let value=1;
let need=""
for(let i=0;i<str.length;i++){
    let aski=str.charCodeAt(i)+value
    let newAski;
    if(aski>122){
       newAski=97+(aski-122)
    }
    else{
        newAski=aski
    }

    need=need+String.fromCharCode(newAski)
    
}

console.log(need)

