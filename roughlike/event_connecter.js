import * as readline from "readline";
import * as ev from "events";
//require는 이전 문법이고 현재 es6 이후 문법은 import인 모양이다. 
//eventemitter : 이벤트가 발생했을 때 키를 받을 수 있는 node js의 라이브러리
//이벤트 핸들러를 준다. readline도 깊게 들어가면 이 쪽에 가깝다.

const myemitter = new ev.EventEmitter();
myemitter.on('myevent', ()=>{console.log("hello world")});


const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

myemitter.once('myevent');
console.log("find him");