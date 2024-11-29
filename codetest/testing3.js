
// function solution(ingredient) {
//     //문제의 요구 조건은 1,2,3,1이 되는 순서를 잘라내고 다시 순회를 하는 거다
//     var answer = 0;
//     let lt = ingredient;
//     let checkfind = lt.join('');
//     while (checkfind.includes("1231")) {
//         checkfind = checkfind.replace("1231", "");
//         answer+=1;
//     }
    



//     return answer;
// }

// console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]	))

//위의 코드대로 하면 너무 시간이 오래 걸리는 문제가 생긴다.

function solution(ingredient) {
    //문제의 요구 조건은 1,2,3,1이 되는 순서를 잘라내고 다시 순회를 하는 거다
    var answer = 0;
    let stack = [];
    for(let i = 0;i<ingredient.length;i++)
    {
        stack.push(ingredient[i]);
        if(stack.slice(-4).join('') === '1231')
        {
            stack.splice(-4);
            answer+=1;
        }
        console.log(stack);
    }
    



    return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]	))
