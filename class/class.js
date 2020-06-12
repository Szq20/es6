 /*class 的方法
              1 必须new使用
              2 class Plan.prototype 不能枚举
              3 静态属性放到Plan上 非原型
      */
 // function
 class Plan {
     // 静态属性 函数Plans上对的属性,Plan.alive()使用
     static alive() {
             console.log("alive");
         }
         //  es7(静态属性)
     static name = "plan";
     // 私有属性
     constructor(name) {
             this.name = name || "普通飞机";
             this.blood = 100;
         }
         //  es7(私有属性)
     bu = "aa"
         // 公有属性  定义在原型上的方法
     fly() {
         console.log("fly");
     }


 };
 var op = new Plan();
 console.log(op);
 Plan.alive();

 // extends 继承 Plan(公有 + 私有 + 私有 )
 class AttackPlan extends Plan {
     constructor(name) {
         // Plan.call(this, name)
         super(name);
         this.logo = "me";
     }
     dan() {
         console.log("bibibi");

     }
 }
 var actp = new AttackPlan("attack")
 console.log(actp);
 actp.dan();
 actp.fly();
 AttackPlan.alive();