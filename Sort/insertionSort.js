// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     let numberToInsert=arr[i]
//     let j=i-1

//     while(j>=0 && arr[j]>numberToInsert){
//         arr[j+1]=arr[j]
//         j=j-1

//     }

//     arr[j+1]=numberToInsert

//   }
// }

// const arr=[8,20,-2,4,-6]

// insertionSort(arr)
// console.log(arr)


// let a=[5,6,1,4,3,2]
// for(let i=1;i<a.length;i++){
//     let numberToInsert=a[i]
//     let j=i-1

//     while(j>=0 && a[j]>numberToInsert){
//         a[j+1]=a[j]
//         j=j-1
//     }
//     a[j+1]=numberToInsert
// }


// console.log(a)


let b=[6,7,5,2,1,3]

for(let i=1;i<b.length;i++){
    let num=b[i]
    let j=i-1

    while(j>=0 && b[j]>num){
        b[j+1]=b[j]
        j--;
    }
    b[j+1]=num
}

console.log(b)



// let a=[3,2,4,5,1]
// for(let i=1;i<a.length;i++){
//     let cuurval=a[i];
//     console.log(a[i])
//     for(var j=i-1;j>=0 && a[j]>cuurval;j--){
//         console.log(a[j])
//         a[j+1]=a[j]
       
//     }
//     a[j+1]=cuurval
// }
// console.log(a)