// 数据类型的学习
// 1、typeof操作符 返回值为字符串
let a;
const b = 123;
const c = '123';
const d = {a:1, b:2};
function e() {
    
}
const f = false;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

const g = new Array();
g[0] = 3;
g[1] = 2;
console.log(g);


// undefined类型
// 当没有初始化时，就相当于给变量赋予了undefined值
let message;
console.log(message);   // undefined类型
console.log(typeof message);  // "undefined" 含义：字符串
console.log(message == typeof message);  // false 类型不同

let str = undefined;  //undefined类型
console.log(str == typeof message);  //false
console.log(str == message);    //true  类型相同

let car = new Object;


