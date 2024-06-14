const express = require("express")
const router = express.Router()
//路由级别
router.get("/", (req, res) => {
    console.log(req.query)
    res.send("login-success")
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.send({ ok: 1 })
})
module.exports = router