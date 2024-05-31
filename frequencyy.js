const a=[1,2,3,4,1,2,1,3,3,5]

let obj={}


for(let i=0;i<a.length;i++){
    if(obj[a[i]]>0){
        obj[a[i]]++
    }
    else{
        obj[a[i]]=1
    }
}

console.log(obj)



// const y=Object.entries(obj)
// console.log(y)


for(let x in obj){
    console.log("count of " ,x,"is",obj[x])
    
}


let b=[1,2,3,4,5]
// console.log(typeof b)
// const helli=Number("7")
// console.log(typeof helli)
console.log(typeof null)
let z={...b}
console.log(z)
