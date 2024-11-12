//큰 숫자를 쓸 때 해볼 방법
// let check_num = [1,2,3,4]

// console.log(Number(check_num.join("")));

//왜 틀렸을까 보자.

function solution(sizes) {
    var answer = 0;
    let max_x = 0;
    let max_y = 0;
    
    for(let i = 0;i<sizes.length;i++)
        {
            sizes[i].sort();
        }

    console.log(sizes);
    
    for(let i = 0;i<sizes.length;i++)
    {
        if(sizes[i][0] >= max_x)
            {
                max_x = sizes[i][0];
            }
        
        if(sizes[i][1] > max_y)
            {
                max_y = sizes[i][1];
            }
    }
    
    answer = max_x * max_y;
    
    
    return answer;
}

console.log(solution([[10, 20], [20, 10], [15, 15]]));

