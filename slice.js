let a=[1,2,3,4,5,6,7]


let b=a.every((value,index)=>{
    return value<10
})

// console.log(b)


let c=a.some((value,index)=>{
    return value>6
})

let index=a.indexOf(3)+1

console.log(index)








