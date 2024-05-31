const str='aeioun'

let vowels=['a','e','i','o','u']

let str1=""
let str2=""

for(let i=0;i<str.length;i++){
    let index=vowels.indexOf(str[i])

    if(index==-1){
        str1=str1+str[i]
    }
    else{
        str2=str2+str[i]
    }
}

console.log(str1+str2)