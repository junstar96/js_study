function solution(progresses, speeds) {
    //맨 앞의 값을 순차적으로 꺼내는 방식으로 이뤄지면 될 듯 하다.
    //array.shift를 잘 활용해보자.
    var answer = [];
    //0부터 시작하여 보자
    let index = 0;
    let speedcount = 1;
    
    while(progresses.length !== 0)
    {
        let shiftAtOnce = 0;
        speedcount = Math.ceil((100 - progresses[index]) / speeds[index]);  
        while(progresses.length !== 0)
        {
            if(progresses[0] + speedcount * speeds[0] >= 100)
            {
                
                console.log(progresses.shift(),speeds.shift());
                shiftAtOnce++;
            }
            else
            {
                break;
            }
        }
        answer.push(shiftAtOnce);
    }
    
    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]))