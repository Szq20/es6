//初始化
let omap = new Map(["name", "me"], ["age", "18"], ["sex", "nan"], [{}, "111"])
let obj = {};
omap.set(obj, "new");
omap.get(obj);
omap.get("name");
omap.delete("age");