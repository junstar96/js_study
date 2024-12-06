//n : 참가자 수
//a : 라이벌 1
//b : 라이벌 2
//해당 문제 : 이 둘이 언제 만나느냐.
function solution(n,a,b)
{
    var answer = 0;
    // a랑 b 중에서 누가 큰지만 알면 되지 않나?
    
    let bigger = Math.max(a,b);
    let smaller = Math.min(a,b);
    
    while(smaller !== bigger)
    {
        if(bigger %2 === 0)
        {
            bigger = bigger/2;
        }
        else
        {
            bigger = (bigger + 1)/2;
        }

        if(smaller %2 === 0)
        {
            smaller = smaller/2;
        }
        else
        {
            smaller = (smaller + 1)/2;
        }
        answer += 1;
    }
    
    
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')

    return answer;
}

console.log(solution(8,4,7));