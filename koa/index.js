const Koa = require("koa")
const app = new Koa()
const router = require("./routes")
const static = require("koa-static")
const path = require("path")
const bodyParser = require("koa-bodyparser")

// 在注册应用级组件
app.use(bodyParser()) //获取前端传来post参数
app.use(static(
    path.join(__dirname, "public")
))
app.use(router.routes()).use(router.allowedMethods) // 404=>405 请求方式不对
app.listen(3000)
