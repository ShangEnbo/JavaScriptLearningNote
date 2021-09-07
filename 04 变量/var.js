// 1、var关键字
// 定义变量，不初始化的情况下可以保存任何类型的值，暂时会保存为一个特殊值 undefined
var age;    //全局声明
console.log(age); //等于window.age

// 变量初始化 var关键字可以重复声明
var year = 2021;  //数字型
console.log(year);
var year = '2021';  //字符串
console.log(year);
var year = false;  //Boolean型
console.log(year);

// var 声明作用域
// var声明的范围是函数作用域
function test() {
    var age = 20;  //局部变量
}
test();
console.log(age);  //报错 由于我上面声明过age了，所以是undefined，更改后由于出错下面的代码就不执行了。

// 没有关键字声明变量，则为全局变量，可以被外部访问到，加入window中
function test() {
    message = '123';  //全局变量
}
test();
console.log(message);  //不运行test函数，不生效，等于window.message

// 定义多个变量，可以在一条语句中用逗号分割每个变量（可选初始化），
// 运行机制：在js执行过程中，同一块作用域中单行声明的var都会最终统一在一起像下面的方式
var age = 20,
    message = '123',
    found = true;

// var声明提升
function foo() {
    console.log(num);
    var num = 26;
}
foo();  //undefined
// 之所以没有报错，是因为js在运行时等价于看成下面代码
function foo() {
    var num;
    console.log(num);
    num = 26;
}
foo();
// 这就是 “提升”
