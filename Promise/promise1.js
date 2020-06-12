// // promise里是同步执行
// let op = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         Math.random() * 100 > 60 ? resolve("ok") : reject("no")
//     }, 1000)
// });
// //then注册的函数是异步执行(微任务)
// // setTimeout(宏任务) ==》task queue1
// // 异步队列(微任务)==》task queue2(微任务有优先执行权)
// op.then((val) => {
//     console.log(val);
// }, (val) => {
//     console.log(val);
// })

import { readFile, read } from "fs";





let op = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() * 100 > 60 ? resolve("ok") : reject("no")
    }, 10)
});
// 链式操作
//上一个then执行的函数如果抛出一个错误,那么下一个then只执行失败的函数参数是这个错误
//上一个then执行的函数不抛出错误，那么下一个then只执行成功的函数
// 返回值作为下一个then注册函数的执行参数
// 返回值如果是Promise对象,那么下一个then执行哪一个函数取决于新的promise
op.then((val) => {
    console.log("1ok" + val);
    throw new Error("error")
        // 传入下一个then的执行函数中
        // return "ok";
}, (val) => {
    console.log("1no" + val);
    return new Promise((resolve, reject) => {
        reject("no new promise")
    });
}).then((val) => {
    console.log("2ok" + val);
}, (val) => {
    console.log("2no" + val);
});





// promise化
function promisify(func) {
    return function(...arg) {
        return new Promise((res, rej) => {
            func(...arg, (err, data) => {
                if (err) {
                    rej(err);
                } else {
                    res(data);
                }
            });
        });
    };
};
let readFile = promisify(fs.readFile);

readFile("./name.txt", "utf-8").then((val) => {
    console.log(val);
}, null);

function promiseAll(obj) {
    for (const key in obj) {
        let fn = obj[key]
        if (typeof fn === "function") {
            obj[key + "Async"] = promisify(fn);
        }
    }
}
promisify(fs);
fs.readFileAsync("./name.txt", "utf-8").then((val) => {
    console.log(val);
}, null);