const Koa = require("koa")
const app = new Koa()
const router = require("./routes")


// 在注册应用级组件

app.use(router.routes()).use(router.allowedMethods) // 404=>405 请求方式不对
app.listen(3000)
