function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let totalLength = 0;
    let intoBridge = new Array(bridge_length).fill(0);
    //bridge length : 스택 쌓을 수 있는 리스트 크기
    //weight : 스택 내에 들어있을 수 있는 트럭의 총 합. 가중치
    //truck_weights : 트럭 리스트


    while(truck_weights.length > 0)
    {
        let shifted = intoBridge.shift();
        totalLength -= shifted;
        if(totalLength + truck_weights[0] <= weight)
        {
                let element = truck_weights.shift();
                intoBridge.push(element);
                totalLength += element;
                answer++;
        }
        else
        {
            intoBridge.push(0);
            answer++;
        }
            
    }

    while(intoBridge.length > 0)
    {
        intoBridge.shift();
        answer++;
    }


    return answer;
}

console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));