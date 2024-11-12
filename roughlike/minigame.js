import chalk from 'chalk';
import figlet from 'figlet';
import { getinputwithtimeout_without_ReadlineSync } from './readlinetest.js';

export const wait = (timer) => new Promise((resolve) => { setTimeout(function () { resolve(null) }, timer); })



class miniGame {
    constructor(type) {
        this._type = type;
        this._time_stop = true;
    }

    async TimeCheck() {
        var time = 10;

        while (time >= 0 && this._time_stop) {
            console.log("남은 시간 : " + time);
            await wait(1000);
            time--;
        }
    }

    winCheck(check) {
        //참이면 이긴 것
        if (check) {
            return [chalk.blueBright(
                `게임에서 이겼습니다!`
            ), true];
        }
        else {
            return [chalk.blueBright(
                `게임에서 졌습니다!`
            ), false];
        }
    }

    async Start_game() {
        let logs;
        let is_win;

        this._type = Math.floor(Math.random()*3);

        switch (this._type) {
            //숫자 맞추기 게임
            case 0:
                [logs, is_win] = await this.BoardGame();
                break;
            //가위 바위 보
            case 1:
                [logs, is_win] = await this.Rock_Scissors_Paper();
                break;
            //참참참
            case 2:
                [logs, is_win] = await this.Charm3();
                break;
        }

        console.log(logs);
        return is_win;

    }

    Finding_num() {
        let rand = rand()
    }

    async BoardGame() {
        let logs = [];
        let board = [
            [0, -1, 0, -1, 0],
            [-2, -2, -2, -2, -2],
            [0, -1, 0, -1, 0],
            [-2, -2, -2, -2, -2],
            [0, -1, 0, -1, 0]

        ];

        let dx_board = [-2, 0, 2, 0];
        let dy_board = [0, -2, 0, 2];

        let Check_set = new Set();

        async function Rand_Com_input() {
            let rand = Math.ceil(Math.random() * 9);


            while (Check_set.has(rand)) {
                rand = Math.ceil(Math.random() * 9);
            }

            switch (rand) {
                case 1:
                    board[4][0] = -3;
                    break;
                case 2:
                    board[4][2] = -3;
                    break;
                case 3:
                    board[4][4] = -3;
                    break;
                case 4:
                    board[2][0] = -3;
                    break;
                case 5:
                    board[2][2] = -3;
                    break;
                case 6:
                    board[2][4] = -3;
                    break;
                case 7:
                    board[0][0] = -3;
                    break;
                case 8:
                    board[0][2] = -3;
                    break;
                case 9:
                    board[0][4] = -3;
                    break;
            }

            Check_set.add(rand);
        }

        async function board_winning_check() {
            let count = 0;
            for (let i = 0; i < board.length; i += 2) {
                for (let j = 0; j < board[0].length; j += 2) {
                    if (board[i][j] === 0) {
                        count++;
                    }     
                }
            }

            if(board[0][0] + board[0][2] + board[0][4] === 9 ||
                board[2][0] + board[2][2] + board[2][4] === 9 ||
                board[4][0] + board[4][2] + board[4][4] === 9 ||
                board[0][0] + board[2][2] + board[4][4] === 9 ||
                board[0][0] + board[2][0] + board[4][0] === 9 ||
                board[0][2] + board[2][2] + board[4][2] === 9 ||
                board[0][4] + board[2][4] + board[4][4] === 9 ||
                board[0][4] + board[2][2] + board[4][0] === 9
             )
            {
                console.log("이겼습니다!");
                return true;
            }
            else if(board[0][0] + board[0][2] + board[0][4] === -9 ||
                board[2][0] + board[2][2] + board[2][4] === -9 ||
                board[4][0] + board[4][2] + board[4][4] === -9 ||
                board[0][0] + board[2][2] + board[4][4] === -9 ||
                board[0][0] + board[2][0] + board[4][0] === -9 ||
                board[0][2] + board[2][2] + board[4][2] === -9 ||
                board[0][4] + board[2][4] + board[4][4] === -9 ||
                board[0][4] + board[2][2] + board[4][0] === -9
             )
            {
                console.log("졌습니다!");
                return true;
            }

            if (count !== 0) {
                return false;
            }
            else {
                console.log("보드가 다 찼습니다!");
                return true;
            }
        }

        while (true) {
            console.clear();
            logs = [];//logs 내용물 초기화

            logs.push(
                chalk.cyan(
                    figlet.textSync('Tic tac toe', {
                        font: 'Swamp Land',
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    })
                )
            );


            for (let i = 0; i < board.length; i++) {
                let field = "";
                for (let j = 0; j < board[0].length; j++) {
                    switch (board[i][j]) {
                        case -2:
                            field += "=";
                            break;
                        case -1:
                            field += "|";
                            break;
                        case 0:
                            field += " ";
                            break
                        case 3:
                            field += "O";
                            break;
                        case -3:
                            field += "X";
                            break;
                        default:
                            field += String(board[i][j]);
                            break;
                    }
                }
                logs.push(field);
            }

            const line = chalk.magentaBright('='.repeat(50));
            logs.push(line);
            logs.push(chalk.blue('틱택토!!'));
            logs.push(chalk.white('7 | 8 | 9'));
            logs.push(chalk.white('4 | 5 | 6'));
            logs.push(chalk.white('1 | 2 | 3'));

            
            logs.forEach((log) => console.log(log));


            let input_num = await getinputwithtimeout_without_ReadlineSync("숫자를 입력하세요(제한 시간 5초). ", 50000, "Fail!");

            switch (Number(input_num)) {
                case 1:
                    board[4][0] = 3;
                    break;
                case 2:
                    board[4][2] = 3;
                    break;
                case 3:
                    board[4][4] = 3;
                    break;
                case 4:
                    board[2][0] = 3;
                    break;
                case 5:
                    board[2][2] = 3;
                    break;
                case 6:
                    board[2][4] = 3;
                    break;
                case 7:
                    board[0][0] = 3;
                    break;
                case 8:
                    board[0][2] = 3;
                    break;
                case 9:
                    board[0][4] = 3;
                    break;
                default:
                    logs.push("입력 실패!")
                    break;
            }

            Check_set.add(Number(input_num));

            if (await board_winning_check()) {
                console.log("게임 종료");
                return this.winCheck(true);
            }
            
            await Rand_Com_input();
            
        }




    }

    async Rock_Scissors_Paper() {
        let logs = [];

        while (true) {
            let rand = Math.floor(Math.random() * 3);
            console.clear();
            logs = [];

            // 타이틀 텍스트
            console.log(
                chalk.cyan(
                    figlet.textSync('Rock Scissors Paper!', {
                        font: 'Swamp Land',
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    })
                )
            );

            const line = chalk.magentaBright('='.repeat(50));
            console.log(line);
            console.log(chalk.blue('가위 바위 보!!'));
            console.log(chalk.white('입력 : A = 가위, D : 바위, W : 보'));
            //이런 방식으로는 안 된다.
            //this.TimeCheck();
            //입력 지문, 시간 제한, 입력을 하지 않았을 때 랜덤 입력값
            let default_value = () => {
                let rand = Math.ceil(Math.random() * 3);
                switch (rand) {
                    case 1:
                        return 'A';
                        break;
                    case 2:
                        return 'W';
                        break;
                    case 3:
                        return 'D';
                        break;
                }
            }

            let check_arrow = await getinputwithtimeout_without_ReadlineSync("입력(10초) : ", 10000, default_value);
            let hand;

            switch (check_arrow) {
                //가위
                case 'A':
                case 'a':
                    hand = 0;
                    break;
                //바위
                case 'D':
                case 'd':
                    hand = 1;
                    break;
                case 'W':
                case "w":
                    hand = 2;
                    break;
            }

            logs.forEach((log) => console.log(log));

            if (rand === hand) {
                console.log(chalk.blue('비김!'));
            }
            else {
                switch (rand) {
                    case 0:
                        if (hand === 1) {
                            return this.winCheck(true);
                        }
                        else {
                            return this.winCheck(false);
                        }
                        break;
                    case 1:
                        if (hand === 2) {
                            return this.winCheck(true);
                        }
                        else {
                            return this.winCheck(false);
                        }
                        break;
                    case 2:
                        if (hand === 0) {
                            return this.winCheck(true);
                        }
                        else {
                            return this.winCheck(true);
                        }
                        break;
                }
            }


        }
    }

    async Charm3() {
        //참이 오른쪽 거짓이 왼쪽
        let turn_check = true;
        while (true) {
            let rand = Boolean(Math.round(Math.random()));
            console.clear();

            // 타이틀 텍스트
            console.log(
                chalk.cyan(
                    figlet.textSync('Left and Right!', {
                        font: 'Swamp Land',
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    })
                )
            );

            const line = chalk.magentaBright('='.repeat(50));
            console.log(line);
            if (turn_check === true) {
                console.log(chalk.blue('당신의 턴!'));
            }
            else {
                console.log(chalk.blue('상대의 턴! 잘 피하세요!'));
            }
            console.log(chalk.white('방향을 입력하세요.'));
            console.log(chalk.white('입력 (A : 왼쪽 D : 오른쪽)'));
            let check_arrow = await getinputwithtimeout_without_ReadlineSync("입력은? (입력 제한 10초) : ", 10000, "A");
            let arrow;

            switch (check_arrow) {
                case 'A':
                case 'a':
                    arrow = false;
                    break;
                case 'D':
                case 'd':
                    arrow = true;
                    break;
            }

            //멈춘 게 해결되고 난 뒤
            if (arrow === rand) {
                if (turn_check === true) {
                    return this.winCheck(true);
                }
                else {
                    return this.winCheck(false);
                }
                break;
            }
            else {
                if (turn_check === true) {
                    console.log(chalk.blue('공격 실패! 상대에게 턴이 넘어갑니다.'));
                }
                else {
                    console.log(chalk.blue('잘 피하셨어요! 턴을 가져옵니다.'));
                }
                await wait(1000);
                turn_check = !turn_check;
            }
        }








    }


}

export async function start_MiniGame() {
    console.clear();
    const minigame = new miniGame(0);
    


    while (true) {
        if(await minigame.Start_game())
        {
            let restart = await getinputwithtimeout_without_ReadlineSync("게임을 다시 하시겠습니까? (Y/N)", 10000, 'N');
            switch(restart)
            {
                case 'N':
                case 'n':
                    return true;
                    break;
            }
        }
    }


}