var http = require('http')
var https = require('https')
var url = require('url')

http.createServer((req, res) => {
    var urlObj = url.parse(req.url,true)
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin":"*"
    })
    httpget(res)
    /* res.end(`${JSON.stringify({
        name:"jam",
        age:18
    })}`) */
}).listen(3000)

function httpget(response){
    var data= ''
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%9D%AD%E5%B7%9E&ci=50&channelId=4`,
        (res)=>{
            res.on("data",(chuck)=>{
                data+=chuck
            })
            res.on("end",()=>{
                console.log(data);
                response.end(data)
            })

        }
    )
}