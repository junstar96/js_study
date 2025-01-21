function solution(x, y, n) {
    let arr = new Array(y+1).fill(Infinity);
    arr[x] = 0;

    for(let i = x;i<=y;i++)
    {
        if(arr[i] === Infinity)
        {
            continue;
        }

        if(i * 2 <= y) {
            arr[i*2] = Math.min(arr[i*2],arr[i]+1);
        }
        if(i * 3 <= y) {
            arr[i*3] = Math.min(arr[i*3],arr[i]+1);
        }
        if(i + n <= y) {
            arr[i+n] = Math.min(arr[i+n],arr[i]+1);
        }
    }

    console.log(arr);

    return arr[y] === Infinity ? -1 : arr[y];

}

console.log(solution(10, 40, 5));