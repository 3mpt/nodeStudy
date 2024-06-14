const express = require("express")
const HomeRouter = require("./route3/HomeRouter")
const LoginRouter = require("./route3/LoginRouter")
const app = express()
// 应用级别
app.use(function (req, res, next) {
    console.log("验证token")
    next()
})
// 应用级别
app.use("/home", HomeRouter)
app.use("/login", LoginRouter)
// 错误中间件
app.use((req,res)=>{
    res.status(404).send('丢了')
})
app.listen(3000, () => {
    console.log("serve start");
})