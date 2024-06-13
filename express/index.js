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
app.listen(3000, () => {
    console.log("serve start");
})