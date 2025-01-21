function solution(topping) {
    let leftCount = new Map();  // 왼쪽 토핑의 종류와 개수를 저장
    let rightCount = new Map(); // 오른쪽 토핑의 종류와 개수를 저장
    
    let leftSet = new Set();  // 왼쪽 토핑 종류를 관리
    let rightSet = new Set(); // 오른쪽 토핑 종류를 관리
    
    let fairCuts = 0;  // 공평하게 나누는 방법 수

    // 초기에는 모든 토핑을 오른쪽에 추가
    for (const t of topping) {
        rightCount.set(t, (rightCount.get(t) || 0) + 1);
        rightSet.add(t);
    }

    // 왼쪽으로 토핑 이동
    for (const t of topping) {
        // 오른쪽에서 토핑 제거
        rightCount.set(t, rightCount.get(t) - 1);
        if (rightCount.get(t) === 0) {
            rightSet.delete(t);
        }

        // 왼쪽으로 토핑 추가
        leftCount.set(t, (leftCount.get(t) || 0) + 1);
        leftSet.add(t);

        // 공평한 지점인지 확인
        if (leftSet.size === rightSet.size) {
            fairCuts++;
        }
    }

    return fairCuts;
}
