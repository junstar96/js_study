//피로도 시스템
//피로도를 소비해서 던전을 돌 수 있다(던파처럼)
//최소 피로도 : 던전 입장시 피로도(이 피로도 이상 있어야 입장 가능), 
//소모 피로도 : 던전 탐험 마쳤을 때 소모되는 피로도

const listmake = (k,newlist, findinglist) => {
    if(newlist.length === findinglist.length)
    {
        let result = 0;
        newlist.forEach(element => {
            if(k >= findinglist[element][0])
            {
                result++;
                k -= findinglist[element][1];
            }
        });


        return result;


        //console.log(newlist);

        //return newlist;
    }
    else
    {
        let answer = 0;
        //재귀함수를 계속 호출하여 리스트를 부르기
        for(let i = 0;i<findinglist.length;i++)
        {
            let check = [...newlist];
            if(check.includes(i))
            {
                continue;
            }
            check.push(i);
            
            answer = Math.max(answer, listmake(k,check, findinglist));
        }

        return answer;

        //return newlist;
    }

}


function solution(k, dungeons) {
    //k 현재 피로도
    //문제가 완전탐색 하라고 하니 완전 탐색으로 해보자.
    var answer = -1;

    //시작 위치를 참고하여 
    for(let i = 0;i<dungeons.length;i++)
    {
        //지나간 리스트만 기록해 보도록 하자.
        let newlist = new Array();
        newlist.push(i);
        answer = Math.max(answer, listmake(k,newlist, dungeons));
    }

    if(answer === 0)
    {
        answer = -1;
    }
    return answer;
}

console.log(solution(80,[[80,20],[50,40],[30,10]]))