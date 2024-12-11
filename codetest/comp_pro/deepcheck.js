// function solution(n) {
//     var answer = 0;
//     //1과 2로 이루어진 중복수열의 방식으로 진행할 수 있는가?
//     //결국 덧셈의 문제라서 힘들 수 있어 보인다.
//     //2가 0개 = 1
//     //2가 1개 = (n-1)

    
    
    
//     //2의 숫자가 1개 늘어날 때마다 루프 돌리는 방법으로 가보자.
//     let twocount = 0;
//     while(twocount * 2 < n)
//     {
//         let count = 1;
//         for(let i = 0;i<twocount;i++)
//         {
//             count = count * (n-(twocount +i));
//         }
//         answer += count;
//         console.log(twocount, count);
//         twocount++;
//     }

//     if(twocount * 2 === n)
//     {
//         answer += 1;
//     }

    


//     return answer % 1234567;
// }

// console.log(solution(6));

//위의 것이 왜 틀렸는지도 생각해보자.

function solution (n) {
    let answer = 0;
  //피보나치니까 연습해보자.
    let check = new Array(n+1).fill(0);
    
    check[1] = 1;
    check[2] = 2;
    
    for(let i = 3;i<=n;i++)
    {
        check[i] = (check[i-1] + check[i-2])%1234567;
    }
    
    return check[n];
}