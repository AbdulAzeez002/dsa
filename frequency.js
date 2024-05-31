const stringname='azeez'
const hello=stringname.split('')
const free=hello.reduce((arr,currval)=>{
if(arr[currval]>0){
    console.log(currval)
   arr= arr[currval]++
   return arr
}else{
    arr[currval]=1
    return arr;
}
},{})
console.log(free)


