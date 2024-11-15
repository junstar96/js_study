//배열 쪽의 문법을 기억해 보자.
//push, pop은 똑같이 뒤의 것을 건든다.
//shift는 앞의 값을 빼고, unshift는 앞에 값을 추가한다. popfront, pushfront라고 생각하자.

let foods = ["치킨","피자"];
foods.unshift("짜장");
console.log(foods);

//splice : 중간의 값을 replace 한다. 
//처음 값은 시작 위치, 중간 값은 몇 개를 삭제할 것인가, 마지막 값은 추가할 값이다.
foods.splice(1,1,"라면", "볶음밥");
console.log(foods);
//slice : 시작과 끝 값을 정하면 그 부분을 잘라온다.

//foreach : 함수 리턴이 없는 반복문
//map : 함수 리턴이 존재하는 반복문, 새 배열 만든다고 생각하면 좋을 듯.
let new_foods = foods.map(function(ele)
{
    return ele+"2";
})

console.log(new_foods);

//filter : 배열 안에서 잘라낼 수 있는 값
let fil = foods.filter(function(ele)
{
    return ele.length > 2;
})

console.log(fil);