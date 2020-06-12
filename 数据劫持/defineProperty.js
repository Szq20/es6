let obj = {

};
var tempValue = "";
Object.defineProperty(obj, "name", {
    // value: "me",
    // 不可写
    // writable: false,
    // 可配置(删除delate操作)
    configurable: true,
    // 可枚举
    enumerable: true,
    // 设置属性访问器就不能设置value和witable
    // obj.name = "xxx"时执行
    set: function(newValue) {
        tempValue = newValue
    },
    // obj.name时执行
    get: function() {
        return tempValue
    }
});
console.log(obj.name);
// 打印""
obj.name = 10;
console.log(obj.name);
// 打印10