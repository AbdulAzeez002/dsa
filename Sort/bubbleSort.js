


let a=[7,9,1,2,3,4,5]

for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-1;j++){
        if(a[j]>a[j+1]){
           let  temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
        }
    }
}

console.log(a)