

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

function solution(array, commands) {
    var answer = [];

    commands.forEach(data => {
        let subarr = array.slice(data[0] - 1, data[1]);
        subarr.sort();
        answer.push(subarr[data[2] - 1]);
    });


    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]] ))