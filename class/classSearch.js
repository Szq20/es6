let oinpt = document.getElementById("text");
let btn = document.getElementById("btn")
class search {
    constructor() {
            this.keyvalue = "";
        }
        // 直接执行不new也会执行(装饰私有值)
    @myReadOnly
    url = "urlA";
    @dealData
    getCountent(a, b) {
        console.log("向" + this.url + "发送网络请求，数据：" + this.keyvalue, a, b);

    }
}
let os = new search();

// 装饰私有属性 (如果修饰公有属性,没有descriptor.initializer，是一个value方法)
function myReadOnly(proto, key, descriptor) {
    // key--》url
    console.log(proto, key, descriptor);
    // Object.defineProperty
    descriptor.writable = false;
    // key对应的值 
    descriptor.initializer = function() {
        // url的值变成6
        return 6
    }

}

function dealData(proto, key, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function() {
        let urlB = "urlB";
        console.log("向" + urlb + "发送网络请求，数据：" + this.keyvalue);

        oldValue.apply(this, arguments)
    }
}
// os.getCountent()-->会变成descriptor.value这个方法
oinpt.oninput = function() {
    os.keyvalue = this.value;
}
btn.onclick = function() {
    os.getCountent();
}