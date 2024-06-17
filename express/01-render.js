const express = require("express")
const IndexRouter = require("./route2/indexRouter")
const app = express()
// 应用级别
app.use(function (req, res, next) {
    console.log("验证token")
    next()
})
// 应用级别
app.use("/api", IndexRouter)
app.listen(3000, () => {
    console.log("serve start");
})