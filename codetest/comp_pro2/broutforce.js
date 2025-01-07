function generateCombinations(arr) {
    // 여길 채워주세요!
    let answer = [[]];
    

    //각각의 값들을 순회하면서 배열을 추가하는 방법도 고려해 보자.
    for(let num of arr)
    {
        let newresult = [];
        for(let combination of answer)
        {
            newresult.push([...combination,num]);
        }
        answer = answer.concat(newresult);
    }

    return answer;
}

console.log(generateCombinations([1, 2, 3]));
// 출력: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]