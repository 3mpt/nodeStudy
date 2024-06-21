const Koa = require("koa")
const app = new Koa()
app.use((ctx,next)=>{
    if(ctx.url==='/favicon.ico') return
    console.log('11111');
    next()
    console.log('33333');
    ctx.body='hello'
})
app.use((ctx,next)=>{
    console.log('2222');
})



app.listen(3000)