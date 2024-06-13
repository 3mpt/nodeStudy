const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send({
        name: "大力",
        age: 100
    })
    // res.send(`
    // <html>
    //     <h1>你好<h1>
    // </html>
    // `)
})
// 匹配acd和abcd
// app.get("/ab?cd", (req, res) => {
//     res.send({
//         name: "大力",
//         age: 100
//     })
// })
// 匹配/ab/**** 
/* 
    /ab+cd  匹配多次重复b
    /ab*cd  b c中间任意
    /ab(cd)?e  cd同生共死

*/
const func1 = (req, res, next) => {
    // 验证用户token是否过期， cookie过期
    console.log("验证token");
    const isValid = true
    if (isValid) {
        next()
    } else {
        res.send("error")
    }

}
const func2 = (req, res) => {
    // 查询数据库
    // 返回内容
    res.send({
        name: "大力",
        age: 100,
        list: [5, 6, 7, 7]
    })
}
app.get("/ab/:id", (req, res) => {
    res.send({
        name: "大力",
        age: 100
    })
})
app.get("/home", [func1, func2])


app.listen(3000, () => {
    console.log("serve start");
})