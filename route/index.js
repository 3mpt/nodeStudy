const server = require("./server")
const route = require("./route")
const api = require("./api")
// 合并路由
server.use(route)
server.use(api)

server.start()