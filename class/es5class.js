"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*class 的方法
        1 必须new使用
        2 class Plan.prototype 不能枚举
        3 静态属性放到Plan上 非原型
*/
// function
var Plan = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Plan, null, [{
    key: "alive",
    // 静态属性 函数Plans上对的属性,Plan.alive()使用
    value: function alive() {
      console.log("alive");
    } // 私有属性

  }]);

  function Plan(name) {
    (0, _classCallCheck2["default"])(this, Plan);
    this.name = name || "普通飞机";
    this.blood = 100;
  } // 公有属性  定义在原型上的方法


  (0, _createClass2["default"])(Plan, [{
    key: "fly",
    value: function fly() {
      console.log("fly");
    }
  }]);
  return Plan;
}();

;
var op = new Plan();
console.log(op);
Plan.alive(); // extends 继承 Plan(公有 + 私有 + 私有 )

var AttackPlan = /*#__PURE__*/function (_Plan) {
  (0, _inherits2["default"])(AttackPlan, _Plan);

  var _super = _createSuper(AttackPlan);

  function AttackPlan(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, AttackPlan);
    // Plan.call(this, name)
    _this = _super.call(this, name);
    _this.logo = "me";
    return _this;
  }

  (0, _createClass2["default"])(AttackPlan, [{
    key: "dan",
    value: function dan() {
      console.log("bibibi");
    }
  }]);
  return AttackPlan;
}(Plan);

var actp = new AttackPlan("attack");
console.log(actp);
actp.dan();
actp.fly();
AttackPlan.alive();
