// let x = {
// name : "hello",
// key : "2wqseq"
// }

// let vals = Object.values(x);
// console.log(vals)
// let keys = Object.keys(x);
// console.log(keys)
// let entries = Object.entries(x);
// console.log(vals)

// //assign : 복사해 준다.
// let new_object = {};
// Object.assign(new_object, x);
// console.log(new_object)
// let new_object2 = {};
// Object.assign(new_object2, x, {name : "world"});
// console.log(new_object2);





//사전을 죄다 풀어서 다시 합쳐주기
let x = {
name : "hello",
key : "2wqseq"
}
let y = {
    gender : "y"
}

//클래스처럼 함수로 만들어서 여럿 찍어내기 가능
function GetObject(name, age)
{
    this.name = name;
    this.age = age; 
}

// ... = 스프레드 오퍼레이터
let z = {...x, ...y};
console.log(z);

console.log(JSON.stringify(x));

