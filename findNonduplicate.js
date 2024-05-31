let a=[1,2,3,1,4,5,6,6]


let obj={}

for(let i=0;i<a.length;i++){

    if(obj[a[i]]>0){
        obj[a[i]]++
    }else{
        obj[a[i]]=1
    }
}

let str=''
for(x in obj){
 str=str+x+obj[x]
}

console.log(str,'str')

console.log(obj,'objk')