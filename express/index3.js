const express = require("express")
const HomeRouter = require("./route3/HomeRouter")
const LoginRouter = require("./route3/LoginRouter")
const app = express()

app.set("views", "./views")
app.set("view engine", "html")
app.engine("html",require("ejs").renderFile) // 支持直接渲染html文件
// 配置静态资源
app.use(express.static("public"))

// 配置解析post参数中间件-不用下载第三方
app.use(express.urlencoded({ extended: false })) // post参数获取 username=kerwin&password=1234
app.use(express.json())
// 应用级别
app.use(function (req, res, next) {
    console.log("验证token")
    next()
})
// 应用级别
app.use("/home", HomeRouter)
app.use("/login", LoginRouter)
// 错误中间件
app.use((req, res) => {
    res.status(404).send('丢了')
})
app.listen(3000, () => {
    console.log("serve start");
})