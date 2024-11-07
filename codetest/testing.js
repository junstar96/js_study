function sol(value)
{
    let arr = Array.from(Array(100001), (x)=>-1);
    
    arr.splice(0,1,0);
    arr.splice(1,1,1);
    arr.splice(2,1,1);

    for(let i = 3;i<=value;i++)
    {
        arr.splice(i, 1, (arr[i-1] + arr[i-1])%1234567);
    }



    let answer = arr[value];
    return answer;


}

console.log(sol(5000));