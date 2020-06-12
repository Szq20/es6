// async函数是Generator的语法糖Generator+Promise+Co
// 1回调地狱
// trycatch可以捕获async+await的异步执行函数
// 2try catch无法捕获异步错误()
// 3同步并发异步的结果


let fs = require("fs");

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (data) {
                res(data);
            } else {
                rej(err);
            }
        });
    });
};

// function* read() {
//     let val1 = yield readFile("./name.txt");
//     let val2 = yield readFile(val1);
//     let val3 = yield readFile(val2);
// };

// function Co(oIt) {
//     return new Promise((res, rej) => {
//         let next = (data) => {
//             let { value, done } = oIt.next(data);
//             if (done) {
//                 res(value);
//             } else {
//                 value.then((val) => {
//                     next(val);
//                 }, null)
//             }

//         }
//         next();
//     });
// };
// Co(read("./name.txt")).then((val) => {
//     console.log(val);
// }, null)


async function read(url) {
    // trycatch可以捕获async+await的异步执行函数
    try {
        let val1 = await readFile(url);
        let val2 = await readFile(val1);
        let val3 = await readFile(val2);
        return val3;

    } catch (error) {
        console.log(error);

    }

}
read("./name.txt").then((val) => {
    console.log(val);

})



// 同步并发异步的结果
// 失败时候则返回最先被reject失败状态的值
// Promise.all([readFile("./name.txt"),
//         readFile("./number.txt"),
//         readFile("./score.txt")
//     ])
//     .then((val) => {
//         console.log(val);
//     })

// 使用async + await解决，错误一个就不能执行别的正确执行的问题
async function read1() {
    let val1 = null;

    try {
        val1 = await readFile("./name.txt")
        console.log(val1);

    } catch (error) {
        console.log(e);

    }
}
async function read2() {
    let val2 = null;
    try {
        val2 = await readFile("./number.txt");
        console.log(val2);

    } catch (error) {
        console.log(e);

    }
}
async function read3() {
    let val3 = null;
    try {
        val3 = await readFile("./score.txt")
        console.log(val3);

    } catch (error) {
        console.log(e);

    }
}
// 写一起
function readall() {
    let val1 = null;
    let val2 = null;
    let val3 = null;
    try {
        val1 = await readFile("./name.txt")
        console.log(val1);
        val2 = await readFile("./number.txt");
        console.log(val2);
        val3 = await readFile("./score.txt")
        console.log(val3);

    } catch (error) {
        console.log(error);

    }
}

function readAll(...arg) {
    arg.forEach((ele) => {
        ele();
    })
}
readAll(read1, read2, read3)