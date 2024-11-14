import * as sql from 'mysql'
import express from 'express'

//C:\Program Files\MySQL\MySQL Server 8.0\bin 여기로 cd 해보자
//이동한 다음엔 mysql -u root -p을 붙여 넣자.(암호 넣고 들어간다.)
//안 될 경우엔 .\mysql -u root -p 이렇게 쳐보자.

//show database : 데이터베이스를 보여준다.

//CREATE DATABASE tuto_database

const connection = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'jemuras1010!',
    database : 'tuto_database'
});

connection.connect();
connection.query('select * from from Users;', (error, row,fields)=>
{
    if(error)
    {
        throw error;
    }
    console.log('User info is :', row);
})

connection.end();