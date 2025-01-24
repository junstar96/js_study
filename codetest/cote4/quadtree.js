function solution(arr) {
    var answer = [0, 0];
    

    function quadinput(start_x, start_y,size) {
        let startpoint = -1;
        console.log(start_x, start_y, end_x, end_y);
        if(start_x === end_x && start_y === end_y)
        {
            return;
        }
        let maxCount = (end_x - start_x) * (end_y - start_y);
        let count = 0;
        for (let i = start_y; i < end_y; i++) {
            for (let j = start_x; j < end_x; j++) {
                if(startpoint === -1)
                {
                    if(startpoint === -1)
                    {
                        startpoint = arr[i][j];
                        count++;
                    }
                    else if(startpoint === arr[i][j])
                    {
                        count++;
                    }
                }
            }
        }

        if(count === maxCount)
        {
            answer[startpoint]++;
        }
        else
        {
            const half_x = Math.floor(end_x / 2);
            const half_y = Math.floor(end_y / 2);
            quadinput(start_x, start_y, half_x, half_y, list);
            quadinput(half_x, start_y, end_x, half_y, list);
            quadinput(start_x, half_y, half_x, end_y, list);
            quadinput(half_x, half_y, end_x, end_y, list);
        }

    }

    quadinput(0,0,arr[0].length, arr.length, arr);


    return answer;
}

function solution(arr) {
    const result = [0, 0]; // [0의 개수, 1의 개수]

    // 재귀적으로 압축을 수행하는 함수
    const compress = (x, y, size) => {
        const firstValue = arr[x][y];
        let isUniform = true;

        // 현재 영역이 동일한 값으로 이루어져 있는지 확인
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== firstValue) {
                    isUniform = false;
                    break;
                }
            }
            if (!isUniform) break;
        }

        if (isUniform) {
            // 압축 가능: 값 하나를 결과에 추가
            result[firstValue]++;
        } else {
            // 압축 불가능: 네 영역으로 나누어 재귀적으로 처리
            const newSize = size / 2;
            compress(x, y, newSize);
            compress(x, y + newSize, newSize);
            compress(x + newSize, y, newSize);
            compress(x + newSize, y + newSize, newSize);
        }
    };

    // 초기 영역 전체에 대해 압축 수행
    compress(0, 0, arr.length);

    return result;
}


console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]));