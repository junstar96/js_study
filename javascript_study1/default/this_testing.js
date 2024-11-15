//js에선 this가 여러 가지를 의미하게 된다. 하나하나 테스트 해보자.
//그냥 this를 검색하면 현재 런타임 중인 환경을 나타낸다.
//console.log(this)
var func = function(num)
{
    console.log(this, num);
}

//func(1);
//함수 안에 든 this는 메서드 안에 있어도 전역변수를 가져온다.
// var obj = {
//     method : function(){
//         console.log(this)
//         function check()
//         {
//             console.log(this);
//         }
//         check();
//     }
// }



//obj.method();

var obj1 = {
	outer: function() {
		console.log("1 =>", this); // (1)
		var innerFunc = function() {
			console.log("2 =>", this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();