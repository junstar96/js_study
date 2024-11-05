//클로저
//안에서부터 시작해서 밖으로 한 칸씩 나아간다.
const x = 1;

//이렇게 하는 게 클로저 개념, 내부에서 좀 더 위쪽의 값을 받는 느낌.
function Ctest()
{
    let x = 10;
    var check = function innerC()
    {
        x++;
        console.log(x);
    }

    return check;
}

//이미 함수를 실행했다는 걸 보여주기 위해서 괄호를 한 번 더 넣는 것인가?
//마지막 괄호가 무엇인지는 아직 확실하지 않다. 
//마지막 괄호는 즉시 실행 함수.
//실행 시점의 렉시컬, 그리니까 실행 환경을 기억하기 위해 즉시 실행 함수를 사용한다.
//즉시 실햄 함수를 실행하면 외부 함수는 소멸되고 내부 함수만 남게 된다.
//즉 클로저만 남게 된다.
const increast = function()
{
    let num = 0;
    return function()
    {
        console.log(num++);
    }

}();

//여긴 전역 변수가 나온다. 
//함수는 누가 호출했는가가 아니라
//어디에서 정의를 했는지에 따라서 스코프가 결정된다.
//레시컬 : 환경 
function onother()
{
    console.log(x);
}

//같은 클로저를 사용하더라도 지정하는 변수의 위치는 다르다.
//이 것도 남발하면 가비지컬렉팅이 문제가 생길 수가 있겠다.
let ate = Ctest();
let che = Ctest();
for(var i = 0;i<10;i++)
{
    //ate();
    increast();
}

che();