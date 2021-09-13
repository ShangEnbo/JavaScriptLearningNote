# JavaScript 第二阶段学习  9.12-9.13

**一、DOM**

1. DOM节点 node 

   - 了解HTML文档中所有内容都是节点

   - 了解DOM 节点树的结构
   - 了解父、子、同胞节点的概念
   - HTML为整个文档的根节点，head和body为他的两个子节点
   - `childNodes`  `children`   `firstChild`   `lastChild`

2. DOM方法

   - 创建节点

      `createElement`   `createTextNode`   `createAttribute`

   - 获取元素（节点）方法

      `getElementByid`   `getElementByTagName`   `getElementByClassName` `querySelector`

     `querySelectorAll`

   - 增加和删除元素（节点） 

     `appendChild`   `removeChild`  `insertBefore`

   - 节点的属性

     `innerHTML`   `parentNode`   `childNodes`

   - 获取和设置属性

     `getAttribute`   `setAttribute`  

3. DOM属性  `innerHTML`  `nodeName`  `nodeValue`  `nodeType`

4. DOM事件 `onclick` `onload` `onchange` `onmouseover` `onmouseout`

5. DOM修改样式     element.style.color('red');

6. DOM修改类名     node.className = 'class';

7. DOM案例

   图片库 - http://shang-enbo.gitee.io/html-web-page-access/pictureWarehouse.html

**二、BOM**

1. window 对象
   - global全局属性
   - 常用方法  alert confirm prompt
   - 获取窗口的宽度 innerWidth
2. location 对象
   - 提供了文档的相关信息
   - location.href
   - location.reload
   - location.pathname
   - location.search
   - location.protocol
   - location.hostname
3. navigator 对象
   - 客户端的相关信息
   - **navigator.userAgent**
   - navigator.platform
4. histor 对象
   - 记录从打开网页开始浏览的历史
   - history.length
   - history.back()
   - history.forword()
   - history.go()  -1后退 1前进