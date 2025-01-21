const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

//순열 
const getPermutations = (arr, length) => {
    if (length === 1) return arr.map((v) => [v]);
    const permutations = [];
    arr.forEach((val, idx) => {
        const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
        const subPermutations = getPermutations(rest, length - 1);
        subPermutations.forEach((perm) => {
            permutations.push([val, ...perm]);
        });
    });
    return permutations;
};

function solution(numbers) {
    const digits = numbers.split('');
    const checkSet = new Set();

    // 모든 길이에 대한 순열 생성
    for (let i = 1; i <= digits.length; i++) {
        const permutations = getPermutations(digits, i);
        permutations.forEach((perm) => {
            const num = parseInt(perm.join(''), 10);
            checkSet.add(num);
        });
    }

    // 소수 판별 및 카운트
    let answer = 0;
    checkSet.forEach((num) => {
        if (isPrime(num)) answer++;
    });

    return answer;
}

console.log(solution('011'));