/*
封装函数 工具类
作者：ShangEnbo
*/

// 判断素数
function Prime(num) {
  if (num == 1) return false;
  //两个较小数另外处理
  if (num == 2 || num == 3) return true;
  //不在6的倍数两侧的一定不是质数
  if (num % 6 != 1 && num % 6 != 5) return false;
  var tmp = Math.sqrt(num);
  //在6的倍数两侧的也可能不是质数
  for (let i = 5; i <= tmp; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) return fasle;
  }
  //排除所有，剩余的是质数
  return true;
}

// 数组去重
function arrUnique(arr) {
  var new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (new_arr.indexOf(arr[i]) === -1) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}

// 字符串中相同字符的个数
function strCount(str, content) {
  var count = 0;
  var index = str.indexOf(content);
  while (index !== -1) {
    index = str.indexOf("o", index + 1);
    count += 1;
  }
  return count;
}

// 字符串中相同字符的索引号
function strIndex(str, content) {
  var index_arr = [];
  var index = str.indexOf(content);
  while (index !== -1) {
    index_arr.push(index);
    index = str.indexOf("o", index + 1);
  }
  return index_arr;
}

// 统计字符串中出现次数最多的字符
function strMaxCountChars(str) {
  var obj = {}; // 对象
  var tempArr = []; // 暂存数组
  var arrMax = []; // 最大值数组
  var max;
  // 读取每个字符出现的个数，以对象形式存储
  for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (obj[chars]) {
      obj[chars]++;
    } else {
      obj[chars] = 1;
    }
  }
  // 将所有的值放入一个数组中
  for (var key in obj) {
    tempArr.push(obj[key]);
  }
  // 进行降序排序
  tempArr.sort((a, b) => b - a);
  max = tempArr[0];
  // 资源释放
  tempArr = null;
  // 将所有键对的值为最大值的索引放到新数组中
  for (var key in obj) {
    if (obj[key] == max) {
      arrMax.push(key);
    }
  }
  return arrMax;
}

// 字符串中的某个字符的全部替换
function strReplace(str, char, otherChar) {
  while(str.indexOf(char) !== -1) {
    str = str.replace(char,otherChar);
  }
  return str;
}

pinyin.getFullchar()
/*
var str = '';
for(let i=1; i<=9; i++){
	for(let j=1; j<=i;j++){
        str = str + i+"×"+j+"="+i*j+"\t";
    }
    str += '\n';
}

*/

/*
var arr = new Array();
var arr = [1, 2, 3];
var sum = 0;
for (key of arr) {
    sum+=key;
}
*/
/*
// 冒泡排序
var arr = [5,4,3,7,510,9,12,6,2,1];
var date ;
console.log(arr.sort((a,b)=> a-b));
// var num = arr.length-1;
for (let i = 0; i <=arr.length-1; i++) {
    for (let i = 0; i<=arr.length-1; i++) {
        if (arr[i]<arr[i+1]) {
            date = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = date;
        }
    }
}
console.log(arr);
*/

/*
// 数组超参
function a(a,b,...rest) {
    console.log(rest)
    function b(){
        console.log(66);
    }
    return b;
}
a(1,2,3,4,5,6);

var sjs = a();
console.log(sjs);
sjs();
*/

/*
//函数小作业
//加法计算器
function add(a, b) {
  return a + b;
}
// 求两个数的最大值
function max(a, b) {
  return a < b ? b : a;
}
// 求三个数的最大值
function maxPlus(a, b, c) {
  var max = a < b ? b : a;
  max = max < c ? c : max;
  return max;
}
*/
/* 
//  函数声明两种方式
function fn() {
  console.log("命名函数");
}
// 匿名函数
var fn1 = function () {
  console.log("函数表达式");
};
// 箭头函数   () => {}
var fn2 = () => {
    var name;
    name = "shang";
    console.log(name);
};
// 自调用函数 ({ 函数体 })()  可以使用箭头函数
(function(){
  console.log('1');
})();

(()=>{
  var age = 18;
  console.log(age);
})();

(fn1)();
*/
/*
// fn1();
var fn1 = function() {
  console.log("函数表达式");
};
fn1();
*/
/*
function f1() {
  var a=9,b=9,c=9;
  console.log(a);
  console.log(b);
  console.log(c);
}
f1();
console.log(c);
console.log(b);
console.log(a);
*/
/*对象
var oj = new Object;
var oj1 = {};
var oj2 = {
  name:'mm',
  say:function() {
    console.log('hi');
  }
}
console.log(oj2.name);
console.log(oj2['name']);
oj2.say();
*/
/*Date 
var arr = new Date();
console.log(arr.getFullYear());
console.log(arr.getMonth()+1);
console.log(arr.getDay());
var arr = []
console.log(arr instanceof Array);
console.log(Array.isArray(arr));
*/
/* 
数组转字符串

var arr = [1,2,3];
console.log(arr.toString());
console.log(arr.join('&'));
var arr1 = [4,5,6];
console.log();
var new_a = arr.concat(arr1,arr,arr1,arr);
console.log(new_a);
//console.log(arr.slice(1,4));// 超过索引值，则无超过的索引
console.log(new_a.splice(4,6)); // 从第4个开始，删除后面的6个 ,返回删除的元素的数组
console.log(new_a);
*/

// var str = "";
// while(true){
//   for(var i = 1 ; i<=100000000000000000000;i++) {
//     str += i;
//   }
// }
// console.log(str);

/*
var str = 'abcoefoxyazzoposadodvovbodkasjhoahshjkshfksjdfkjlasdksjdhflkjasdlkjabnfljgbalkjvbakwalehowurhlsahffiewhuihweqkjrbljkbajksdbfkjabfkjldvkdncasjkdhsdhglsfhdguhsduogorvklxjnoiwajoiffheoagbkjsbnfjkdsnalkjfhuaehgbrklajbnkjlafOASIH';

function strCount(str,content){
  var count = 0;
  var index = str.indexOf(content);
  while(index !== -1) {
    index = str.indexOf('o',index + 1); 
    count += 1;
  }
  return count;
}
console.log(strIndex(str,'o'));
*/
/*
var str = '12312';
var a = str.charAt(3);
var b = str.charCodeAt(3)
console.log(b);
*/
/*
// var str = "abcoefoaxyaazzoapaosadodvovbo";
var str = 'abcoefoxyazzoposadodvovbodkasjhoahshjkshfksjdfkjlasdksjdhflkjasdlkjabnfljgbalkjvbakwalehowurhlsahffiewhuihweqkjrbljkbajksdbfkjabfkjldvkdncasjkdhsdhglsfhdguhsduogorvklxjnoiwajoiffheoagbkjsbnfjkdsnalkjfhuaehgbrklajbnkjlafOASIH';

var o = {
  age: 0,
};
console.log(o['age']);
if(o['age']){
  console.log(1);
}else{
  console.log(2);
}

for (var i = 0; i < str.length; i++) {
  var chars = str.charAt(i);
  if (o[chars]) {
    o[chars]++;
  } else {
    o[chars] = 1;
  }
}
console.log(o);
// 统计字符串中出现次数最多的字符
function strMaxCountChars(str) {
  var obj = {}; // 对象
  var tempArr = []; // 暂存数组
  var arrMax = []; // 最大值数组
  var max;
  // 读取每个字符出现的个数，以对象形式存储
  for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (obj[chars]) {
      obj[chars]++;
    } else {
      obj[chars] = 1;
    }
  }
  // 将所有的值放入一个数组中
  for (var key in obj) {
    tempArr.push(obj[key]);
  }
  // 进行降序排序
  tempArr.sort((a, b) => b - a);
  max = tempArr[0];
  // 资源释放
  tempArr = null;
  // 将所有键对的值为最大值的索引放到新数组中
  for (var key in obj) {
    if (obj[key] == max) {
      arrMax.push(key);
    }
  }
  return arrMax;
}
console.log(strMaxCountChars(str));
*/
