const Router = require("koa-router")
const router = new Router()
router.get("/", async (ctx, next) => {
    await ctx.render("home", { username: "zyc" })  //自动找views/home.ejs
})
router.get("/list", async (ctx, next) => {
    ctx.body = [{
        _id: 1, username: "kerwin", age: 10
    },{
        _id: 2, username: "lll", age: 8
    }]
})
module.exports = router