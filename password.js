const passwords=["1-3 a: abcdef",
"2-4 b: cdefg",
"3-9 c: cccccc"]

passwords.map((password)=>{
    checkPassword(password)
})

function checkPassword(password){
    let pass=password.split(" ")
    let conditions=pass[0].split("-")
    let item=pass[1].charAt(0)
    let Tocheck=pass[2]
    let count=0
    for(let i=0;i<Tocheck.length;i++){
         if(item==Tocheck[i]){
            count++
         }
    }

    if(count>=conditions[0] && count<=conditions[1]){
        console.log(Tocheck," is valid")
    }
    else{
        console.log(Tocheck," is not valid")
    }

}

