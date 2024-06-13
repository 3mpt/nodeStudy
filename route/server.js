const http = require("http")
const Route = {}



function use(obj){
    Object.assign(Route,obj)
}
function start() {
    http.createServer((req, res) => {
        const myURL = new URL(req.url, "http://127.0.0.1")
        // console.log(myURL.pathname);
        try {
            Route[myURL.pathname](req, res)
        } catch (error) {
            Route["/404"](req, res)
        }

        res.end()
    }).listen(3000, () => {
        console.log("serve start");
    })
}
exports.start = start
exports.use = use