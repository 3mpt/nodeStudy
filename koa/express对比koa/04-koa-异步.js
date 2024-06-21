const Koa = require("koa")
const app = new Koa()
app.use(async (ctx, next) => {
    if (ctx.url === '/favicon.ico') return
    console.log('11111');
    var mytoken=await next()
    console.log('44444',mytoken);
    ctx.body = "hello world"

})
app.use(async (ctx, next) => {
    console.log('22222');
    // 异步
    await delay(1000)
    ctx.token = '123123WWWWW'
    console.log('33333');
    return ctx.token

})
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}


app.listen(3000)