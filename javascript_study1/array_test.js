Array.prototype.map123 = function(callback, thisarg)
{
    let maplist = []
    //함수에서 리턴할 결과 배열
    for(var i = 0;i<this.length;i++)
    {
        var mappedvalue = callback.call(thisarg || global, this[i]);
        maplist[i] = mappedvalue;
    }

    return maplist;
};

function squrnum(check){
    console.log(check);
    return check*3;

};

//콜백 함수에는 아예 함수를 집어 넣어야만 한다.
let newarr = [1,2,3].map123(squrnum);

console.log(newarr);