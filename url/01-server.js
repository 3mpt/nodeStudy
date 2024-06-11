var http = require("http")
var url = require("url")
var moduleRenderHTML = require("./module/renderHTML.js")
var moduleRenderStatus = require("./module/renderStatus.js")
// 创建服务器
http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return
    const myURL = new URL(req.url, 'hhtp://127.0.0.1:3000')
    console.log('myurl:', myURL);

    for(var [key,value] of myURL.searchParams){
        console.log(key,value);
    }
    
    // console.log(urlObj);
    res.writeHead(moduleRenderStatus.renderStatus(req.url), { 'Content-Type': 'text/html;charset=utf-8' })
    res.write(moduleRenderHTML.renderHTML(req.url))
    res.end()
}).listen(3000, () => {
    console.log('server start');
})