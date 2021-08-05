// 3、const关键字
// 与let类似，不同的是必须初始化变量并不可修改
const age = 18;
/*  
age = 36; //出错 
*/

// 不允许重复声明
/*
const name = '123';
const name = '456';
*/

// const声明的限制是适用于它指向的变量的引用。
// 如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const的限制
const person = {};
person.age = 10;

// for循环 不能用const来声明迭代变量（会自增）
// for-in
let i = 0;
for (const key in {a: 1, b:2}) {
    console.log(key);
}
// for-of
for (const value of [1,2,3,4,5]) {
    console.log(value);
}
