// // Object 에 담을 데이터를 정의합니다.
// var memberData = new Object();
// memberData.name = "Derveljun";
// memberData.activeFlg = true;
// memberData.age = 20;

// // Array에 담을 Item 객체를 만들어줍니다.
// var pointHistoryItem1 = new Object();
// pointHistoryItem1.useDate = 20200101;
// pointHistoryItem1.usePoint = 1000;
// pointHistoryItem1.accuralPoint = 100;
// pointHistoryItem1.channel = "강남주점";

// var pointHistoryItem2 = new Object();
// pointHistoryItem2.useDate = 20200102;
// pointHistoryItem2.usePoint = 0;
// pointHistoryItem2.accuralPoint = 100;
// pointHistoryItem2.channel = "강서마트";

// // Item 객체를 Array에 담아줍니다.
// var arrPointHistory = new Array();
// arrPointHistory.push(pointHistoryItem1);
// arrPointHistory.push(pointHistoryItem2);

// // Array를 Object에 담아줍니다.
// memberData.pointHistory = arrPointHistory;

// console.log(memberData);

//string padding : 문자열을 임의의 값으로 추가로 채워넣기 
// console.log("hello".padStart(6)); // " hello"
// console.log("hello".padEnd(6)); // "hello "
// console.log("hello".padStart(3)); // "hello" // 문자열 길이보다 목표 문자열 길이가 짧다면 채워넣지 않고 그대로 반환
// console.log("hello".padEnd(20, "*")); // "hello***************" // 사용자가 지정한 값으로 채우는 것도 가능

//비동기 반복지원(es9)
// async function process(array) { 
//     for await (let i of array) { 
//       // doSomething(i); 
//     }
//   }

//Promise.finally() : 성공 실패에 상관 없이 바로 콜백 함수를 바로 반환.
//Promise.resolve().then().catch(e => e).finally();

//ES10
//array.flat : 배열 내에 배열이 또 들어가 있으면 그걸 풀어서 1차원 배열로 변경함.
//array.flatmap : 완전히 풀어 헤친 다음에 map 함수가 작동함.

//trimstart : 문자열에 공백 앞부분에 있는 거 지우기
//trim : 문자열 앞뒤의 공백 지우기
//trimend : 문자열 뒤쪽 공백 지우기

//ES11
//DYNAMIC import : 원할 때만 import를 가져오는 게 가능해짐.

// if (condition1 && condition2) {
//     const module = await import('./path/to/module.js');
//     module.doSomething();
//   }

//Promise.allSettled : 메서드는 주어진 모든 프로미스를 이행하거나 거부한 후, 각 프로미스에 대한 결과를 나타내는 객체 배열을 반환한다.

// const promiseArr = [
//     new Promise((resolve, reject) => setTimeout(resolve, 1000, 'abc')),
//     new Promise((resolve, reject) => setTimeout(reject, 2000, "Fail")),
//     new Promise((resolve, reject) => setTimeout(resolve, 3000, "Wiled")),
//   ];
  
//   Promise.allSettled(promiseArr).then(datas => datas.forEach(data => {
//     console.log(data);
//   }));

//Promise.all : 하나라도 거절이 나오면 그대로 반환

//ES12(여기서부턴 2021년 이후 버전이 필요.)
//String.prototype.replaceAll() : 원하는 글자, 문장을 전역으로 검색하고 지울 수 있음.

//Promise.any()

// const anySuccessPromises = [
// 	new Promise((res, rej) => setTimeout(res, 200, 'first')),
// 	new Promise((res, rej) => setTimeout(rej, 100, 'second')),
// 	new Promise((res, rej) => setTimeout(res, 300, 'third')),
// ];

// // first
// Promise.any(anySuccessPromises)
// .then(value => console.log(value))
// .catch(error => console.error(error));

// const allFailurePromises = [
// 	new Promise((res, rej) => setTimeout(rej, 100, 'first')),
// 	new Promise((res, rej) => setTimeout(rej, 200, 'second')),
// 	new Promise((res, rej) => setTimeout(rej, 300, 'third')),
// ];

// // AggregateError: All promises were rejected
// Promise.any(anySuccessPromises)
// .then(value => console.log(value))
// .catch(error => console.error(error));