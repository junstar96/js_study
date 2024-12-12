function solution(s) {
    var answer = -1;
    //소괄호, 중괄호, 대괄호가 각자 있고 그걸로 문자열을 판별하자?
    
    if(s.length %2 !== 0)
    {
        return 0;
    }

    

    //틀린 문자열의 종류는 어떻게 구하는가.
    //1. 괄호가 닫히지 않은 경우
    //2. 괄호 기호 숫자가 다른 경우

    //해결 방법 : 정규식?
    //정규식으로 풀어보려 했는데 괄호 내부도 같아야 하기 때문에 정규식은 아닌 듯 하다.

    //그럼 괄호를 전부 체크해 봐야 하나?
    
    //원본 비교 후 이렇게 회전시키자

    let low_opener = false;
    let middle_opener = false;
    let high_opener = false;
    for(let i = 0;i<s.length;i++)
    {
        let str = s.slice(i) + s.slice(0,i);



        //여기는 작업이 끝나고 문자열을 왼쪽으로 옮기는 작업
        
        console.log(str);
    }
    return answer;
}

console.log(solution("[](){}"))

// let regex1 = /\}[a-zA-Z0-9\{\}\(\)\[\]]*\{/;
// let regex2 = /\)[a-zA-Z0-9\{\}\(\)\[\]]*\(/;
// let regex3 = /\][a-zA-Z0-9\{\}\(\)\[\]]*\[/;

//이 방법으로는 연속되는 괄호가 나올 때 걸릴 수 밖에 없다.

//  let check = "{abce}{{}}"

//  console.log(regex1.test(check));


//해결 방법은 스택이구나. 이 문제를 보고 공부를 해보자.
// function solution(s) {
//     let answer = 0;
//     let stack = [];
//     let isCorrect = true;
  
//     if (s.length % 2 === 1) return 0;   //주어진 문자열이 홀수인 경우에는 바로 0을 리턴
    
//     for(let i=0; i<s.length; i++){       
//        let str = s.slice(i) + s.slice(0,i);   //문자열을 왼쪽으로 1칸씩 회전
//        isCorrect = true;
      
//         for(let n of str){
//             if(n === "[" || n === "{" || n === "(" ){
//                 stack.push(n);   //[ or { or ( 이면 stack으로 push
//             }else{
//                 let opening = stack.pop();   //stack에 쌓여있는 요소중 마지막
//                 //↓ 짝이 맞으면 continue
//                 if (opening === "(" && n === ")") continue;
//                 if (opening === "{" && n === "}") continue;
//                 if (opening === "[" && n === "]") continue;
//                 //↓ 짝이 맞지 않으면 실패, isCorrect를 false로 만들고 break
//               	isCorrect = false;
//                 break;
//             };
//         };
      
//         //짝이 맞는다면 성공이므로 isCorrect는 true, answer에 +1씩 더하기
//         if (isCorrect) answer++;
//     };
//     return answer;
// };