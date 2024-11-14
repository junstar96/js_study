

// function solution(s) {
//     var answer = 0;

//     const Num = {
//         "zero" : 0, "one" : 1, 
//         "two" : 2, "three" : 3, 
//         "four" : 4, "five" : 5, 
//         "six" : 6, "seven" : 7, 
//         "eight" : 8, "nine" : 9, 
//     }
    
    
//     s = s.replace(/zero/g, 0);
    
//     s = s.replace(/one/g, 1);
    
//     s = s.replace(/two/g, 2);
    
//     s = s.replace(/three/g, 3);
    
//     s = s.replace(/four/g, 4);
    
//     s = s.replace(/five/g, 5);
    
//     s = s.replace(/six/g, 6);
    
//     s = s.replace(/seven/g, 7);
    
//     s = s.replace(/eight/g, 8);
    
//     s = s.replace(/nine/g, 9);
    

//     answer = s;

//     return answer;
// }

// console.log(Number(solution("one4seveneight")));

//좀 더 심플하게 풀어보자.

// let s = "hello world hello";
// s = s.replace(/hello/g, 1);
// 

//K = 랭크 순
function solution(k, score) {
    var answer = [];
    let result = [];

    

    for(let i = 0;i<score.length;i++)
    {
        if(answer.length < k)
        {
            answer.push(score[i])
            answer.sort((a,b) => b - a);
        }
        else
        {
            for(let j = 0;j<answer.length;j++)
            {
                if(answer[j] <= score[i])
                {
                    let front = answer.slice(0, j);
                    let behind = answer.slice(j, -1);
                    answer = [...front, score[i], ...behind];
                    answer.sort((a,b) => b - a);
                    break;
                }
            }

            
        }

        result.push(answer[answer.length-1]);
    }
    return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
//console.log(solution([1, 7, 1, 2]));

