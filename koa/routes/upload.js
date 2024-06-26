const Router = require("koa-router")
const router = new Router()
router.get("/", async (ctx, next) => {
    

    await ctx.render("upload", { title: "zyc" })  //自动找views/home.ejs
})
module.exports = router