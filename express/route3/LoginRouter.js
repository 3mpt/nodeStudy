const express = require("express")
const router = express.Router()
//路由级别
router.get("/", (req, res) => {
    // console.log(req.query)
    // res.send("login-success")   // send片段 &json 都可以
    // res.json([1,2,2]) //发送json
    // 渲染模版后返回给前端
    res.render("login", { title: "11111", error: "" }) //  找views文件夹下的login.ejs
})

// router.post("/", (req, res) => {
//     console.log(req.body)
//     res.send({ ok: 1 })
// })
router.post("/", (req, res) => {
    if (req.body.username === "kerwin" && req.body.password === '123qwezxc') {
        console.log('登陆成功');
        // 重定向到home
        res.redirect("/home")
    } else {
        console.log('登陆失败');
        res.render("login", { title: "11111", error: "用户名密码不匹配" })

    }
})
module.exports = router