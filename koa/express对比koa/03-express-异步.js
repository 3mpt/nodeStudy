const express = require("express")
const app = express()
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') return
    console.log('11111');
    next()
    
})
app.use(async (req, res, next) => {
    console.log('22222');
    // 异步
    await delay(1000)
    console.log('33333');
    console.log('44444');
    // express 给前端的响应在最后一个中间件做处理的
    res.send("hello world")
})
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}


app.listen(3000)