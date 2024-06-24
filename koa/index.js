const Koa = require("koa")
const app = new Koa()
const router = require("./routes")
const static = require("koa-static")
const path = require("path")
const bodyParser = require("koa-bodyparser")
const views = require("koa-views")
const session = require("koa-session-minimal")
// 在注册应用级组件
app.use(bodyParser()) //获取前端传来post参数
app.use(static(
    path.join(__dirname, "public")
))
// 配置模版引擎
app.use(views(path.join(__dirname, "views"), { extension: "ejs" }))
// 配置session
app.use(session({
    key: "keSession",
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
// session判断拦截
app.use(async (ctx, next) => {
    if (ctx.url.includes("login")) {
        await next()
        return
    }
    if (ctx.session.user) {
        ctx.session.date = Date.now()
        await next()
    } else {
        ctx.redirect("/login")
    }
})

app.use(router.routes()).use(router.allowedMethods) // 404=>405 请求方式不对

app.listen(3000)
