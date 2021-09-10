/*
    JavaScript字符串的基本函数
 */
var word = "MicalJason";
var word_other = "Good";
// charAt() 	返回指定索引位置的字符
var character = word.charAt(1);
var char_other = word[1];
console.log(character);         // Output: i
console.log(char_other);        // Output: i

console.log("--------------------------------------");

// charCodeAt() 	返回指定索引位置字符的 Unicode 值
var character = word.charCodeAt(1);
console.log(character);         // Output: i

console.log("--------------------------------------");

// concat() 	连接两个或多个字符串，返回连接后的字符串
console.log(word.concat(" ", word_other, "!"));
console.log(word + " " + word_other + "!");

// fromCharCode() 	将 Unicode 转换为字符串
// indexOf() 	返回字符串中检索指定字符第一次出现的位置
// lastIndexOf() 	返回字符串中检索指定字符最后一次出现的位置
// localeCompare() 	用本地特定的顺序来比较两个字符串
// match() 	找到一个或多个正则表达式的匹配
// replace() 	替换与正则表达式匹配的子串
// search() 	检索与正则表达式相匹配的值
// slice() 	提取字符串的片断，并在新的字符串中返回被提取的部分
// split() 	把字符串分割为子字符串数组
// substr() 	从起始索引号提取字符串中指定数目的字符
// substring() 	提取字符串中两个指定的索引号之间的字符
// toLocaleLowerCase() 	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
// toLocaleUpperCase() 	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
// toLowerCase() 	把字符串转换为小写
// toString() 	返回字符串对象值
// toUpperCase() 	把字符串转换为大写
// trim() 	移除字符串首尾空白
// valueOf() 	返回某个字符串对象的原始值

var oj = new String("2021");
console.log(typeof oj.valueOf());

console.log("--------------------------------------");


var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // -
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
