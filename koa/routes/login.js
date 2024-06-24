const Router = require("koa-router")
const router = new Router()
router.get("/", async (ctx, next) => {
    
    ctx.cookies.set("location", 'dalian')
    await ctx.render("login", { title: "zyc" })  //自动找views/home.ejs
})
module.exports = router