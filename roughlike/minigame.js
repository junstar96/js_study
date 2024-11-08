import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';

export const wait = (timer) => new Promise((resolve) => { setTimeout(function () { resolve(null) }, timer); })

class miniGame {
    constructor(type) {
        this._type = type;
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
        switch (this._type) {
            //숫자 맞추기 게임
            case 0:
                break;
            //가위 바위 보
            case 1:
                break;
            //참참참
            case 2:
                await this.Charm3();
                break;
        }
    }

    Finding_num() {
        let rand = rand()
    }

    async Rock_Scissors_Paper() {
        while (true) {
            let rand = Math.floor(Math.random() * 3);
            console.clear();

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
            let check_arrow = readlineSync.question("select : ");
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

            if (rand === hand) {
                console.log(chalk.blue('비김!'));
            }
            else {
                switch (rand) {
                    case 0:
                        if (hand === 1) {
                            console.log(chalk.blue('이김!'));
                        }
                        else {
                            console.log(chalk.blue('짐!'));
                        }
                        break;
                    case 1:
                        if (hand === 2) {
                            console.log(chalk.blue('이김!'));
                        }
                        else {
                            console.log(chalk.blue('짐!'));
                        }
                        break;
                    case 2:
                        if (hand === 0) {
                            console.log(chalk.blue('이김!'));
                        }
                        else {
                            console.log(chalk.blue('짐!'));
                        }
                        break;
                }
            }



            //멈춘 게 해결되고 난 뒤
            // if (arrow === rand) {
            //     if (turn_check === true) {
            //         console.log(chalk.blue('공격 성공!'));
            //     }
            //     else {
            //         console.log(chalk.blue('패배!'));
            //     }
            //     break;
            // }
            // else {
            //     if (turn_check === true) {
            //         console.log(chalk.blue('공격 실패! 상대에게 턴이 넘어갑니다.'));
            //     }
            //     else {
            //         console.log(chalk.blue('잘 피하셨어요! 턴을 가져옵니다.'));
            //     }
            //     await wait(1000);
            //     turn_check = !turn_check;
            // }
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
            console.log(chalk.white('입력 : 화살표 <= =>'));
            let check_arrow = readlineSync.question("select arrow : ");
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
                    console.log(chalk.blue('공격 성공!'));
                }
                else {
                    console.log(chalk.blue('패배!'));
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
    const minigame = new miniGame(2);


    while (true) {
        await minigame.Start_game();
        await wait(2000);
    }


}