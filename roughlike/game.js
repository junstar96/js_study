import chalk from 'chalk';
import readlineSync from 'readline-sync';


//도망치면 아이템 획득은 할 수 없다.
class Player {
  constructor() {
    this._hp = 100;
    this._max_hp = 100;
    this._attack = 0;
    //방어 확률, 100이 최대치
    this._per_defence = 0;
    //공격의 배율, 100이 최대치
    this._attack_mag = 1;
    //추가 공격 확률, 100이 최대치
    this._attack_per_plus = 0;
    //도망 확률, 100이 최대치
    this._runaway = 10;
    this._plus_item_get = 30;
  }

  get attack()
  {
    return this._attack * this.attack_mag;
  }

  set attack(value)
  {
    if(typeof this._attack !== "number")
    {
      return;
    }
    this._attack = value;

  }

  set max_hp(value)
  {
      if(typeof value !== "number" || value === 0)
      {
        return;
      }
      this._max_hp = value;

  }

  get hp()
  {
    return this._hp;
  }

  get defence()
  {
    return this._defence;
  }

  run_from_battle()
  {
    let rand_num = Math.floor(Math.random()*101);
    return rand_num < this._runaway ? true : false;
  }

  get_status(value)
  {
    //value는 0부터 7까지 존재한다고 하자.
    let rand_type = value;
    switch(rand_type)
    {
      case 0://최대 체력 증가
        this._hp += Math.floor(Math.random()*31 + 20);
        break;
      case 1://공격력 증가
        this._attack += Math.floor(Math.random()*31 + 20);
        break;
      case 2://공격력 배율 증가
        this._attack_mag += (Math.floor(Math.random()*10 + 1));
        break;
      case 3://도망 확률
        this._runaway += (Math.floor(Math.random()*3 + 1));
        if(this._runaway > 100)
        {
          this._runaway = 100;
        }
        break;
      case 4://연속 공격 확률
        this._attack_per_plus += (Math.floor(Math.random()*5 + 3));
        if(this._attack_per_plus > 100)
        {
          tis._attack_per_plus = 100;
        }
        break;
      case 5://방어 확률
        this._per_defence += (Math.floor(Math.random()*8 + 3));
        if(this._per_defence > 100)
        {
          this._per_defence = 100;
        }
        break;
      case 6://아이템 추가 획득 확률
        this._plus_item_get += (Math.floor(Math.random()*11 + 10));
        if(this._plus_item_get > 100)
        {
          this._plus_item_get = 100;
        }
        break;
      case 7://체력 회복
        this._hp += Math.floor(this._max_hp * 0.3); 
        break;

    }

  }

  set attack_mag(value)
  {
    if(typeof value !== "number")
    {
      return;
    }
    else
    {
      if(value < 1)
      {
        return;
      }
    }
    this._attack_mag = value;
  
  }
  //데미지 받았을 때

  healed(value)
  {
    if(typeof value !== "number")
      return;

    this._hp += value;
    if(this._hp >= this._max_hp)
    {
      this._hp = this._max_hp;
    }
  }


  damaged(value)
  {
    if(typeof value !== "number")
      return;
    
    this._hp -= value;
    if(this._hp <= 0)
    {
      this.died();
    }
  }
  //죽었을 때
  died()
  {
    //당장은 게임 종료로 해두지만 나중에는 다른 걸로 바꿔 보도록 하자.
    process.exit();


  }
}

class Monster {
  constructor(current_level, current_stage) {
    this.stat_meg = (1 + (current_level - 1) * 2/3 + current_stage / 5);
    


    this._hp = 100;
    this._attack = 5;
    this._defence = 5;
    this._speed = 10;
    this._time = 100;
    this._name; 
  }

  get hp()
  {
    return this._hp;
  }

  set hp(value)
  {
      if(typeof value !== "number")
      {
        return;
      }
      
      this._hp = value;
  }

  setting_stat(value)
  {
    return value * this.stat_meg;
  }

  SelectingType()
  {
    let rand = Math.floor(Math.random() * 5 + 1);
    switch(rand)
    {
      case 1:
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = 100;
        break;
      case 2:
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = 30;
        break;
      case 3:
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(5);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(10);
        this._time = 200;
        break;
      case 4:
        this._hp = this.setting_stat(100);
        this._attack = this.setting_stat(10);
        this._defence = this.setting_stat(5);
        this._speed = this.setting_stat(50);
        this._time = 50;
        break;
      case 5:
        this._hp = this.setting_stat(70);
        this._attack = this.setting_stat(3);
        this._defence = this.setting_stat(3);
        this._speed = this.setting_stat(30);
        this._time = 10;
        break;
    }
  }

  get attack()
  {
    return this._attack;
  }

  damaged(value)
  {
      if(typeof value !== "number")
        return;
      
      this._hp -= value;
      if(this._hp <= 0)
      {
        this.died();
      }
  }

  //캐릭터가 죽었을 때
  died()
  {

  }

  

  

  
}

class boss extends Monster
{
  constructor(hp, attack, defence, speed,time)
  {
    super(hp, attack, defence, speed, time);
    this.name = "여긴 못지나간다파!";
  }

  time_shorter()
  {
    if(this._time > 5)
    {
      this._time = this._time - 5;
    }
    else{
      this._time = 5;
    }
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
    chalk.blueBright(
      `| 플레이어 정보 | ${player.hp}, ${player.attack}, `,
    ) +
    chalk.redBright(
      `\n| 몬스터 정보 | ${monster.hp}, ${monster.attack} `,
    ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while(player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 연속 공격. 3. 방어한다.4.도망친다.  `,
      ),
    );
    const choice = readlineSync.question('당신의 선택은? ');

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));

    switch(choice)
    {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
    }

    if(typeof monster.time_shorter !== "undefined")
    {
      monster.time_shorter();

    }
    else{
      console.log(typeof monster.time_shorter);
    }

    
  }
  
};

export async function startGame() {
  console.clear();
  const player = new Player();
  let chapther_level = 1;
  let chepther_stage = 1;

  while(true)
  {
    while (chepther_stage < 4) {
      const monster = new Monster(chapther_level, chepther_stage);
      await battle(chepther_stage, player, monster);
  
      // 스테이지 클리어 및 게임 종료 조건
      //게임이 클리어 되면 chapter_level이 올라감
  
      chepther_stage++;
    }
    const boss = new boss(chapther_level,chepther_stage);
    await battle(chepther_stage, player, boss);
    chepther_stage = 1;
    chapther_level++;
  }

  
}