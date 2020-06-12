let op = new Promise((resolve, reject) => {
    resolve()
});
//异常捕获
op.then((val) => {
    throw new Error("error")
}, (val) => {
    console.log(val);
}).then((val) => {

}).catch((err1) => {
    console.log(err1);
}).then(() => {
    console.log("ok");
}, () => {
    console.log("no");
}).finally(() => {
    console.log("end");
    return "111"
});

// Promise.all()