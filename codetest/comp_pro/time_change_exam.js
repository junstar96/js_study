//숫자를 복잡하게 처리해야 하는 문제에선 가능하면 하나를 최대한 간소하게 작업하도록 하자.
//시간 분침 따로 계산하려니까 훨씬 계산도 길어지고 복잡해져서 기존 문제는 해결이 어려웠던 것 같다.
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