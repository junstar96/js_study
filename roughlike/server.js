import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';
import { startGame } from "./game.js";
import { start_MiniGame } from "./minigame.js";
import { myemitter } from './event_connecter.js';
import { return_rank_data } from './Save.js';

// 로비 화면을 출력하는 함수
function displayLobby() {
    console.clear();

    // 타이틀 텍스트
    console.log(
        chalk.cyan(
            figlet.textSync('Rouge-Like', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    // 상단 경계선
    const line = chalk.magentaBright('='.repeat(50));
    console.log(line);

    // 게임 이름
    console.log(chalk.yellowBright.bold('CLI 게임에 오신것을 환영합니다!'));

    // 설명 텍스트
    console.log(chalk.green('옵션을 선택해주세요.'));
    console.log();

    // 옵션들
    console.log(chalk.blue('1.') + chalk.white(' 새로운 게임 시작'));
    console.log(chalk.blue('2.') + chalk.white(' 미니게임 모드'));
    console.log(chalk.blue('3.') + chalk.white(' 랭킹 확인'));
    console.log(chalk.blue('4.') + chalk.white(' 종료'));

    // 하단 경계선
    console.log(line);

    // 하단 설명
    console.log(chalk.gray('1-4 사이의 수를 입력한 뒤 엔터를 누르세요.'));
}

function displayRank() {
    console.clear();

    let ranks = return_rank_data();
    ranks.sort((a, b) => b['point'] - a['point'])

    const line = chalk.magentaBright('='.repeat(50));
    console.log(line);
    ranks.forEach((element, index) => {
        let point = element['point'];
        console.log(chalk.blue(`|랭킹 ${index} 위: ${point}|`))
    });
    console.log(line);

    const choice = readlineSync.question('뒤로 돌아가시겠습니까?(y/n) ');

    switch (choice) {
        case 'y':
        case 'Y':
            break;
        case 'n':
        case 'N':
            displayRank();
            break;
        default:
            break;
    }
}

// 유저 입력을 받아 처리하는 함수
async function handleUserInput() {
    displayLobby();

    const choice = readlineSync.question('확인: ');


    switch (choice) {
        case '1':
            if (await startGame()) {
                handleUserInput();
            }
            // 여기에서 새로운 게임 시작 로직을 구현
            startGame();
            break;
        case '2':
            console.log(chalk.yellow('미니게임 테스트!'));
            if (await start_MiniGame()) {
                handleUserInput();
            }
            //미니 게임 테스트
            break;
        case '3':
            displayRank();
            // 옵션 메뉴 로직을 구현
            handleUserInput();
            break;
        case '4':
            console.log(chalk.red('게임을 종료합니다.'));
            // 게임 종료 로직을 구현
            process.exit(0); // 게임 종료
            break;
        default:
            console.log(chalk.red('올바른 선택을 하세요.'));
            handleUserInput(); // 유효하지 않은 입력일 경우 다시 입력 받음
    }
}

// 게임 시작 함수
function start() {
    myemitter.once('pause', () => {
        console.log(`pause`);
        process.exit();
    });
    handleUserInput();
}

// 게임 실행
start();
