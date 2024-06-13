function render(res, data, type = "") {
     console.log(type); 
    res.writeHead(200, {
        "Content-Type": `${type ? type : "application/json"};charset=utf8`
    })
    res.write(data)
    res.end()
}
const apiRouter = {
    "/api/login": (req, res) => {
        // 获取参数？
        const myURL = new URL(req.url, "http://127.0.0.1")
        console.log(myURL.searchParams);
        if (myURL.searchParams.get("username") === "kerwin" && myURL.searchParams.get("password") === "123456") {
            render(res, `{"ok":1}`)
        } else {
            render(res, `{"ok":0}`)
        }

    },

    "/api/loginpost": (req, res) => {
        var post = ""
        req.on("data", chunk => {
            post += chunk
        })
        req.on("end", () => {
            console.log('post', post)
            post = JSON.parse(post)
            if (post.username === "root" && post.password === '123qwezxc') {
                render(res, `{"ok":1}`)
            } else {
                render(res, `{"ok":0}`)
            }

        })
    }
}
module.exports = apiRouter
module.exports = render