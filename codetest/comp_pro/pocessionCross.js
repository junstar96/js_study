//행렬의 곱
function solution(arr1, arr2) {
    
    var answer = [];
    
    //arr1 전체를 순회하면서 다시 arr2를 순회하는 식으로 하자.
    //무조건 곱할 수 있는 조건을 준다고 했으니까 arr2 쪽은 크게 걱정 말자.
    arr1.forEach(left => {
        //answer에 집어 넣을 배열
        let resultArray = [];
        let rightLength = arr2[0].length;

        //arr2의 길이에 따라서 구분 지어 보도록 하자.
        for(let rightpos = 0;rightpos < rightLength;rightpos++)
        {
            let check = 0;
            for(let i = 0;i<left.length;i++)
            {
                check += left[i] * arr2[i][rightpos];
                console.log(left[i] , "*", arr2[i][rightpos],"=", check);
            }
            resultArray.push(check);
        }

        answer.push(resultArray);
        
    });
    
    
    return answer;
}

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))