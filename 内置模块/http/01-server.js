var http = require("http")
var moduleRenderHTML =require("./module/renderHTML.js")
var moduleRenderStatus = require("./module/renderStatus.js")
// 创建服务器
http.createServer((req, res) => {
    //req: 接受浏览器传递的参数 
    //res: 返回渲染的内容
    // res.write('[1,2,3]')
    
    if(req.url==='/favicon.ico') return
    console.log(req.url);
    res.writeHead(moduleRenderStatus.renderStatus(req.url), { 'Content-Type': 'text/html;charset=utf-8' })
    res.write(moduleRenderHTML.renderHTML(req.url))
    res.end()
}).listen(3000, () => {
    console.log('server start');
})