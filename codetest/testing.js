//큰 숫자를 쓸 때 해볼 방법
// let check_num = [1,2,3,4]

// console.log(Number(check_num.join("")));

function solution(t, p) {
    var answer = 0;
    var find_num = Number(p);

    for(let i = 0;i<=t.length - p.length;i++)
    {
        var check = Number(t.substring(i,i+p.length));
        if(find_num >= check)
        {
            answer += 1;
        }
    }

    return answer;
}

console.log(solution("3141592", "271"));//2
console.log(solution("500220839878", "7"));//8
console.log(solution("10203", "15"));//3