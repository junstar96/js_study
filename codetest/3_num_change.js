//10진수를 3진수로 바꾸기
let check_num = 125;
let pow_count = 0;
let array_3 = [];
while(true)
{
    if(check_num >= Math.pow(3,pow_count) && check_num < Math.pow(3, pow_count+1))
    {
        break;
    }
    else
    {
        pow_count++;
    }
}

for(let i = pow_count;i > 0;i--)
{
    array_3.push(Math.floor(check_num / Math.pow(3, i)));
    check_num -= Math.floor(check_num / Math.pow(3, i)) * Math.pow(3, i);
}

array_3.push(check_num);

let answer = 0;

for(let i = 0;i<array_3.length;i++)
{
    answer += array_3[i] * Math.pow(3, i);
}

console.log(answer);