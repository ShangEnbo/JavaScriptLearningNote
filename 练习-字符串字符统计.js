function count(str) {
    let obj = {};
    for (let i = 0; i<str.length;i++) {
        var char = str.charAt(i);
        if(obj[str[i]]){
            obj[str[i]]++;
        }else {
            obj[str[i]]=1;
        }
    }
    return obj;
}

var obj = count('javaScript');
console.log(obj);