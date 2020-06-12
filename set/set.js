// // arr==》Set
// let arr = [1, 2, 1, 3];
// let os = new Set(arr);
// // set==》arr
// let set1 = Array.from(os)
// let set2 = [...os]
// console.log(set1, set2);
let arr1 = [1, 2, 2, 4, 4, 5];
let arr2 = [2, 2, 3, 4, 7, 8];
//并集
let os1 = new Set([...arr1, ...arr2]);
let target1 = [...os1];
//交集
let sarr1 = new Set(arr1);
let sarr2 = new Set(arr2);
let JJ1 = [...sarr1].filter(ele => sarr2.has(ele))
let target2 = [...JJ1];
//差集
// let sarr1 = new Set(arr1);
// let sarr2 = new Set(arr2);
let bj1 = [...sarr1].filter(ele => !sarr2.has(ele))
let bj2 = [...sarr2].filter(ele => !sarr1.has(ele))
let target3 = [...bj2, ...bj1];
console.log(target1, target2, target3);