// 使不可迭代的对象变成可以迭代
// let obj = {
//     0: "a",
//     1: "b",
//     2: "c",
//     length: 3,
//     [Symbol.iterator]: function() {
//         let curIndex = 0;
//         let next = () => {
//             return {
//                 value: this[curIndex],
//                 done: this.length == ++curIndex,
//             }
//         }
//         return {
//             next
//         }
//     }
// }
// for (const prop of obj) {
//     console.log(prop);
// }


//用Generator改写
let obj = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    [Symbol.iterator]: function*() {
        let curIndex = 0;
        while (curIndex != this.length) {
            yield this[curIndex];
            curIndex++;
        }
    }
}
console.log([...obj]);



//Generator 迭代生成器
// function* name() {
//     yield 'a';
//     console.log(1);
//     yield 'b';
//     yield 'c';
//     return 'd';

// }
// let og = name();
// // 每次next()停在yield
// og.next();
// // {value:a,done:false}
// og.next();
// // {value:b,done:false}
// og.next();
// // {value:c,done:true}


function* name() {
    let a = yield 'a';
    console.log(1);
    let b = yield 'b';
    console.log(1);
    let c = yield 'c';
    console.log(1);

}
let og = name();

og.next();
// 每次next()停在yield
og.next("a2");
// 赋值a是next()传入的参数a2而不是yield
// 在执行第2个yield和之前的赋值和log
og.next("b3");
// 赋值b是next()传入的参数b3而不是yield
// 在执行第3个yield和之前的赋值和log
og.next("c4");
// 赋值c是next()传入的参数c4而不是yield
// 在执行最后的的赋值和log