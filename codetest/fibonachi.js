//내 생각에 엄청 깔끔하게 풀어낸 것 같다.
function solution(n) {
    let arr = Array.from(Array(n+1), (x)=>-1);
    arr.splice(0,1,0);
    arr.splice(1,1,1);
    arr.splice(2,1,1);
    
    for(let i = 3;i <=n;i++)
        {
            arr.splice(i,1,(arr[i-1] + arr[i-2])%1234567);
        }
    
    
    var answer = arr[n];
    return answer;
}