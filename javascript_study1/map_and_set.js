//map과 set은 많이 사용되는 구조니까 확실히 봐두자.
// 1. map : 키와 밸류를 저장하는 건 같은데 return 값이 있고 새로운 list를 만드는 데 도와준다.

let mymap = new Map();
mymap.set("key", "value");
mymap.set("check", 13);
mymap.get("key");

// 반복에 필요한 것 : keys, values, entries
//iterator 개념도 다시 보자.
// for(const values of mymap.keys())
// {
    
// }
console.log(mymap.get("check"));

console.log(mymap.size)
//키 기반 검색

console.log(mymap.has("key"))

//set : 고유한 값을 저장하는 자료구조
// key를 가지지 않는다.
// 중복된 값을 가지지 않는다. 

const myset = new Set();
myset.add("1");
myset.add("1");
myset.add("2");
myset.add("1");

console.log(myset);