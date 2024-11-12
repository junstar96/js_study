
//blob : 멀티미디어 옵션을 체크하는 데 도움 주는 클래스. 
import fs from "fs";
import path, { resolve } from "path";
//현재 위치를 받아온다.
const __dirname = path.resolve();

function createfile(filename, content)
{
    const savefolderpath = path.join(__dirname,'save');

    if(!fs.existsSync(savefolderpath))
    {
        fs.mkdirSync(savefolderpath);
    }
    else
    {
        console.log("이미 존재");
    }

    const filepath = path.join(savefolderpath, filename);

    fs.writeFileSync(filepath, content, 'utf-8');
}

function readfile(filename)
{
    const filepath = path.join(__dirname, 'save', filename);

    if(fs.existsSync(filepath))
    {
        const content = fs.readFileSync(filepath, 'utf-8');
        console.log(`파일 내용 : ${content}`);
    }
    else
    {
        console.log("파일이 없음.")
    }
}

function deletefile(filename)
{
    const filepath = path.join(__dirname, 'save', filename);

    if(fs.existsSync(filepath))
        {
            fs.unlinkSync(filepath);
            console.log(`파일 삭제`);
        }
        else
        {
            console.log("파일이 존재하지 않음.")
        }
}


createfile('example.txt', "이것은 테스트입니다2.");


