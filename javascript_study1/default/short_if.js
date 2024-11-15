//단축평가라는 것은 신기하니 적어두자.
let x = 10;
x > 10 || console.log("hello");
x > 10 && console.log("world");

let count = 0;

//
var a = setInterval(() => {
    console.log(count);
    if(count > 3)
    {
        clearInterval(a);
    }
    count++;
    
}, 300);