const Koa = require("koa")
const Router = require("koa-router")
const app = new Koa()
const router = new Router()
//  增
router.post('/list', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: "添加成功"
    }
})
// 获取
router.get('/list', (ctx, next) => {
    ctx.body = ['111', '122', '333']
})
// 修改
router.put('/list/:id', (ctx, next) => {
    console.log(ctx.params);
    ctx.body = {
        ok: 1,
        info: "修改成功"
    }
})
router.del('/list/:id', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: "删除成功"
    }
})
app.use(router.routes()).use(router.allowedMethods) // 404=>405 请求方式不对

app.listen(3000)
