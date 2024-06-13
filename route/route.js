const fs = require("fs")
const path = require("path")
const mime = require("mime");
function render(res, data, type = "") {
    console.log(type);
    res.writeHead(200, {
        "Content-Type": `${type ? type : "application/json"};charset=utf8`
    })
    res.write(fs.readFileSync(data))
    res.end()
}
const route = {
    "/login": (req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/login.html"), "utf8")
    },
    "/": (req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/home.html"), "utf8")
    },
    "/home": (req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/home.html"), "utf8")
    },
    "/404": (req, res) => {
        if (readStaticFile(req, res)) {
            return
        }
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/404.html"), "utf8")
    },
    "/favicon.ico": (req, res) => {
        render(res, "./static/favicon.ico", "image/x-icon")
    },
}
// 静态资源管理
function readStaticFile(req, res) {
    //获取路径
    const myURL = new URL(req.url, "http://127.0.0.1:3000")
    const pathname = path.join(__dirname, "/static", myURL.pathname);
    // console.log(pathname);
    if(myURL.pathname==='/') return false
    if (fs.existsSync(pathname)) {
        // 处理显示返回
        console.log(5555);
        render(res, pathname, mime.getType(myURL.pathname.split(".")[1]))
        // render(res,pathname,mime.getType(myURL.pathname.split(".")[1]))
        return true
    } else {
        return false
    }
    // console.log(__dirname, myURL.pathname);
}
module.exports = route