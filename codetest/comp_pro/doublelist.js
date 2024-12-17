function solution(n, left, right) {
    var answer = [];
    //배열을 직접 만들면 숫자가 넘어가 버린다.
    //i번째 나눠진 배열은 i가 i개 있고 나머지는 순서대로 숫자가 들어 있다.
    //223, 333 이런 식으로

    //그러니 시작 지점부터 확인을 해봐야 한다.
    let count_left = Math.floor(left / n);
    let count_right = Math.floor(right / n);
    //시작 위치 
    let start = n - (left - count_left);
    let end = n - (right - count_right);

    

    while (count_left <= count_right) {
        let inputList = [];
        if (n * count_left <= left && n * (count_left + 1) > left) {
            for (let i = left % n; i < n; i++) {
                if (i <= count_left) {
                    inputList.push(count_left + 1);
                }
                else {
                    inputList.push(i + 1);
                }
            }
        }
        else if (n * count_left > left && n * count_left < n * count_right) {
            for (let i = 0; i < n; i++) {
                if (i <= count_left) {
                    inputList.push(count_left + 1);
                }
                else {
                    inputList.push(i + 1);
                }
            }
        }
        else if (n * count_left === n * count_right) {
            for (let i = 0; i <= right % n; i++) {
                if (i <= count_left) {
                    inputList.push(count_left + 1);
                }
                else {
                    inputList.push(i + 1);
                }
            }
        }


        answer = [...answer, ...inputList];
        count_left++;
    }






    return answer;
}

console.log(solution(3,2,5));