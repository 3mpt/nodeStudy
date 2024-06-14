const express = require("express")
const router = express.Router()
//路由级别
router.get("/",(req,res)=>{
    res.send("home")
})
module.exports = router