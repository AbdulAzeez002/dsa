// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//    let arr = input.split("\n")[1].split(" ");
   
//    let isNegative = arr.some(a => a < 0);
//    if(!isNegative){
//        arr.sort((a,b) => (+a) - (+b));
//        console.log(+arr[0]);
//    }else{
//        let nArr = arr.filter(a=> a < 0).sort((a,b) => +(a) - +(b));
//        let pArr = arr.filter(a => a >= 0).sort((a,b) => +(a) - +(b));
//        let nDiff = Math.abs(nArr)[0] - 0;
//        let pDiff = pArr[0]-0;
//        if(nDiff < pDiff){
//            console.log(+nArr[0]);
//        }else{
//            console.log(pArr[0])
//        }
//    }
//        // Writing output to STDOUT
// }



// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     let arr2=[]
//     let arr = input.split("\n")[1].split(" ");
//     let map=arr.map((e)=>{
//         return Number(e)
//     }) 
//     let currentValue;

let map=[21,6,-2,3,4,9]
let arr2=[]
    for(let i=0;i<map.length;i++){
       
        let temp=Math.abs(map[i])
        arr2.push(temp)
        currentValue=arr2.sort((a,b)=>a-b)
        
       


    } 
    console.log(currentValue[0])    
    // Writing output to STDOUT

