function solution(clothes) {
    var answer = 1;
    //옷을 입는 경우의 수는 아예 아무것도 입지 않는 것을 제외하고 다 곱해 보면 된다.
    let clothList = new Map();
    for(let check of clothes)
    {
        if(!clothList.has(check[1]))
        {
            clothList.set(check[1], 1);
        }
        else
        {
            clothList.set(check[1], clothList.get(check[1]) + 1);
        }
    }

    //입지 않는다도 포함하여 곱한다.
    for(let check of clothList.keys())
    {
        answer *= (clothList.get(check) + 1);
    }
    
    //answer = clothList;
    
    //전부 입지 않는다는 경우의 수를 뺀다.
    return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))