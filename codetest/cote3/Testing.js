function solution(tickets) {
    let answer = [];
    tickets.sort();

    let findlist = new Map();
    let findset = new Set();

    tickets.forEach(element => {
        if(!findlist.has(element[0]))
        {
            let list = new Array();
            list.push(element[1]);
            findlist.set(element[0], list);
        }
        else
        {
            findlist.set(element[0], [...findlist.get(element[0]), element[1]]);
        }

        findset.add(element[0]);
        findset.add(element[1]);
    });


    findlist.get('ICN');
    answer.push('ICN');
    //키를 입력해서 findlist에서 탐색을 시작하자.
    function dfs(key)
    {
        if(findlist.has(key))
        {
            let checklist = findlist.get(key);
            checklist.forEach(element => {
                answer.push(element);
                return dfs(element);
            });
        }
        else
        {
            if(findset.size > answer.length)
            {
                answer.pop();
                return;
            }
            
        }
    }

    dfs("ICN");

    return answer;
}