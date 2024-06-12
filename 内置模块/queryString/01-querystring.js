
var str = 'name=jams&age=88&location=dak'
var querystring = require('querystring')
var obj = querystring.parse(str) //字符串转对象
console.log(obj);
var myobj = { a: 1, b: "2312", c: 'sss' }
var mystr = querystring.stringify(myobj) //对象转字符串
console.log(mystr);

var escaped = querystring.escape(str) //转义
console.log(escaped);
var str2 =querystring.unescape(escaped) //在转义回来
console.log(str2);