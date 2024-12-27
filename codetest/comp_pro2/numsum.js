let count = new Map();

function dns(numbers, sum) {
    if (!numbers || numbers.length === 0) {
        //console.log(sum);
        if(!count.has(sum))
        {
            count.set(sum, 1);
        }
        else
        {
            count.set(sum, count.get(sum) + 1);
        }
        //return sum;
    }
    else {
        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                dns(numbers.slice(1), sum - numbers[0])
            }
            else if (j === 1) {
                dns(numbers.slice(1), sum + numbers[0])
            }
        }
    }




}

function solution(numbers, target) {
    var answer = 0;
    //numbers 각각이 +, - 값으로 나눠지는 트리 형태라 생각하자.
    //numbers의 순서는 변경하지 않는다.

    

    for (let j = 0; j < 2; j++) {
        if (j === 0) {
            if (target === dns(numbers.slice(1), -numbers[0], target)) {
                answer++;
            }
        }
        else if (j === 1) {
            if (target === dns(numbers.slice(1), numbers[0], target)) {
                answer++;
            }
        }
    }

    //console.log(count);

    if(count.has(target))
    {
        answer = count.get(target);
    }




    return answer;
}

console.log(solution([1, 1, 1, 1,1],3))

// let length = [1, 2, 3, 4];
// //let check = length.slice(1);
// // console.log(length);
// // console.log(check);

// for (let i = 0; i <= 4; i++) {
//     console.log(length.slice(i));
// }