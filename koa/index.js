const Koa = require("koa")
const app = new Koa()
// ctx===context 上下文
app.use((ctx, next) => {
    ctx.response.body = "<b>hello world</b>"
})
app.listen(3000)

