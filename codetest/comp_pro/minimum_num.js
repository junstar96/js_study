//최대 공약수를 구하기
function gcd(a,b)
{
    while(b>0)
    {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function lcm(a,b)
{
    return (a * b) / gcd(a,b);
}

//최소 공배수를 구하기


function solution(arr) {
    var answer = 1;
    for(let i = 0;i<arr.length;i++)
    {
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}

console.log(solution([2,6,8,14]	))