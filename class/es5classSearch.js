"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _class, _descriptor, _temp;

var oinpt = document.getElementById("text");
var btn = document.getElementById("btn");
var search = (_class = (_temp = /*#__PURE__*/ function() {
    function search() {
        (0, _classCallCheck2["default"])(this, search);
        (0, _initializerDefineProperty2["default"])(this, "url", _descriptor, this);
        this.keyvalue = "";
    } // 直接执行(装饰私有值)


    (0, _createClass2["default"])(search, [{
        key: "getCountent",
        value: function getCountent() {
            console.log("向" + this.url + "发送网络请求，数据：" + this.keyvalue);
        }
    }]);
    return search;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "url", [myReadOnly], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
        return "urlA";
    }
})), _class);

function myReadOnly(proto, key, descriptor) {
    console.log(proto, key, descriptor);
}

var os = new search();

oinpt.oninput = function() {
    os.keyvalue = this.value;
};

btn.onclick = function() {
    os.getCountent();
};