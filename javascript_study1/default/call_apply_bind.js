//call, apply, bind

//함수 내에서 this를 바인딩 함으로써 이런 게 가능.
var func = function(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    console.log(this);
}

var t1 = func = new func(1,2,3);

//명시적 바인딩
var func2 = function(a,b,c){
    console.log(this, a,b,c);
}

//아예 this가 가리킬 곳을 알려준다.
func2.call({x : 10},4,5,6);

//apply는 배열을 받는다.
func2.apply({x : 10},[4,5,6]);

function Person(name,gender){
    this.name = name;
    this.gender = gender;
}

function student(name, gender, grad)
{
    Person.call(this, name,gender);
    this.grad = grad;
}

//spread operatior : ... 앞에 점 세 개 붙이는 것. array를 완전히 풀어 벌인다.

//bind 메서드
//call, apply와 다르게 바로 불러지지 않는다. 
//목적 :1.  함수에 this를 미리 적용한다. 2. 부분 적용 함수
//함수에 this를 미리 적용.

//밑 처럼 미리 적용해 줄 수 있다.
var testfunc = func2.bind({a : 20});
testfunc();

//밑 처럼 미리 값을 선점해 줄 수 있다.
var testfunc2 = func2.bind({a : 20},4,5);
testfunc2(10);