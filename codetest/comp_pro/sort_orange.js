function solution(k, tangerine) {
    var answer = 0;
    var current_count = 0;
    //종류를 최대한 적게 하자
    //object의 숫자로 정렬을 해보면 어떨까.
    let check = {};
    for(let i = 0;i<tangerine.length;i++)
    {
        if(!Object.hasOwn(check, tangerine[i]))
        {
            check[tangerine[i]] = 1;
        }
        else
        {
            check[tangerine[i]] = check[tangerine[i]] + 1;
        }
    }

    let list = Object.values(check).sort((a,b)=> b - a);
    
    while(current_count < k)
    {
        current_count += list[answer];
        answer+=1;
    }

    return answer;
}

console.log(solution(6,	[1, 3, 2, 5, 4, 5, 2, 3]))