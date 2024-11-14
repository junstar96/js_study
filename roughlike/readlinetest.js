import readlineSync from 'readline-sync';
import { myemitter } from './event_connecter.js';


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

        new Promise((resolve) => {
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

                //이벤트 관리자로 호출을 하도록 하는 건 가능한 것으로 판명.

                if (userinput === 'pause' || userinput === 'Q' || userinput === 'q') {
                    myemitter.emit('pause');
                }





                resolve(userinput);
                process.stdin.pause();
            }
        })
    })


}




