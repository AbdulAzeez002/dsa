
// let a=[1,2,1,2,3,4,6]
// let obj={}

// for(let i=0;i<a.length;i++){
//     if(obj[a[i]]=1){
//        continue;
//     }
//     else{
//         obj[a[i]]=1
//     }
// }

// let b=''

// for(let x in obj){
//     b=b+x
// }

// let c=b.split("")

// let d=c.map((e)=>{
//     return Number(e)
// })
// console.log(d)
// console.log(obj)



// {niyas methods}

// let a=[1,2,1,2,3,4,6]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             a.splice(j,1)
//         }
//     }
// }
// console.log(a)





// let a=[1,2,1,2,3,4,6]
// let b=[]
// for(let i=0;i<a.length;i++){
//     let x=b.includes(a[i])
//     if(x==false){
//         b.push(a[i])
//     }
// }
// console.log(b)


// let a=[1,2,1,2,3,4,6]
// let b=[]
// for(let i=0;i<a.length;i++){
//     let x=b.indexOf(a[i])
//     if(x==-1){
//         b.push(a[i])
//     }
// }
// console.log(b)

// let a=[1,2,1,2,3,4,6]
// let b=new Set(a)

// let c=[...b]
// console.log(c)


let a=[1,2,1,2,3,4,6]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
         for(let k=j;k<a.length;k++){
            a[k]=a[k+1]
         }
        j--;
        a.length--;
         
        }
      
    }
}
console.log(a)







