debugger;
let a = 10
var d = 7
function outer(){
    let b = 20
    function inner(){
        let c = 40;
        function inner2(){
            debugger;
            let d = 50;
            function inner3(){
                debugger;
                let e = a+b+c+d
                return e
            }
            return inner3();
        }
      return inner2()
    }
    return inner()
}

const output = outer()
console.log(output)