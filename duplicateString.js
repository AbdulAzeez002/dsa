// const stringname='azeez'
// const obj={}
// for(let i=0;i<stringname.length;i++){
//     let char=stringname[i]
//     if(obj[char]>0){
//         obj[char]++;
//     }else{
//         obj[char]=1;
//     }
// }
// let str=''
// for(let key in obj){
//     console.log(key,"======")
//     str=str+key+obj[key]

// }
// console.log(str)


const str='azeez'

let obj={}

for(i=0;i<str.length;i++){
    if(obj[str[i]]>0){
        obj[str[i]]++
    }
    else{
        obj[str[i]]=1

    }
}


// console.log(obj,'obj')

let string=""

for(let x in obj){
//   string=string+x+obj[x]
string=string+x
}


console.log(string)


