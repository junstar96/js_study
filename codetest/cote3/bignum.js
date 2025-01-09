function solution(numbers) {
    var answer = '';
    //처음부터 해당 배열을 정렬하고 합치면 된다.
    numbers = numbers.sort((a,b) => {
        let string_A = a.toString();
        let string_B = b.toString();

        return (string_B + string_A) - (string_A + string_B);
    });

    answer = numbers.join('');

    return answer[0] === '0' ? '0' : answer;
}

//console.log(solution([0, 3, 30, 34, 5, 9, 5, 0]))
console.log('b' > 'a' ? '123' : '124');