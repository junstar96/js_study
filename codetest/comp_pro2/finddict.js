//1개부터 5개까지의 조합의 경우의 수를 전부 구하는 문제


function solution(word) {
    var answer = 1;
    let wordpomList = new Map();
    let currentcount = 1;
    let checkword = ['A'];

    let word_list = ['A','E','I','O','U'];
    

    //각각의 절차마다 절차 상황을 저장하고 숫자를 집어 넣는 방식으로 진행하면 되나?
    while(true)
    {
        if(checkword.join('') === word)
        {
            break;
        }

        if(checkword.length === 5)
        {
            while(true)
            {
                const lastword = checkword.pop();
                if(lastword !== 'U')
                {
                    const inputword = word_list.indexOf(lastword) + 1;
                    checkword.push(word_list[inputword]);
                    answer++;
                    break;
                }
            }
        }
        else
        {
            checkword.push(word_list[0]);
            answer++;
        }
    }
    return answer;
}

console.log(solution('UUUUU'));

let checkword = [];
console.log(checkword.join(''));