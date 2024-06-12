var http = require('http')
var https = require('https')
var url = require('url')

var cheerio = require("cheerio")

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true)
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin": "*"
    })
    httpget((data) => { // 回调函数编程方式，直接将一个函数作为实参
        res.end(spider(data))
    })
}).listen(3000)

function httpget(cb) {
    var data = ''
    https.get(`https://i.maoyan.com/`,
        (res) => {
            res.on("data", (chuck) => {
                data += chuck
            })
            res.on("end", () => {
                // console.log(data);
                // response.end(data)
                cb(data)
                
            })

        }
    )
}

function spider(data) {
    let $ = cheerio.load(data)
    let $moviewlist = $(".column.content")
    let movies = []
    $moviewlist.each((index, value) => {
        movies.push({
            title:$(value).find(".title").text(),
            grade:$(value).find(".grade").text()})

    })
    console.log(movies);
    return JSON.stringify(movies)
}