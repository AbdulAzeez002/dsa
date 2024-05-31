function a(){
    var a=10;
    function b(){
        console.log(a)
    }

    return b;
}

let x=a()

x()