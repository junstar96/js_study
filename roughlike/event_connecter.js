import * as ev from "events";
//require는 이전 문법이고 현재 es6 이후 문법은 import인 모양이다. 
//eventemitter : 이벤트가 발생했을 때 키를 받을 수 있는 node js의 라이브러리
//이벤트 핸들러를 준다. readline도 깊게 들어가면 이 쪽에 가깝다.

//on : 이벤트를 아예 하나 잡아놓는다.
//once : 이벤트를 한 번만 부를 수 있도록 만들어 놓는다.

export const myemitter = new ev.EventEmitter();
// myemitter.once('myevent', (test)=>{console.log(`hello world ${test}`)});
// myemitter.once('pause', ()=>{
//     console.log(`pause`);
//     process.exit();
// });
// myemitter.once('myevent2', (test)=>{console.log(`world ${test}`)});
// myemitter.once('myevent3', (test)=>{console.log(`hello w ${test}`)});
// myemitter.once('myevent4', (test)=>{console.log(`horld ${test}`)});



async function Test() {



    myemitter.emit('myevent3');
    myemitter.emit('myevent3');
}

//Test();

