const Router = require("koa-router")
const router = new Router()
router.get("/", async (ctx, next) => {
    
    
    // 获取cookies
    console.log(ctx.cookies.get("location"));
    // 设置cookies
    ctx.cookies.set("location", 'dalian')
    await ctx.render("home", { username: "zyc" })  //自动找views/home.ejs
})
module.exports = router