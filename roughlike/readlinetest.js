import readlineSync from 'readline-sync';


//결과 : 실패
// async function GetinputWithTimeout(question, timeout, defaultValue) {
//     return new Promise(resolve => {
//         const timer = setTimeout(() => {
//             console.log(`시간이 초과되었습니다! ${defaultValue}를 반환합니다.`);
//             resolve(defaultValue);
//         }, timeout);

//         const userinput = readlineSync.question(question);

//         clearTimeout(timer);

//         resolve(defaultValue || userinput);
//     }
//     )

// }

async function GetinputWithTimeout_withRace(question, timeout, defaultValue) {
    return Promise.race(
        [new Promise((resolve) => {
            setTimeout(() => {
                console.log("타임 아웃!");
                resolve(defaultValue);
            }, timeout);
        }),

        new Promise((resolve)=>
        {
            let userinput = readlineSync.question(question);
            resolve(userinput);
        })
        ]
    )

}

//process.stdin, stdout은 브라우저 등에선 사용할 수 없다. 
export async function getinputwithtimeout_without_ReadlineSync(question, timeout, defaultValue) {
    let inputReceived = false;

    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            if (!inputReceived) {
                resolve(defaultValue);
                process.stdin.pause();//입력 대기 종료
            }
        }, timeout);

        process.stdin.resume();
        process.stdout.write(question);

        process.stdin.once('data', (data) => {
            if (!inputReceived) {
                inputReceived = true;
                clearTimeout(timer);
                const userinput = data.toString().trim();
                resolve(userinput);
                process.stdin.pause();
            }
        })
    })


}


// (async () => {
//     const question = "입력값 : "
//     const timeout = 5000;
//     const defaultValue = "default";

//     const result = await getinputwithtimeout_without_ReadlineSync(question, timeout, defaultValue);
//     console.log("입력값 : " + result);
// })();
