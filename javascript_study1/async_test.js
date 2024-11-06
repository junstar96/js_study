// //promise
// function testpromise(name)
// {
//     return new Promise(function(resolve)
// {
//     setTimeout(function(){
//         resolve(name);

//     },500);
// })
// }


// //generator
// var addcoffee = function(preview, name)
// {
//     setTimeout(() => {
        
//         coffeeMaker.next(preview ? preview + "," + name: name);
//     }, 500);
// };


// // *가 붙은 함수가 제너레이터 함수. 포인터 개념인가.
// var cooffeeGenerator = function* ()
// {
//     var esp = yield addcoffee("", "에스프레소");
//     console.log(esp);
//     var ame = yield addcoffee(esp, "아메리카노");
//     console.log(ame);
//     var apo = yield addcoffee(ame, "아포카토");
//     console.log(apo);
// };

// var coffeeMaker = cooffeeGenerator();
// coffeeMaker.next();

// //async, await 
// function testpromise(name)
// {
//     return new Promise(function(resolve)
// {
//     setTimeout(function(){
//         resolve(name);

//     },500);
// })
// };

// var testmaker = async function () {
//     var glist = "";
//     var _addlist = async function (name) {
        
//         glist += (glist ? ", " : "") + (await testpromise(name));
//     }

//     await testpromise("에스프레소");
//     console.log(glist);
//     await testpromise("아메리카노");
//     console.log(glist);
//     await testpromise("아포카토");
//     console.log(glist);
// }

// testmaker();

//쉽게 풀어 쓴다면 이런 느낌.
let check = await Getcircle();
console.log(check);

function Getcircle()
{
    let div = "hello world";
    return new Promise(function(resolve)
{   
    div = div + div;
    resolve(div);

})
}