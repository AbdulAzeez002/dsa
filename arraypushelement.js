let a=[1,2,3,4,5]

let b=[]

// for(let i=0;i<a.length;i++){
//     setTimeout(()=>{
//         b.push(a[i])
//         console.log(b)
//     },1000*i)
// }
let i=0

function push(length){

  b.push(a[i]) 
  i++;
  console.log(b)

  if(length>0){
    setTimeout(()=>{
        push(length-1)
    },1000)
  }
}

push(a.length-1)









