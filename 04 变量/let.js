// 2、let关键字
// let声明的范围是块作用域
if (true) {
    var name = 'shang';
    console.log(name);
}
console.log(name);

if (true) {
    let name1 = 'shang';
    console.log(name1);
}
//console.log(name1); // 出错，name1 is not defined

// let不允许在同一块中重复声明同一标识符，但var允许
/*let age = 12;
let age = 100; //SyntaxError;标识符已经声明*/

var name = 'seb';
console.log(name);  // seb
if (true) {
    var name = 'seb';
    console.log(name);  // seb
}

let age = 20;
console.log(age);
if (true) {
    let age = 18;
    console.log(age);
}
// 这样的let声明是允许的，因为同一块中没有重复声明

// 不允许var和let都声明同一标识符
/*
var name;
let name;

let age;
var age;
*/

//暂时性死区（temporal dead zone, tdz)
/*
// message 会被提升
console.log(message);
var message = '123';

// num 不会被提升
console.log(num);
let num = 20;   //ReferenceError
*/

// 全局声明 不会成为window对象的属性，而var会
let str = 'vote';
console.log(str);
console.log(window.str);  //undefined

// for循环的let声明
for (var i = 0; i < 5; ++i) {

}
console.log(i);

for (let i = 0; i < 5; ++i) {

}
console.log(i); //i is not defined

//对于迭代变量的声明
for (var i = 0; i < 5; ++i) {
    setTimeout(() => {
        console.log(i);
    }, 0);
} // 输出为5，5，5，5，5

/* 
// for循环标准写法
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

 */


