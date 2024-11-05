// function check_hoisting(){
//     console.log(b);
//     var b = 10;
//     console.log(b);
//     var b;
//     console.log(b);
// }


//함수는 호이스팅에서 제일 높은 위치를 차지한다.
function check_hoisting2(){
    console.log(b);
    
    var b = "bbb";

    console.log(b);
    var b = function b(){
        console.log(b);
    }

    console.log(b);

    function b(){
        console.log(b);
    }
    
}

var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
		//var a = 3;
        //내부에서 호이스팅이 되면서 var a는 올라가지만 정의가 되지 않았다는 문제가 생김. 그래서 undefine이 된다. 
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a);


//check_hoisting2();