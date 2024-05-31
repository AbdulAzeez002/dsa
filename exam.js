let a=[1,2,3,4,5,6]

// const dub = a.reduce((total,value)=>{
   
//     return total=total+value 


// },0)

// let x=Math.floor(dub/a.length)

let sum=0;


for(let i=0;i<a.length;i++){
   
    let c=Math.abs(a[i]-3-(i+1))
    
    sum=sum+c
 
}

console.log(sum)




