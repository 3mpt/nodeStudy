const Router = require("koa-router")
const router = new Router()

//  增
router.post('/', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: "添加成功"
    }
})
// 获取
.get('/', (ctx, next) => {
    ctx.body = ['111', '122', '333']
})
// 修改
.put('/:id', (ctx, next) => {
    console.log(ctx.params);
    ctx.body = {
        ok: 1,
        info: "修改成功"
    }
})
.del('/:id', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: "删除成功"
    }
})
module.exports = router