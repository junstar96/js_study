

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

function tominuite(data)
{
    const [h, m] = data.split(":");
    return Number(h) * 60 + Number(m);
}


function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let video_len_arr = tominuite(video_len);
    let pos_arr = tominuite(pos);
    let op_start_arr = tominuite(op_start);
    let op_end_arr = tominuite(op_end);

    if(pos_arr >= op_start_arr && pos_arr <= op_end_arr)
        pos_arr = op_end_arr;

    commands.forEach(data => {
        let check = data === "next" ? 10 : -10;
        pos_arr += check;

        if(pos_arr < 0)
            pos_arr = 0;

        if(pos_arr > video_len_arr)
        {
            pos_arr = video_len_arr;
        }


        if(pos_arr >= op_start_arr && pos_arr <= op_end_arr)
            pos_arr = op_end_arr;
    });

    const [h, w] = [Math.floor(pos_arr/60), pos_arr%60 >= 10? pos_arr%60 : `0${pos_arr%60}`];

    answer = [h,w].join(":");

    
    return answer;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]))

console.log(solution("10:55","00:05","00:15","06:55",["prev", "next", "next"]))

console.log(solution("07:22","04:05","00:15","04:07",["next"]))


