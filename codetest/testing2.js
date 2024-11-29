function solution(s, skip, index) {
    var answer = '';
    let skip_list = skip.split('').map(x=>x.charCodeAt(0));
    let s_list = s.split('').map(x=>{
        let fin = x.charCodeAt(0);
        let loop = 0;
        while(loop<index)
        {
           
            fin += 1;
            if(fin > 'z'.charCodeAt(0))
            {
                fin = 'a'.charCodeAt(0);
            }

            if(skip_list.includes(fin))
            {
                continue;
            }
            else
            {
                loop+=1;
            }

            
        }
        return String.fromCharCode(fin);
    })

    answer = s_list.join('');



    return answer;
}

console.log(solution("aukks","wbqd",5))
