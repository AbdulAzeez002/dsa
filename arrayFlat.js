let a=[1,2,[3,4],[3,4,6],7,[[7,8]]]

let b=[]

for(let i=0;i<a.length;i++){
    if(typeof(a[i])=='number'){
        b.push(a[i])
    }
    else{
        for(let j=0;j<a[i].length;j++){
            if(typeof(a[i][j])=='number'){
                b.push(a[i][j])
            }
            else{
                for(let k=0;k<a[i][j].length;k++){
                    b.push(a[i][j][k])
                }
            }
        }
    }
}

console.log(b)

let c=a.flat(Infinity)
console.log(c,'c')