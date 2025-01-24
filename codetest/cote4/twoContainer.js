// function solution(order) {
//     var answer = 0;
//     //원래대로 들어가는 트레일러
//     let mainTrailer = [];

//     //역순으로 들어가는 트레일러
//     let subTrailer = [];
//     for (let i = 1; i <= order.length; i++) {
//         mainTrailer.push(i);
//     }

//     for (let i = 0; i < order.length; i++) {
//         while (order[i] > mainTrailer[0]) {
//             const temp = mainTrailer.shift();
//             subTrailer.unshift(temp);
            
//         }

//         if (mainTrailer.length > 0 && order[i] === mainTrailer[0]) {
//             mainTrailer.shift();
//             answer++;
//         }
//         else if (subTrailer.length > 0 && order[i] === subTrailer[0]) {
//             subTrailer.shift();
//             answer++;
//         }
//         else {
//             break;
//         }
//     }

//     //1부터 n까지 증가하는 리스트가 필요하며 
//     return answer;
// }
//위의 코드는 너무 효율이 떨어짐

function solution(order) {
    const stack = []; // 보조 컨테이너 벨트
    let current = 1; // 컨테이너 벨트에서 현재 처리 중인 상자 번호
    let count = 0; // 실은 상자 개수

    for (let target of order) {
        // 필요한 상자를 실을 때까지 컨테이너 벨트에서 상자를 보조 컨테이너로 이동
        while (current <= order.length && current < target) {
            stack.push(current);
            current++;
        }

        console.log(stack);

        // 컨테이너 벨트에서 바로 상자를 실을 수 있다면
        if (current === target) {
            count++;
            current++;
        }
        // 보조 컨테이너 벨트에서 상자를 실을 수 있다면
        else if (stack.length > 0 && stack[stack.length - 1] === target) {
            stack.pop();
            count++;
        }
        // 상자를 실을 수 없으면 종료
        else {
            break;
        }
    }

    return count;
}


console.log(solution([1,2,3,5,4]));
