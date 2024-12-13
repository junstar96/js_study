//연속 부분 수열 합의 개수
//elements를 원형으로 생각하고 계산을 한다.
function solution(elements) {
    //var answer = 0;
    let doubleArray = [...elements, ...elements];
    let newSet = new Set();

    for(let i = 1;i<=elements.length;i++)
    {
        //elements의 배열을 순회한다는 느낌
        for(let j = 0;j<elements.length;j++)
        {
            let check = doubleArray.slice(j,j+i).reduce((a,b) => a + b);
            newSet.add(check);
        }
    }

    


    return newSet.size;
}

console.log(solution([7,9,1,1,4]))
// for(let i = 0;i<5;i++)
// {
//     check = check.slice(1) + check.shift();
// }