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

布尔值，有两个字面值，true 和 false  ，这两个布尔值不同于数值，因此true不等于1，false不等于0。

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

八进制在严格模式下是无效的，会导致js引擎抛出语法错误，在ES6和ECAMScript 2015中的八进制通过前缀0o来表示。

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

