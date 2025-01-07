function solution(numbers) {
    const n = numbers.length;
    const result = Array(n).fill(-1); // 결과 배열을 -1로 초기화
    const stack = []; // 인덱스를 저장할 스택

    for (let i = 0; i < n; i++) {
        // 스택에 있는 원소 중 numbers[i]보다 작은 원소의 뒷 큰수를 업데이트
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const idx = stack.pop();
            result[idx] = numbers[i];
        }
        // 현재 인덱스를 스택에 추가
        stack.push(i);
    }

    // 스택에 남아 있는 인덱스는 뒷 큰수가 없으므로 결과 배열에 -1이 그대로 남음
    return result;
}
//console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));

//스택을 사용하여 푸는 방법도 있구나. 이건 잘 봐두도록 하자.