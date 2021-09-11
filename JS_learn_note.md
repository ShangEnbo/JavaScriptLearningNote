# Javascript_Learn

## 一、行内、内嵌、外部链接

### 	1、行内的js

```html
<!-- onclick为js 直接加入行内元素中 -->
<input type="button" value="点我试试" onclick="alert('Congratulation！')">
```

### 	2、内嵌的js

```html
<!-- 可以直接加在body或head处 -->
<body>
    <script>>
    	alert('Good!');
    </script>
</body>
```

### 	3、外部的js

```html
<!-- 加在head或body都可 -->
<script src="outside.js"></script>
```

```javascript
// outside.js
alert("Nice!")
```

## 二、js的注释

### 	1、单行注释

```javascript
// 单行注释
// 快捷键为ctrl+/
```

### 	2、多行注释(块级注释)

```javascript
/*
	多行注释
	我是商恩博
	这是一个注释
	可以多行
	快捷键为shift+alt+a
	vscode中的keyboard shortcuts 
	快捷键修改：ctrl + shift + /
       
*/
```

## 三、输入输出语句

### 	1、输入语句

```html
<script>
	promote('input sentence');
</script>
```

### 	2、警示框(弹窗)

```html
<script>
	alert('user can see output sentence');
</script>
```

### 	3、控制台输出

```html
<script>
	console.log('programmer can see');
</script>
```

## 四、JavaScript变量

### 	1、var关键字

#### 		(1) 变量声明

不初始化可以保存任何类型的值，暂存值为undefined

var关键字可以重复声明

```javascript
// defined variable
var age;
var name;
var grade;
// more defined variable
// 运行机制：在js执行过程中，同一块作用域中单行声明的var都会最终统一在一起像下面的方式
var age = 20,
    message = '123',
    found = true;
```

#### 		(2) 变量初始化

```javascript
var year = 2021;     // 当前类型为 数字型
var year = '2021';   // 当前类型为 字符型
var year = false;    // 当前类型为 布尔型
```

#### 		(3) 声明作用域

var声明的范围是函数作用域

```javascript
var age = 10；				// 全局变量
function test() {
	var age = 20;		// 局部变量，只作用在当前函数
}
console.log(age);  // 输出为10
test();
console.log(age);  // 输出为20
```

没有关键字声明变量，则为全局变量，可以被外部访问到，加入window中

``` javascript
function test() {
    message = '123';		// 全局变量
}
test();
console.log(message);		// 不运行test函数，不生效，输出为'123'
console.log(window.message) // 与message相等
```

#### (4) 声明提升

使用var关键字时，下面的代码不会报错，因为使用这个关键字声明的变量会自动提升到函数作用域顶部

```javascript
function foo() {
	console.log(num);
    var num = 26;
}
foo();		// 输出为 undefined
```

之所以不会报错，在ECAMScript运行时把他看成等价于下面代码

```javascript
function foo() {
	var num;		// 提升
	console.log(num);
	num = 26;
}
foo();		// 输出为 undefined
```

### 2、let关键字

#### (1) 变量声明

不初始化可以保存任何类型的值，暂存值为undefined

```javascript
let age;
let name;
let grade;
```

在同一块中不允许重复声明，否则会报错

```javascript
let age = 12;
let age = 20;		// 报错（Syntaxerror）
```

> ```javascript
> let age = 12;
> function test() {
> 	let age = 10;
> }
> console.log(age);		// 输出为12，这样声明是允许的，因为同一块中没有重复声明
> ```
>

不允许var 和 let 同时声明同一标识符

```javascript
let name;
var name;		// 报错

var age;
let age;		// 报错
```

#### (2) 声明作用域

let声明的范围是块作用域，在块作用域外则会报错

```javascript
if(true) {
	let name = 'shang';
    console.log(name);		// 输出为 shang
}
console.log(name);		// 报错（name is not defined），因为let声明变量只在块中作用
```

#### (2) 暂时性死区 （temporal dead zone, tdz）

let声明的变量不会在作用域中提升

```javascript
console.log(num);
let num = 20;		// 报错，ReferenceError
```

#### (3) 全局声明

let在全局声明时不会成为window对象的属性

```javascript
let str = 'vote';
console.log(str);			// 'vote'
console.log(window.str);	// undefined
```

#### (4) for循环的let声明

```javascript
for(let i = 0;i < 5; ++i) {
    console.log(i);		// 0, 1, 2, 3, 4
}
console.log(i);		// ReferenceError: i is not defined
```

### 3、const关键字

#### (1) 变量声明及初始化

与let关键字类似，不同的是必须初始化变量并不可修改

不允许重复声明

```javascript
const name = 'shang';
const age =  21;
```

const声明的限制是适用于它指向的变量的引用，换句话说，如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const的限制

```javascript
const person = {};
person.age = 10;		// 这样是允许的
```

#### (2) 声明作用域

const与let相同，都作用于块中

```javascript
const name = 'Mike';
if(true) {
	const name = 'Anny';
}
console.log(name);		// 输出为 Mike
```

#### (3) for循环的const声明

for循环不能用const来声明迭代变量（会自增的变量）

```javascript
for(const i = 0; i < 3; ++i) {
    console.log(i);
}
// 输出为 0，0，0
```

但 for-in 和 for-of 是允许的

```javascript
// for-in
for(const key in {a:1, b:2}) {
	console.log(key);
}
// 输出为 1， 2
```

```javascript
// for-of
for(const value of [1,2,3,4]) {
	console.log(value);
}
// 输出为 1， 2， 3， 4， 5
```

## 五、JavaScript数据类型

### 1、数据类型有哪些？

| **未定义**   | **undefined** |
| ------------ | ------------- |
| **空值**     | **null**      |
| **布尔型**   | **boolean**   |
| **数值**     | **number**    |
| **不是数值** | **NaN**       |
| **字符串**   | **string**    |
| **对象**     | **object**    |
| **函数**     | **function**  |
| **符号型**   | **symbol**    |

### 2、typeof 操作符

typeof 操作符是用来识别变量类型，对一个值使用typeof操作符会返回字符串（string）

```js
let name = 'Mike';
console.log(typeof name);		// string
console.log(typeof(name));		// string
console.log(typeof 90);			// number
```

### 3、undefined 类型

undefined 类型只有一个值，就是特殊值 **undefined**。当使用var或let声明了变量但没有初始化时，就相当于给变量赋予了undefined值

```js
let message;
console.log(message == undefined);		// true
```

不建议给声明变量时给标识符赋值为undefined，这是不必要的，因为默认情况下，任何未经初始化的变量都会取得undefined值

字面值undefined主要用于比较，为了正式明确空对象指针（null）和未初始化变量的区别

在对未初始化的变量调用 typeof 时，返回的结果时 undefined ,但对未声明的变量调用 typeof 时，返回的结果仍是undefined，这是一个奇怪的现象

```js
let age;
console.log(typeof age);		// undefined
console.log(typeof name);		// undefined
```

即使未初始化的变量会被自动赋予undefined值，但我们仍然建议在声明变量的同时初始化。这样，当typeof返回undefined时，你就会知道那是因为给定的变量尚未声明，而不是声明了但未初始化。

undefined是个**假值**，通过下面代码进行演示

```js
let message;
// age 没有声明
if(message) {
    // 不会执行
}
if(!message) {
    // 会执行
}
if(age) {
    // error
}
```

### 4、Null类型

Null类型同样只有一个值，特殊值**Null**，null值表示一个空对象指针

```js
console.log(typeof null);		// Object
```

undefined 和 null 表面相等

```js
console.log(null == undefined);		// true
console.log(null === undefined);	// false
```

null是一个 **假值**

```js
let message = null;
if(message) {
	// 不会被执行
}
```

### 5、Boolean类型

布尔值，有两个字面值，`true` 和` false`  ，这两个布尔值不同于数值，因此true不等于1，false不等于0。

```js
let found = true;
let lost = false;
console.log(found == 1);		// true
console.log(lost == 0);			// false
```

要将一个其它类型的值转换为布尔值，可以调用**Boolean()**转型函数

| 数据类型  | 转换为true        | 转换为false  |
| --------- | ----------------- | ------------ |
| Boolean   | true              | false        |
| String    | 非空字符串        | 空字符串 " " |
| Number    | 非零数值          | 0、NaN       |
| Object    | 任意对象          | null         |
| Undefined | **N/A（不存在）** | undefined    |

### 6、Number 类型

Number类型中不再区分整数和浮点数，统称类型为Number

数值字面量可以为十进制、八进制（不推荐）、十六进制、科学计数法

八进制在严格模式下是无效的，会导致js引擎抛出语法错误，在ES6和ECAMScript 2015中的八进制通过前缀`0o`来表示。

使用八进制和十六进制格式创建的数值在所有数学操作中被视为十进制数值

#### (1) 浮点值

要定义浮点值，数值中必须包含小数点，且小数点后必须至少有一个数字并不能为0

```js
let floatnum1 = 1.1;
let floatnum2 = 0.1;
let floatnum3 = .1;		// 有效，但不推荐
```

因为存储浮点值使用的内存空间是存储整数值的两倍，所以在小数点后面没有数字的情况下，数值就会变成整数。

```js
let floatnum1 = 1.;		// 小数点后面没有数字，当成整数1处理
let floatnum2 = 10.0;	// 小数点后面是0，当成整数10处理
```

浮点数可以用科学计数法来表示

```js
let num = 1.321e5;		// 132100
let point = 3e-5;		// 0.00003 
```

※ 浮点数加法问题

```
0.1 + 0.2 == 0.3		// false
```

## 六、数组、对象、Map、Set

### 1、数组

数组可以看成一个栈结构

```js
var arr = [1,2,3.14,'hellp',null,true];
var arr = new Array()
```

直接给`Array`的`length`赋一个新的值会导致`Array`大小的变化，若大于本身长度，则会以undefined进行补充；同理，通过索引赋值时，索引超过了范围，同样会引起上面的情况。

在编写代码时，不建议直接修改`Array`的大小，访问索引时要确保索引不会越界。

不要直接给数组名赋值，否则会覆盖掉以前的数据

#### **数组的基础方法**

##### (1) indexOf	搜索指定元素位置

##### (2) slice	截取Array的部分元素

##### (3) push 和 pop	末尾添加和删除操作

##### (4) unshift 和 shift	头部添加和删除操作

##### (5)sort	排序

##### (6) reverse	反转

##### (7) splice	从指定的索引开始删除若干元素，然后再从该位置添加

##### (8) concat	和另一个数组连接

##### (9) join	把每个元素用指定的字符串连接起来，返回连接后的字符串

##### 多维数组



**迭代器**

```
var arr = [1,3,4,5];
Array.form(arr.key());		// 返回一个只有数组索引的新数组
Array.form(arr.value());	// 返回一个只有数组值的新数组
Array.form(arr.entries());	// 返回一个索引/值对的新数组	[ [0,1], [1,3], [2,4], [3,5] ]

for (const [idx, element] of arr.entries()) {
	console.log(idx);
    console.log(element);
}
```



### 2、对象

对象时一种无序的集合数据类型，由若干键值对组成

```js
var car = {
name:BMA
color:red;
}
```

**新增、删除、判断存在属性、判断属性是否为继承的**

```js
// 新增可以直接声明或初始化
var xm = {
    name：'小明'
}
xm.age;
xm.age=18;
delete xm.age;
'name' in xm;
xm.hasOwnProperty('name'); 	// true
```



### 3、Map

Map 是一组键值对的结构，具有极快的查找速度

例子：要根据同学的名字查找对应的成绩，如果用Array实现，需要两个Array

Map相当于java中的二维数组

```js
var map = new Map();
var map = [['name', map],['color', red]];
```

**添加、取值、删除、判断存在操作**

```js
var m = new Map();
m.set('Adam', 67);
m.get('Adam');
m.delete('Adam');
m.has('Adam');
```

一个key只能对应一个value值，所有多次对一个key放入value，后面的值会把前面的的值顶掉

### 4、Set

Set 是一组key的集合，不存储value。集合中不允许有重复值

```js
var s1 = new Set();
var s2 = new Set([1,2,3]);
```

重复元素在Set中自动被过滤，这个重复元素是指数据类型和值都一致的元素，例：3和'3'是不重复的。

**添加、取值、删除操作**

```js
var s = new set();
s.add(4);
s.add('4');
s.delete(4);
// 取值可采用索引的方法
console.log(s[0]);
```

### 条件表达式

条件表达式可以节省代码量

```js
var a = (age>18)?'成年'：'未成年'；
// (条件)？结果1：结果2
// 等价于
if(age>18) {
    a = '成年';
}else{
    a = '未成年';
}
```

**案例：数字补’0‘**

```js
var num = prompt("请输入0·59的数字");
var res = (num<10)?"0"+num:num;
alert(res);
```

### Switch语句

**案例1：查询水果**

```js
var fruit = prompt("请输入水果名称");
switch(fruit){
    case '苹果':
    	alert('苹果的价格为3.5元/斤');
        break;
    case '香蕉':
        alert('xxx');
        break;
    default:
        alert('没有此水果');
}
```

**案例2：判断时间阶段。比如用户输入12点弹出中午好用户输入18点弹出傍晚好用户输入23点弹出深夜好**

```js
var time = prompt("please input time");
if(7<=time<12){
    alert("上午好");
}else if(time == 12) {
    alert("中午好");
}else if(12<time<18) {
    alert("下午好"); 
}else if(18<=time<23) {
    alert("傍晚好");
}else if(23<time<7) {
    alert("深夜好");
}
```

**案例3：比较两个数的最大值（用户依次输入2个值，最后弹出最大的那个值)**

```js
var num1 = prompt("first input number:");
var num2 = prompt("second input number:");
if(num1 < num2) {
    alert(num2);
}else {
    alert(num1);
}
```

**案例4：用户输入一个数，来判断是奇数还是偶数**

```js
var num = prompt("please input number:");

// switch
switch(num%2) {
    case 0:
        alert("even");
        break;
    default:
        alert("odd");
        break;
}

// 条件表达式 (最简单，代码量最少)
var res = (num%2 == 0)?'even':'odd';
alert(res);

// if-else
if (num % 2 ==0) {
    alert('even');
}else {
    alert('odd');
}
```

**案例5：根据用户输入的数值（数字1到数字7)，返回星期几**

```js
var num = prompt("please input number（1-7）");
if(1<=num<=7) {
    switch(num) {
       case 1:
            alert('星期一');
            break;
       case 2:
            alert('星期二');
            break;
       case 3:
            alert('星期三');
            break;
       case 4:
            alert('星期四');
            break;
       case 5:
            alert('星期五');
            break;
       case 6:
            alert('星期六');
            break;
       case 7:
            alert('星期日');
            break;
    }
}
```

**案例6：接收班长口袋里的钱数?若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃抉餐。若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够六**

```js
var money = prompt("monitor's bag have XX money?");
if(money>=2000) {
    alert('xican');
}else if(1500<=money<2000) {
    alert('kuaican');
}else if(1000<=money<1500) {
    alert('drinker');
}else if(500<=moeny<1000) {
	alert("candy");
}else {
    alert("next have more money");
}
```

**案例7：分数转换给一个分数，判定等级。大于等于90 A，大于等于80小于90 B，大于等于70小于80 C，大于等于60小于70D，小于60E**

```js
var grade = prompt("please input your grade");
if(grade>=90) {
    alert('A');
}else if(80<=grade<90) {
    alert('B');
}else if(70<=grade<80) {
    alert('C');
}else if(60<=grade<70) {
	alert('D');
}else {
    alert('E');
}
```



### Switch语句和if else if 语句的区别

1. switch 通常处理case为确定值的情况，而if-else语句更加灵活，常用于范围判断

2. switch 语句进行条件判断后直接执行到程序的条件语句，效率更高。而if-else语句有几种条件，就得判断多少次。

3. 当分支比较少时，if-else 语句的执行效率比switch语句高

4. 当分支比较多时，且为确定值时，switch语句的执行效率比较高，而且结构清晰。

   **总结：判断范围，直接用if-else；有确定值的分支比较少用if-else，分支比较多用switch**

   | 情况         | 子情况       | 使用方法    |
   | ------------ | ------------ | ----------- |
   | **判断范围** |              | **if-else** |
   | **有确定值** | **分支较少** | **if-else** |
   | **有确定值** | **分支较多** | **switch**  |



### for 循环

**案例：九九乘法表**

```js
var str = '';
for(let i=1; i<=9; i++){
	for(let j=1; j<=i;j++){
        str += i+"×"+j+"="+i*j+"\t";
    }
    str += '\n';
}
console.log(str);
```

![image-20210910092718010](C:\Users\14460\AppData\Roaming\Typora\typora-user-images\image-20210910092718010.png)

#### 循环案例：简易ATM机

```js
var money = 0;
do {
    var choice = prompt(
        "请输入您要的操作：\n1.存钱\n2.取钱\n3.显示余额\n4.退出"
    );
    switch (choice) {
        case "1":
            storage();
            break;
        case "2":
            get();
            break;
        case "3":
            show();
            break;
        case "4":
            break;
        default:
            alert("无此选项");
            break;
    }
    if (choice == 4) {
        exit();
        break;
    }
} while (true);

function storage() {
    var add_money = prompt("请输入存钱数：");
    money += Number(add_money);
    show();
}

function get() {
    var decrease_money = prompt("请输入取钱数：");
    while(decrease_money > money){
        decrease_money = prompt("余额不足，请重新输入");
    }
    money -= Number(decrease_money);
    show();
}

function show() {
    alert("你现有余额为：" + money);
}

function exit() {
    alert("你正在退出！");
}
```

### break 、 continue 、return 的区别

break 结束函数循环体

continue 跳过本次循环，进入下次循环

return 退出循环，还能返回return语句中的值，同时还可以结束当前函数体的代码

### 函数内置的arguments 

arguments是一个伪数组

具有数组的length的属性

按照索引的方式存储的

他没有真正数组的一些方法

proto原型函数

只有函数才有arguments

### JavaScript 预解析

#### 变量预解析

js引擎会把代码里面所有的 `var` 还有`funciton`提升到当前作用域的最前面

代码执行 按照代码书写的顺序从上往下执行

**变量提升**

```js
console.log(num);	// undefined
var num = 10;
```

等价于

```js
var num;
console.log(num);	// undefined
num = 10;
```

**函数提升**

命名函数 调用这个函数时在函数上面，或函数下面都可以调用

```js
// fn();

funciton fn() {
    console.log('funciton');
}
fn();	// 两者效果相同
```

函数表达式

```js
// fn1();	 报错 fn1 is not function;   变量提升
var fn1 = function() {
  console.log("函数表达式");
};
fn1();
```

等价于

```js
var fn1;
fn1();	 报错 fn1 is not function;   变量提升
fn1 = function() {
  console.log("函数表达式");
};
fn1();
```

案例，集合声明

```js
function f1() {
  var a=b=c=9;
  console.log(a);	// 9
  console.log(b);	// 9
  console.log(c);	// 9
}
f1();
console.log(c);	// 9
console.log(b);	// 9
console.log(a);	// a is not defined
```

等价于

```js
function f1() {
  var a;
  c=9;	// 全局变量
  b=c;	// 全局变量
  a=b;
  // a=b=c=9;
  console.log(a);
  console.log(b);
  console.log(c);
}
f1();
console.log(c);
console.log(b);
console.log(a);
```

### 构造函数

构造函数名字首字母要大写

构造函数不需要return 就可以返回结果

调用构造函数必须使用 new

```js
function Star(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sing = function(sang) {
        console.log(sang);
    }
}
var ldh = new Star('刘德华',28,'MAN');
ldh.sing('shang');
```

`new` **关键字的执行过程**

1. new构造函数可以在内存中创建了一个空对象
2. this 就会指向刚才创建的空对象
3. 执行构造函数里面的代码 给这个空对象添加属性和方法
4. 返回这个对象
5. thisji'hui'zhi'xiang'gang'cai

### For-in和For-of

for-in 输出索引	数组=>0,1,2,3    对象=>name,age,sex

for-of 输出值	按索引顺序输出值

### 内置对象

**Math**

```js
Math.PI
Math.abs
Math.floor
Math.ceil
Math.round
Math.random
Math.max
Math.min
...
```

**Date**

日期对象是一个构造函数 必须new来调用

```js
var arr = new Date();
console.log(arr);
// 参数常用写法
// 数字型
var arr = new Date(2021, 5, 16);
// 字符型
var arr = new Date('2019-10-20 10:10:10');
```

格式日期 **年月日星期**

```js
var date = new Date();
date.getFullYear();
date.getMonth() + 1;	// Month : 0-11;
date.getDate();
date.getDay();	// Day: 星期日0-星期六6

// 2021年9月11日 星期六
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var year = date.getFullYear();
var month = date.getMonth() + 1;
var date = date.getDate();
var day = date.getDay();
console.log('Today is' + year +'年' + month + '月' + date +'日 '+ arr[day]);
```

格式化 **时分秒**

```js
var date = new Date();
date.getHours();
date.getMinutes();
date.gerSeconds();

// 封装函数 返回时分秒 格式 01:01:01
function getTime() {
    var time = new Date();
    var hour = time.gerHours();
    var minute = time.getMinutes();
    var second = time.gerSeconds();
    hour < 10 ? '0'+ hour : hour;
    minute < 10 ? '0'+ minute : minute;
    second < 10 ? '0'+ second : second;
    return hour + ':' + minute + ":" + second;
}
```

**时间戳**

时间戳（总毫秒数） 距离1970年1月1日过了多少毫秒

```js
var date = new Date();
date.valueof();
date.getTime();

// 简单写法
var date = +new Date();

// H5新增
Date.now();
```

**案例:倒计时**

```js
// 毫秒转换天、时、分、秒
function countDown(time) {
    var nowTime = +new Date();
    var inputTime = + new Date(time);
    var times = (inputTime - nowTime) / 1000;  // s
    var day = parseInt(times / 60 / 60 / 24);
    var hour = parseInt(times / 60 / 60 % 24);
    var minute = parseInt(times / 60 % 60);
    var second = parseInt(times % 60);
    xx(day);
    xx(hour);
    xx(minute);
    xx(second);
    return day+'天'+hour+'时'+minute+'分'+second+'秒';
}

function xx(n) {
    n = n < 10 ? '0' + n : n;
	return n;
}
```

**数组内置对象 `Array`**

```js
// 创建数组
var arr = [];
var arr = [1,2,3];
var arr = new Array();
var arr = new Array(3);		// length 3 
var arr = new Array(2,3);	// length 2  [2,3]
```

```js
// 判断数组 
// instanceof 关键字
var arr = [];
console.log(arr instanceof Array);	// true
// Array.isArray()	H5新增
console.log(Array.isArray(arr));
```

```js
// 添加、删除数组
arr.push();		// 在后面添加	返回新的长度
arr.unshift();	// 在前面添加	返回新的长度
arr.pop();		// 在后面删除	返回删除的值
arr.shift();	// 在前面删除	返回删除的值
```

```js
// 数组排序
arr.reverse();	// 翻转
arr.sort()		// 排序（冒泡）
arr.sort((a,b)=>return a-b); // 升序
arr.sort((a,b)=>return b-a); // 降序
```

```js
// 索引方法
// 只返回第一个满足条件的索引号 找不到元素返回 -1
// indexOf() 从前面查找
arr.indexOf();		// 返回该数组元素的索引号，
// lastIndexOf() 从后面查找
arr.lastIndexOf();


// 数组去重案例
var arr = ['c','a','z','a','b','c','x','c','b'];
function arrUnique(arr) {
  var new_arr = [];
  for(let i = 0; i < arr.length; i++){
      if(new_arr.indexOf(arr[i]) === -1){
          new_arr.push(arr[i]);
      }
  }
  return new_arr;
}
console.log(arrUnique(arr));
```

```js
// 数组转字符串
arr.toString();
arr.join('!');
```

```js
// 数组连接	concat 返回一个新的数组
var arr = [1,2,3];
var arr1 = [3,4,5];
arr.concat(arr1);
arr.concat(arr1,arr,arr,arr1);
// 数组截取	slice 返回一个新的数组
// arr.slice(起点,终点）;
arr.slice(3,5); // 超过最大索引值无影响
// 数组删除 splice 返回删除的元素的数组
// arr.splice(开始位置，删除个数);
arr.splice(2,4);
```

**字符串的内置对象**

```js
var str = 'string';
str.length; // ??为什么基本数据类型有length

// str 基本包装类型，把简单数据类型包装成复杂数据类型
var temp = new String('string');
str = temp;
temp = null;

// 字符串的不可变性
当我们新建一个字符串时，内存会开辟一个空间，放入字符串的值，而当我们改变字符串的值，会再开辟一个空间存放新的字符串的值，原有的还是存在内存中，虽然看上去改变了内容，但其实是地址变了，标识符重新指向，所以不要大量的拼接字符串
```

**字符串的不可变性 **  不要轻易尝试

```js
// 根据字符返回位置
var str = "string";
str.indexOf('r');
str.indexOf('r',2); // 从索引号是2的位置开始往后查找
// lastIndexOf 相反
```

**string工具类**

```js
var str = 'mike';
str[index];
// charAt 根据位置返回字符
str.charAt(index);
// charCodeAt 根据位置返回字符的ACSII值	判断用户按下了哪个键
str.charCodeAt(index);
// substr 
str.substr(1,3);	// ike
// replace	只会替换第一个字符
str.replace('i','a')	// make
// split 字符转数组，有规律
str.split(',');
```

### 数据类型的内存分配

**简单数据类型**

存放在栈里面，存放的是值

**复杂数据类型**

首先在栈里面存放地址，十六进制表示，然后这个地址指向堆里面的数据，存放在堆里面

