function solution(priorities, location) {
    //문제는 우선순위 큐를 쓰라는 것처럼 나온다.
    //a,b,c,d라는 프로세스가 있고 우선순위 순서에 따라 배치된다. 
    //규칙
    //1.실행 대기 큐에서 대기중인 프로세스 하나를 꺼낸다.
    //2.큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있으면 다시 집어넣는다.
    //3. 그런 프로세스가 없으면 그 프로세스를 실행한다.
    //한 번 실행한 프로세스는 큐에 넣지 않고 종료한다.
    var answer = 0;
    let checklist = new Array();

    for(let i = 1;i<=priorities.length;i++)
    {
        checklist.push(i);
    }

    //현재 큐에서 몇 번째로 실행될지 찾는 결과물
    let finding = checklist[location];

    //priorities.sort((a,b) => b - a);
    //console.log(priorities);
    //let other = new Array();
    let answerlist = new Map();

    let biggerlist = [...priorities];
    biggerlist.sort((a,b) => b - a);
    //console.log(biggerlist);

    

    for(let i = 0;;i++)
    {
        let checksum = Infinity;
        while(true)
        {
            //console.log(priorities);
            //console.log("===");
            let shiftqueue = priorities.shift();
            if(shiftqueue < biggerlist[0])
            {
                priorities.push(shiftqueue);
                checklist = [...checklist.slice(1), checklist[0]];
            }
            else
            {
                checksum = checklist.shift();
                answerlist.set(checksum, i + 1);
                biggerlist.shift();
                //console.log(priorities);
                break;
            }
        }

        if(checksum === finding)
        {
            break;
        }
    }

    //console.log(finding);
    //console.log(answerlist.get(finding));
    answer = answerlist.get(finding);

    


    return answer;
}

console.log(solution([2,3,1,2],2))