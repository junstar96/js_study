//밑의 코드는 비효율적이란 지적을 받음
// function solution(want, number, discount) {
//     //10개 단위로 자른 discount 가운데 want * number 배열이 있는지 찾는 것
//     var answer = 0;
//     //want 곱하기 number 배열을 만든다.
//     let want_list = [];
    
//     for(let i = 0;i<want.length;i++)
//     {
//         for(let j = 0;j<number[i];j++)
//         {
//             want_list.push(want[i]);
//         }
//     }

//     want_list.sort();

//     for(let i = 0;i<discount.length;i++)
//     {
//         let discountDay = discount.slice(i, 10 + i);
//         discountDay.sort();

//         if(discountDay.length !== 10)
//         {
//             break;
//         }

        

//         if(JSON.stringify(want_list) === JSON.stringify(discountDay))
//         {
//             answer = i + 1
//             break;
//         }

//     }
    
//     return answer;
// }

//여기 코드는 슬라이딩 윈도우 기법을 적용한 방법
function solution(want, number, discount) {
    let answer = 0;

    // 원하는 제품과 수량을 맵으로 저장
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    // 현재 10일간의 할인 제품 수량을 맵으로 저장
    const discountMap = new Map();
    for (let i = 0; i < 10; i++) {
        discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
    }

    // 맵 비교 함수
    const mapsMatch = (map1, map2) => {
        if (map1.size !== map2.size) return false;
        for (const [key, value] of map1) {
            if (map2.get(key) !== value) return false;
        }
        return true;
    };

    // 첫 10일을 검사
    if (mapsMatch(wantMap, discountMap)) answer++;

    // 슬라이딩 윈도우로 이동하며 검사
    for (let i = 10; i < discount.length; i++) {
        // 슬라이딩 윈도우: 이전 제품 제거
        const removeItem = discount[i - 10];
        discountMap.set(removeItem, discountMap.get(removeItem) - 1);
        if (discountMap.get(removeItem) === 0) {
            discountMap.delete(removeItem);
        }

        // 슬라이딩 윈도우: 새 제품 추가
        const addItem = discount[i];
        discountMap.set(addItem, (discountMap.get(addItem) || 0) + 1);

        // 검사
        if (mapsMatch(wantMap, discountMap)) answer++;
    }

    return answer;
}
