class D_class {
    constructor(name, age)
    {
        this._name = name;
        this._age = age;
    }
    //get, set을 사용하게 될 경우 this로 변수를 선언할 때 언더바를 넣어야만 무한루프가 안 돈다.
    //안 넣으면 set 값에서 계속 호출이 되는 식으로 돌아버린다.

    print(){
        console.log(this)
    }

    //js에는 별도의 get, set 문법이 존재한다. 
    get name () 
    {
        return this._name;
    }

    set name(value)
    {
        if(value < 0)
        {
            console.warn("0보다 작음");
            return;
        }
        else if(typeof value !== 'number')
        {
            console.warn("숫자가 아님.")
            return;
        }
        this._name = value;
    }

    get age()
    {
        return this._age;
    }

    set age(value)
    {
        if(value < 0)
            {
                console.warn("0보다 작음");
                return;
            }
            else if(typeof value !== 'number')
            {
                console.warn("숫자가 아님.")
                return;
            }
            this._name = value;
        this._age = value;
    }
}

class E_class1 extends D_class
{
    constructor(name, age, simple = 10)
    {
        //부모의 constructor다. 여기에 변수 넣으면 적용이 된다.
        //부모랑 변수를 똑같이 가져갈 거라면 굳이 안 넣어도 된다. 
        super(name, age);
        this.simple = simple;
        
    }
}

class Car{
    constructor(modelname,modelyear, type, price){
        this.modelname = modelname;
        this.modelyear = modelyear;
        this.type = type;
        this.price = price;

    }

    MakeNoise()
    {
        console.log("빵빵");
    }

    update_data(modelname, modelyear, type, price)
    {
        this.modelname = modelname;
        this.modelyear = modelyear;
        this.type = type;
        this.price = price;
        console.log(`${this.modelname}, ${this.modelyear} ${this.type} ${this.price}`)
    }
}

let check = new E_class1("hello", 13, 100);
console.log(check.name,check.age,check.simple);
check.print();

let testcar = new Car("세단", "1992", 'e', 3000);
testcar.update_data("포르쉐","2002", 'g', 4000);