const express = require("express")
const router = express.Router()
//路由级别
router.get("/", (req, res) => {
    // res.send("home")
    var list = ["aaa", 'vvv', 'asaa']
    res.render("home",{list:list})
})

router.get("/list", (req, res) => {
    res.send(["111", "2222", '3333'])
})
module.exports = router