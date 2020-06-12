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

// readFile("./name.txt").then((val) => {
//     return readFile(val)
// }).then((val) => {
//     return readFile(val)
// }).then((val) => {
//     console.log(val);

// });

// Generator
function* read() {
    let val1 = yield readFile("./name.txt");
    let val2 = yield readFile(val1);
    let val3 = yield readFile(val2);

};
// let oG = read();
// let { value, done } = oG.next();
// value.then((val) => {
//     let { value, done } = oG.next(val);
//     value.then((val) => {
//         let { value, done } = oG.next(val);
//         value.then((val) => {
//             console.log(val);

//         })
//     })
// })
// 递归
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
// Co(read()).then((val) => {
//     console.log(val);

// }, null)