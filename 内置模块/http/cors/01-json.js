var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    var urlObj = url.parse(req.url,true)
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin":"*"
    })
    res.end(`${JSON.stringify({
        name:"jam",
        age:18
    })}`)
}).listen(3000)