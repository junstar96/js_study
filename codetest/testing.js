

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

//글자 겹치는 거 지우기
// function solution(babbling) {
//     var answer = 0;
//     let word_list = ["aya", "ye","woo","ma"];

//     for(let i = 0;i<babbling.length;i++)
//     {
//         let word = babbling[i];
//         let is_chaining = false;
//         for(let j = 0;j<word_list.length;j++)
//         {
//             if(word.includes(word_list[j] + word_list[j]))
//             {
//                 is_chaining = true;
//                 break;
//             }
//         }
//         let length_check = 2;
//         while(length_check <= 3)
//         {
//             if(word.slice(0,length_check) === word_list[0] || word.slice(0,length_check) === word_list[1] ||
//                word.slice(0,length_check) === word_list[2] || word.slice(0,length_check) === word_list[3])
//             {
//                 word = word.slice(length_check);
//                 length_check = 2;
//             }
//             else
//             {
//                 length_check++;
//             }
//         }



//         if(is_chaining)
//             continue;

//         if(word.length === 0)
//         {
//             answer++;
//         }
//     }

//     return answer;
// }


// let check = "hello world hellohello";
// console.log(check.slice(2));


//JOIN을 이용한다는 사실을 까먹지 말고 기억하도록.
// function solution(X, Y) {
//     let answer = ''
//     X = X.split("")
//     Y = Y.split("")
//     for(let i = 0 ; i < 10 ; i ++) {
//         const curX = X.filter(a => Number(a) === i).length
//         const curY = Y.filter(a => Number(a) === i).length
//         answer+=String(i).repeat(Math.min(curX, curY))
//         console.log(answer);
//     }
//     if(answer === '') return "-1"
//     if(Number(answer) === 0) return "0"
//     return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
// }

//console.log(solution("100","103045"));
// let arr = [1,2,3,3,5,0];
// let arr2 = [1,2,3, 6];
// let result = arr.filter((element)=>arr2.includes(element));
// console.log(result);

// console.log(solution("5525","1255"));



function solution(answers) {
    var answer = [];
    let check1 = [1, 2, 3, 4, 5];
    let check2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0,0,0];
    
    for(let i = 0;i<answers.length;i++)
    {
        console.log(answer[i],check1[i%check1.length],check2[i%check2.length],check3[i%check3.length]);
        if(answer[i] === check1[i%check1.length])
        {
            count[0]++;
        }
        
        if(answer[i] === check2[i%check2.length])
        {
            count[1]++;
        }
        
        if(answer[i] === check3[i%check3.length])
        {
            count[2]++;
        }
    }

    console.log(count[0],count[1],count[2]);
    
    let bignum = 0;
    
    for(let i = 0;i<3;i++)
    {
        if(count[i] > bignum)
        {
            bignum = count[i];
        }
    }
    
    for(let i = 0;i<3;i++)
    {
        if(count[i] === bignum)
        {
            answer.push(i+1);
        }
    }
    
    return answer;
}

console.log(solution([1,2,3,4,5]));