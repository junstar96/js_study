import figlet from "figlet";

let board = [
    [0,-1,0,-1,0],
    [-2,-2,-2,-2,-2],
    [0,-1,0,-1,0],
    [-2,-2,-2,-2,-2],
    [0,-1,0,-1,0]

]

for (let i = 0; i < board.length; i++) {
    let logs = "";
    for(let j = 0;j<board[0].length;j++)
    {
        switch(board[i][j])
        {
            case -2:
                logs += "=";
                break;
            case -1:
                logs += "|";
                break;
            case 0:
                logs += " ";
                break
            default:
                logs += String(board[i][j]);
                break;
        }
    }
    console.log(
       logs
    );
}