//함수의 특징을 연습해보자.
//1. 변수에다 함수를 할당할 수 있다.
//함수가 값처럼 취급된다.
//함수가 나중에 사용할 수 있도록 조치가 되었다.
const sayhello = function() {
    console.log("hello world");
}

// 2. 함수를 인자로 다른 함수에 전달할 수 있다.
// 2-1 콜백 함수 : 매개 변수로써 쓰이는 함수
// 2-2 고차 함수 : 함수를 인자로 받거나 return 하는 함수
function callfunction (func)
{
    func();
}

//뒤의 return 값이 받은 값의 함수가 되는 것이다.
function returnfunction (x)
{
    console.log("더하는 값:",x);
    return function(num){
        return x + num;

    }
}

callfunction(sayhello);
const addfive = returnfunction(5);
console.log(addfive(10));

// 3. 객체(object) 안에도 넣을 수 있다.
//function으로 추가하면 this를 쓸 수 있지만 화살표 함수로 하면 바인딩하지 않아서 사용할 수 없다.
let cnt = {
    name : "johe",
    age : 12,
    checkinfo : () => {
        console.log(`name : ${this.name}, 
        age : ${this.age}`)
    },

    checkinfo2 : function () {
        console.log(`name : ${this.name}, 
        age : ${this.age}`)
    }
}

cnt.checkinfo();
cnt.checkinfo2();

//4. 배열의 요소를 함수로 할당.
const testarray = {
    function(a,b){
        return a+b;
    },
    function(a,b)
    {
        return a-b;
    }
}