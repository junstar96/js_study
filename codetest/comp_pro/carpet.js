function solution(brown, yellow) {
    //brown = 2 * (yellow_x + 2 + yellow_y);
    //yellow = yellow_x * yellow_y
    //yellow 블록 1개 : y_x = 1, y_y = 1
    var answer = [];
    let y_block_type = [];
    
    for(let i = 1;i<=Math.sqrt(yellow);i++)
    {
        if(yellow % i === 0)
        {
            y_block_type.push(i);
            if(yellow / i !== i)
            {
                y_block_type.push(yellow / i)
            }
        }
    }
    
    y_block_type.sort((a, b)=>b-a);
    
    for(let i = 0;i<y_block_type.length;i++)
    {
        if(2*(y_block_type[i] + 2 + yellow/y_block_type[i]) === brown)
        {
            answer[0] = y_block_type[i] + 2;
            answer[1] = (yellow/y_block_type[i]) + 2;
            break;
        }
    }
    
    
    
    
    return answer;
}