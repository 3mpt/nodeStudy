var http = require('http')
var https = require('https')
const { hostname } = require('os')
var url = require('url')

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin": "*"
    })
    httppost((data) => { // 回调函数编程方式，直接将一个函数作为实参
        res.end(data)
    })
    /* res.end(`${JSON.stringify({
        name:"jam",
        age:18
    })}`) */
}).listen(3000)

function httppost(cb) {
    var data = ''
    var options = {
        hostname: "m.xiaomiyoupin.com",
        port: "443",
        path: "/mtop/market/cat/detail",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // "Content-Type": "x-www-form-urlencoded"
        }
    }
    var req = https.request(options, (res) => {
        res.on("data",chunk=>{
            data+=chunk
        })
        res.on("end",()=>{
            cb(data)
        })

    })
    // req.write("name=kewin&age=100")
    req.write(JSON.stringify([{}, { catId: "5fe309e096ee9288ed504dd1" }]))
    req.end()


}