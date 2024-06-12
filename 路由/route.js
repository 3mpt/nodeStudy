const fs = require("fs")
const route = {
    "/login": (res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/login.html"), "utf8")
    },
    "/home": (res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/home.html"), "utf8")
    },
    "/404": (res) => {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        })
        res.write(fs.readFileSync("./static/404.html"), "utf8")
    },
    "/favicon": (res) => {
        render(res,"./static/favicon.ico","image/x-icon")
    },
}
module.exports = route