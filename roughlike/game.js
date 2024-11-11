import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';
import { getinputwithtimeout_without_ReadlineSync } from './readlinetest.js';


export const wait = (timer) => new Promise((resolve) => {setTimeout(function(){resolve(null)}, timer);})

//도망치면 아이템 획득은 할 수 없다.
class Player {
  constructor() {
    this._hp = 100;
    this._max_hp = 100;
    this._attack = 10;
    //방어 확률, 80이 최대치
    this._per_defence = 10;
    //공격의 배율, 100이 최대치
    this._attack_mag = 1;
    //추가 공격 확률, 100이 최대치
    this._attack_per_plus = 0;
    //도망 확률, 100이 최대치
    this._runaway = 100;
    //방어 확률
    this._defence = 10;

    //아이템 추가 획득 확률
    this._plus_item_get = 30;
  }

  //get set 영역 시작 
  get attack() {
    return this._attack * this._attack_mag;
  }

  set attack(value) {
    if (typeof this._attack !== "number") {
      return;
    }
    this._attack = value;

  }

  set max_hp(value) {
    if (typeof value !== "number" || value === 0) {
      return;
    }
    this._max_hp = value;

  }

  set attack_mag(value) {
    if (typeof value !== "number") {
      return;
    }
    else {
      if (value < 1) {
        return;
      }
    }
    this._attack_mag = value;

  }

  get hp() {
    return this._hp;
  }

  get defence() {
    return this._defence;
  }

  get runaway() {
    return this._runaway;
  }

  get attack_mag() {
    return this._attack_mag;
  }

  //get set 영역 끝

  run_from_battle() {
    let rand_num = Math.floor(Math.random() * 101);
    return rand_num < this._runaway ? true : false;
  }

  //클리어하고 스테이터스를 얻을 때 
  get_status(value) {
    //value는 0부터 6까지 존재한다고 하자.
    let rand_type = value;
    if(typeof value !== 'number' || value < 0 || value > 5)
    {
      rand_type = Math.floor(Math.random()*6);
    }



    switch (rand_type) {
      case 0://최대 체력 증가
        let get_hp = Math.floor(Math.random() * 31 + 20);
        this._max_hp += get_hp;
        this._hp += get_hp;
        break;
      case 1://공격력 증가
        this._attack += Math.floor(Math.random() * 5 + 5);
        break;
      case 2://공격력 배율 증가
        this._attack_mag += (Math.floor(Math.random() * 10 + 1));
        break;
      case 3://도망 확률
        this._runaway += (Math.floor(Math.random() * 3 + 1));
        if (this._runaway > 100) {
          this._runaway = 100;
        }
        break;
      case 4://연속 공격 확률
        this._attack_per_plus += (Math.floor(Math.random() * 5 + 3));
        if (this._attack_per_plus > 100) {
          tis._attack_per_plus = 100;
        }
        break;
      case 5://방어 확률
        this._per_defence += (Math.floor(Math.random() * 8 + 3));
        if (this._per_defence > 100) {
          this._per_defence = 100;
        }
        break;
      case 6://아이템 추가 획득 확률
        this._plus_item_get += (Math.floor(Math.random() * 11 + 10));
        if (this._plus_item_get > 100) {
          this._plus_item_get = 100;
        }
        break;
    }

  }

  
  
  //체력을 회복할 때 
  healed(value = Math.floor(this._max_hp * 0.1)) {
    if (typeof value !== "number")
      return;

    this._hp += value;
    if (this._hp >= this._max_hp) {
      this._hp = this._max_hp;
    }
  }

  //데미지 받았을 때
  damaged(value) {
    if (typeof value !== "number")
      return;

    let damage = this._defence >= value ? 1 : value - this._defence;

    this._hp -= damage;

    if (this._hp <= 0) {
      this.died();
    }
    else {
      console.log(chalk.green(`${damage}를 입었습니다.`));
      return chalk.green(`${damage}를 입었습니다.`);
    }
  }
  //죽었을 때
  died() {
    //당장은 게임 종료로 해두지만 나중에는 다른 걸로 바꿔 보도록 하자.
    return chalk.green(`사망했습니다.`)


  }

  Checking_RunAway() {
    return Checking_Per(this._runaway);
  }

  Checking_Defence(damage)
  {
    let check_def = Checking_Per(this._defence);
    if(!check_def)
    {
       this.damaged(damage * 0.5);
    }
    return check_def;
  }

  Checking_Seq_Attack()
  {
    let count_attack = 0;
    while(Checking_Per(this._attack_per_plus))
    {
      if(Checking_Per(this._attack_per_plus))
      {
        count_attack++;
      }
      else
      {
        break;
      }
    }

    if(count_attack === 0)
    {
      return [chalk.red(`연속 공격 실패!`), 0];
    }
    else
    {
      return [chalk.green(`연속 공격 성공! 총 ${count_attack}`), this.attack * count_attack];
    }
  }
}

class Monster {
  constructor(current_level, current_stage) {
    this.stat_meg = (1 + (current_level - 1) * 2 / 3 + current_stage / 5);



    this._hp = 100;
    this._attack = 5;
    this._defence = 5;
    this._speed = 10;
    this._time = 100;
    this._name;
  }

  //get set 구역 시작
  get hp() {
    return this._hp;
  }

  set hp(value) {
    if (typeof value !== "number") {
      return;
    }

    this._hp = value;
  }

  get name() {
    return this._name;
  }

  get attack() {
    return this._attack;
  }

  get defence() {
    return this._defence;
  }

  get time()
  {
    return this._time;
  }

  //get set 구역 끝

  setting_stat(value) {
    return Math.floor(value * this.stat_meg);
  }

  SelectingType() {
    let rand = Math.floor(Math.random() * 5 + 1);
    switch (rand) {
      case 1://밸런스
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = Math.max(40, Math.floor(100 / Math.ceil(this.stat_meg)));
        this._name = "TYPE:B";
        break;
      case 2://공격형
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = Math.max(20, Math.floor(70 / Math.ceil(this.stat_meg)));
        this._name = "TYPE:A";
        break;
      case 3://방어형
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = Math.max(50, Math.floor(200 / Math.ceil(this.stat_meg)));
        this._name = "TYPE:D";
        break;
      case 4://연속 공격형
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(10);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(50);
        this._time = Math.max(20, Math.floor(70 / Math.ceil(this.stat_meg)));
        this._name = "TYPE:S";
        break;
      case 5://시간 제한형
        this._hp = this.setting_stat(70);
        this._attack = this.setting_stat(3);
        this._defence = this.setting_stat(3);
        this._speed = this.setting_stat(30);
        this._time = Math.max(5, Math.floor(30 / Math.ceil(this.stat_meg)));
        this._name = "TYPE:T";
        break;
    }
  }


  //데미지를 줄 때의 텍스트를 보내는 계통
  damaged(value) {
    if (typeof value !== "number")
      return;

    let damage = this._defence >= value ? 1 : value - this._defence;

    this._hp -= damage;
    if (this._hp <= 0) {
      this.died();
    }
    else {
      return chalk.green(`${damage}를 입혔습니다.`)
    }
  }

  //캐릭터가 죽었을 때
  died() {
    console.log(`${this._name}를 쓰러트렸습니다.`);

  }






}



class Boss extends Monster {
  constructor(current_level, current_stage) {
    super(current_level, current_stage);
  }

  time_shorter() {
    if (this._time > 3) {
      this._time = this._time / 2;
    }
    else {
      this._time = 5;
    }
  }

  SelectingType()
  {
    this._hp = this.setting_stat(200);
    this._attack = this.setting_stat(20);
    this._defence = this.setting_stat(20);
    this._speed = this.setting_stat(10);
    this._time = 10;
    this._name = "여긴못지나간다파!";
  }
}

function TestTimer(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve(time), 1000);
  })

}

function display_Get_Status(player) {
  console.log(chalk.magentaBright(`\n=== status_list ===`));
  console.log(
    chalk.blueBright(
      `1 : 최대 체력 증가 \n2 : 공격력 증가 \n3 : 공격 배율 증가 \n4 : 도망 확률 증가 \n5 : 연속 공격 확률 증가 \n6 : 방어 확률 증가`,
    )
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

function displayStatus(level,stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  if(stage === 5)
  {
    console.log(chalk.yellow(`보스 스테이지!`));
  }
  console.log(
    chalk.cyanBright(`|level : ${level} | Stage: ${stage} `) +
    chalk.blueBright(
      `| 플레이어 정보 | 체력 : ${player.hp} | 공격력 : ${player.attack} (공격 배율 : ${player.attack_mag}) | 방어력 : ${player.defence} | 도망 확률 : ${player.runaway} `,
    ) +
    chalk.redBright(
      `\n\n| 이름 : ${monster.name} | 체력 :  ${monster.hp} |공격력 : ${monster.attack} | 방어력 : ${monster.defence}`,
    ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const Setting_after_battle = (check_time) => {
  console.clear();

  console.log(
    chalk.cyan(
      figlet.textSync(`delay : ${check_time}`, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
}

const battle = async (level,stage, player, monster) => {
  let logs = [];
  let runaway_check = false;

  function logs_update() {
    logs = [];
  }

  while (player.hp > 0) {
    console.clear();
    if (typeof monster.time_shorter !== "undefined") {
      logs.push(chalk.green(`${monster.name}의 행동 속도가 빨라졌습니다!`))
      monster.time_shorter();

    }
    displayStatus(level,stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 연속 공격(${player.attack_mag}%). 3. 방어한다(${player.defence}%).4.도망친다.  시간 제한 : ${monster.time} 초`,
      ),
    );
    //const choice = readlineSync.question('당신의 선택은? ');
    const choice = await getinputwithtimeout_without_ReadlineSync(`당신의 선택은? :`, monster.time * 1000, "fail");
    console.log(choice);

    await wait(3000);

    logs_update();

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));

    switch (choice) {
      case '1':
        logs.push(monster.damaged(player.attack));
        logs.push(player.damaged(monster.attack));
        break;
      case '2':
        let input_string;
        let attack_point;
        [input_string, attack_point] = player.Checking_Seq_Attack();
        logs.push(input_string);
        if(attack_point === 0)
        {
          logs.push(chalk.red(`${monster.name}이 공격을 회피했습니다.`));
        }
        else
        {
          logs.push(chalk.red(`회피 실패!`));
          logs.push(monster.damaged(attack_point));
        }
        logs.push(player.damaged(monster.attack));
        break;
      case '3':
        if(player.Checking_Defence(monster.attack))
        {
          logs.push(chalk.green(`크리티컬! 데미지를 입지 않았습니다.`));
        }
        else
        {
          logs.push(chalk.green(`데미지가 반으로 감소합니다.`));
          logs.push(player.damaged(monster.attack/2));
        }
        break;
      case '4':
        if (player.Checking_RunAway()) {
          logs.push(chalk.green(`도망에 성공했습니다.`));
          runaway_check = true;
        }
        else {
          logs.push(chalk.yellow(`도망에 실패했습니다.`));
          logs.push(player.damaged(monster.attack));
        }
        break;
      default:
        logs.push(chalk.red(`입력에 실패했습니다.`));
        logs.push(player.damaged(monster.attack));
        break;
    }

    if (runaway_check) {
      break;
    }


  }

};

export async function startGame() {
  console.clear();
  const player = new Player();
  let chapther_level = 1;
  let chepther_stage = 1;
  

  while (true) {
    while (chepther_stage <= 4) {
      const monster = new Monster(chapther_level, chepther_stage);
      monster.SelectingType();
      await battle(chapther_level,chepther_stage, player, monster);
      player.healed();
      console.clear();
      display_Get_Status();
      const choice = readlineSync.question('당신의 선택은? ');
      player.get_status(choice);
      for(let timer = 3;timer > 0;timer--)
      {
        console.log(timer);
        Setting_after_battle(timer);
        await wait(1000);
      }
      // 스테이지 클리어 및 게임 종료 조건
      //게임이 클리어 되면 chapter_level이 올라감
      //process.exit();
      chepther_stage++;
    }
    const boss = new Boss(chapther_level, chepther_stage);
    boss.SelectingType();
    await battle(chapther_level,chepther_stage, player, boss);
    chepther_stage = 1;
    chapther_level++;
  }


}

export async function OptionSetting() {
  console.clear();

  console.log(
    chalk.cyan(
      figlet.textSync(`난이도 설정: ${check_time}`, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
}

function Checking_Per(value)
{
  let rand = Math.floor(Math.random()*100);
  return rand < value ? true : false;
}

