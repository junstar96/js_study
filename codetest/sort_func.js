// for(let i = 1;i<=10;i++)
// {
//     if(i%2 === 0)
//     {
//         console.log(i);
//     }
// }

// //바깥에서 키와 밸류를 꺼내는 건 이런 식으로 가능.
// let {name, age} = {
//     name : "hee",
//     age : 13
// }

// //이름을 as 써서 변경한다고 생각하자.
// let {name : key, age : value} = 
// {
//     name : "hee",
//     age : 13
// }

// console.log(name);
// console.log(age);
// console.log(key);
// console.log(value);

// ----------------------------
// 단축 구문

const name = "lee";
const age = 13;

//사용하려는 변수와 key의 이름이 같다면 생략 가능
let obj = {name,age};

//전개구문 : 내용물을 펼친다?
//배열, 객체를 풀어서 작업이 가능하다.

function getnum(a,b,c, ...arg)
{
    console.log(a,b,c);
    console.log(...arg);
}

getnum(1,2,3,4,5,6,7,8,9);

//템플릿 리터럴 template literal 
//기존의 따옴표가 아니라 `` 이걸 이용하는 것. 
//

let ch_str = ["abce", "abcd", "cdx"]
ch_str.sort(function(a,b){
    if(a[2] > b[2])
    {
        return 1;
    }
    else if(a[2] === b[2])
    {
        if(a > b)
        {
            return 1;
        }
        else{
            return -1;
        }

    }
    else if(a[2] < b[2])
    {
        return -1;
    }
})

console.log(ch_str);