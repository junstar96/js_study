//메모리 할당에 대한 공부다.
//js에선 변수명을 담는 메모리, 데이터를 담는 메모리가 있다고 보면 된다.
//이 때 상위 값(위의 경우 변수 명) 에 담겨 있는 것으로 보이는 값이 든 메모리 값을 불러 오는 형태가 된다.

// let check = 10
// let check2 = 10
// ---------------
// 변수명 |check, 주소값 : 1002, 연결 : @5500|check2, 주소값 : 1003, 연결 : @5500|
// 데이터 |10, 주소값 : 5500||

//위의 경우가 배열이나 여러 참조가 들어갈 경우 깊게 들어가는 만큼 할당 칸이 늘어난다.
//let check = {name : 10, age : {get : 10, back : 20}}
//---------------------------------
// 변수명 |check, 주소값 : 1002, 연결 : @7002|check2, 주소값 : 1003, 연결 : @5500|
// 데이터 |10, 주소값 : 5500|12, 주소값 : 5501|
// 참조 데이터 값|name, 주소값 : 7002, 연결 : @5500|age, 주소값 : 7003, 연결 : @8000|
// 참조의 참조 데이터 값 |get, 주소값 : 8000, 연결 @5500|back, 주소값 : 8001, 연결 : @5501 |
//배열이 0부터 시작하고 1개씩 늘어나는 것은 이런 식으로 블록이 형성되고 그 맨 앞 값을 가지기 때문.

let user = 
{
    name : "hello",
    age : 13
}

var change = function(user, newname)
{
    let newuser = user;
    newuser.name = newname;
    return newuser;
}

let user2 = change(user, "world");

if(user === user2)
{
    console.log(user.name);
    console.log(user2.name);
}

// 얕은 복사 방법 1
// 이 방법은 변수가 여러 개가 들어갈 경우엔 오류 나기 쉽다.
var change2 = (user,newname)=>{
    return {
        name : newname,
        age : user.age
    }
}


let user3 = change2(user, "hello");

if(user !== user3)
{
    console.log(user.name);
    console.log(user3.name);
}

//얕은 복사 방법 2
// 루프문을 사용하기 때문에 아무리 변수가 많아도 복사 가능.
// 중첩된 객체에 대해선 완벽하게 복사할 수 없음.
var change3 = (user,newname)=>{
    let result = {}
    for(var prop in user)
    {   
        result[prop] = user[prop];
        console.log(result[prop],"prop : ", prop);
    }
    return result;
}
let user4 = change3(user, "hello");

//깊은 복사 : 아예 완전히 값을 복사한 별개의 오브젝트를 만드는 것. 제일 깊은 메모리 안의 값까지 복사하는 것.
//재귀적으로 수행하는 방법이 있어야 한다.

var change4deep = (target)=>
{
    let result = {}
    if(typeof target === 'object' && target !== null)
    {
        //받은 값이 객체 형태를 띄고 있다면 그 객체 형태의 안으로 들어가서 다시 복사를 시작한다.
        for(var prop in target)
        {
            console.log("prop: ", prop, "value : ", target[prop]);
            result[prop] = change4deep(target[prop]);
        }
    }
    else
    {
        console.log("data:",target);
        result = target;
    }

    return result;
}

var obj = {
	a: 1,
	b: {
		c: null,
		d: [1, 2],
	}
};

var obj2 = change4deep(obj);
console.log(obj2);