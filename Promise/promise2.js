let fs = require("fs");
// 改写回调过多
function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (data) {
                res(data);
            }
        });
    });
};



// 同步并发异步的结果
// 数组中是promise对象将多个promise对象包装成一个新的promise实列
// 成功和失败的返回值是不同的，成功时返回一个结果数组，
// 失败时候则返回最先被reject失败状态的值
// Promise.all([readFile("./name.txt"),
//         readFile("./number.txt"),
//         readFile("./score.txt")
//     ])
//     .then((val) => {
//         console.log(val);
//     })




// promise.race([p1,p2,p3])里面那个结果获得快，就返回那个promise对象
// 不管本身是成功还是失败
// let op = Promise.race([readFile("./name.txt"),
//         readFile("./number.txt"),
//         readFile("./score.txt")
//     ])
//     .then((val) => {
//         console.log(val);
//     }, (val) => {
//         console.log("no" + val);

//     })


// readFile("./name.txt").then((val) => {
//     return readFile(val);
// }, () => {}).then((val) => {
//     return readFile(val);
// }).then((val) => {
//     console.log(val);

// })