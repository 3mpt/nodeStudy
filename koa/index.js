const Koa = require("koa")
const app = new Koa()
const router = require("./routes")
const static = require("koa-static")
const path = require("path")
const bodyParser = require("koa-bodyparser")
const views = require("koa-views")
const session = require("koa-session-minimal")
const JWT = require("./util/JWT")
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
// app.use(async (ctx, next) => {
//     if (ctx.url.includes("login")) {
//         await next()
//         return
//     }
//     if (ctx.session.user) {
//         ctx.session.date = Date.now()
//         await next()
//     } else {
//         ctx.redirect("/login")
//     }
// })
// token拦截
app.use(async (ctx, next) => {
    if (ctx.url.includes("login")) {
        await next()
        return
    }
    const token = ctx.headers['authorization']?.split(" ")[1]
    if (token) {
        const payload = JWT.verify(token)
        if (payload) {
            // 重新计算过期时间
            const newToken = JWT.generate({
                _id: payload._id,
                username: payload.username
            }, '10s')
            ctx.set("Authorization", newToken)
            await next()
        } else {
            // 401
            ctx.status = 401
            ctx.body = { errCode: -1, errInfo: "token过期" }
        }

    } else {
        await next()
    }


})
app.use(router.routes()).use(router.allowedMethods) // 404=>405 请求方式不对

app.listen(3000)
