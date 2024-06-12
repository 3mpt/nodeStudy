var http = require('http')
var https = require('https')
var url = require('url')
var event = null
const { EventEmitter } = require('events')


http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin": "*"
    })
    event = new EventEmitter()
    event.on("play", (data) => {
        console.log("事件触发了-play", data);
        res.end(data)
    })
    httpget()
    /* res.end(`${JSON.stringify({
        name:"jam",
        age:18
    })}`) */
}).listen(3000)

function httpget(cb) {
    var data = ''
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%9D%AD%E5%B7%9E&ci=50&channelId=4`,
        (res) => {
            res.on("data", (chuck) => {
                data += chuck
            })
            res.on("end", () => {
                console.log(data);
                event.emit("play", data)
                // response.end(data)
                // cb(data)
            })

        }
    )
}