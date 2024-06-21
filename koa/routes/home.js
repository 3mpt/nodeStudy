const Router = require("koa-router")
const router = new Router()
router.get("/", async (ctx, next) => {
    await ctx.render("home",{username:"zyc"})  //自动找views/home.ejs
})
module.exports = router