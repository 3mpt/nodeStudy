const Router = require("koa-router");
const JWT = require("../util/JWT");
const router = new Router()

//  增
router.post('/', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        ok: 1,
        info: "添加成功"
    }
})
    // 获取
    .get('/', (ctx, next) => {
        console.log(ctx.query, ctx.querystring)
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
router.post('/login', (ctx, next) => {
    console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    if (username === 'root' && password === "123qwezxc") {
        // // 校验成功了设置sessionId
        // ctx.session.user ={
        //     username:"kerwin"
        // }
        // 设置header
        // 设置token
        const token = JWT.generate({
            _id: '123',
            username: 'kerwin'
        }, '1d')
        // token 返回在header中
        ctx.set("Authorization", token)
        ctx.body = {
            ok: 1
        }

    } else {
        ctx.body = {
            ok: 0
        }
    }



})
module.exports = router