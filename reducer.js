const dub = arr.reduce((total,value)=>{
   
    if(total[value] === undefined){
        total[value] = 1;

        return total;
    }else{
        total[value]++;
        return total
    }



},{})

console.log(dub);