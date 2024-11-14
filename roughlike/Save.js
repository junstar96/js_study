
//blob : 멀티미디어 옵션을 체크하는 데 도움 주는 클래스. 
import { json } from "express";
import fs from "fs";
import path, { resolve } from "path";
//현재 위치를 받아온다.
const __dirname = path.resolve();
const __logs = [];

export function createfile(filename, content)
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

export function updatefile(filename, content)
{
    const filepath = path.join(__dirname,'save',filename);

    if(fs.existsSync(filepath))
    {
        const write_cont = fs.readFileSync(filepath, 'utf-8') + "\n" +content;


        fs.writeFileSync(filepath, write_cont, 'utf-8');
    }
    else
    {
        createfile(filename,content);
    }
}

export function readfile(filename)
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

export function deletefile(filename)
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

function savejson(filename, data)
{
    const filepath = path.join(__dirname, 'save', filename);
    let filedata = [];
    

    if(fs.existsSync(filepath))
    {
        const rawdata = fs.readFileSync(filepath);
        try{
            filedata = JSON.parse(rawdata);
        }
        catch (e)
        {
            console.error("파싱 에러", e);
            filedata = [];
        }
    }

    filedata.push(data);
    //console.log(filedata);

    fs.writeFileSync(filepath, JSON.stringify(filedata, null, 2));
    console.log("성공 확인")

    

}

function rank_renewal(newdata)
{
    const filepath = path.join(__dirname, 'save', 'rank.json');
    let filedata = [];

    if(fs.existsSync(filepath))
    {
        const rawdata = fs.readFileSync(filepath);
        try{
            filedata = JSON.parse(rawdata);
        }
        catch (e)
        {
            console.error("파싱 에러", e);
            filedata = [];
        }
    }

    filedata.push(newData);

    filedata.sort((a,b)=> b['point'] - a['point'])
    filedata = filedata.slice(0,5);

    fs.writeFileSync(filepath, JSON.stringify(filedata, null, 2));
}

export function return_rank_data()
{
    const filepath = path.join(__dirname, 'save', 'rank.json');
    let filedata = [];

    if(fs.existsSync(filepath))
    {
        const rawdata = fs.readFileSync(filepath);
        try{
            filedata = JSON.parse(rawdata);
        }
        catch (e)
        {
            console.error("파싱 에러", e);
            filedata = [];
        }
    }

    return filedata;
}

const newData =
{
    rank : 101,
    name : "새 데이터1",
    point : 1234
}


//rank_renewal(newData);