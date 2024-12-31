function isFrime(num)
{
    if(num === '')
    {
        return false;

    }

    num = parseInt(num, 10);
    if(num === 2)
    {
        return true;
    }

    if(num < 2 || num === NaN)
    {
        return false;
    }

    

    let sqrt = Math.ceil(Math.sqrt(num));
    for(let i = 2;i<=sqrt;i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }

    return true;
}

function solution(n, k) {
    var answer = -1;

    //시작할 때 0 값

    //진수 값으로 변경해 보도록 한다.
    let parseToK = n.toString(k);

    //prime 이라면 여기에 넣어 보도록 하자.
    let list_prime = parseToK.split('0');

    let size = list_prime.length;
    for(let i = 0;i<size;i++)
    {
        if(isFrime(list_prime[0]))
        {
            list_prime = [...list_prime.splice(1), list_prime.shift()]; 
            //console.log(list_prime);
        }
        else
        {
            list_prime.shift();
        }
    }
    //console.log(list_prime);
    
    
    answer = list_prime.length;

    
    return answer;
}

console.log(solution(437674, 3));