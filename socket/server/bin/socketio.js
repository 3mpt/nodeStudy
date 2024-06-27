const JWT = require("../util/JWT")
function start(server) {
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
        console.log('111', socket.handshake.query.token);
        const payload = JWT.verify(socket.handshake.query.token)
        if (payload) {
            socket.user = payload
            // 发送欢迎
            socket.emit(WebSocketType.GroupChat, createMessage(socket.user, "欢迎来到聊天室"))
            // 给所有人发送用户列表
        } else {
            socket.emit(WebSocketType.Error, createMessage(null, "token过期"))

        }
    });
}

const WebSocketType = {
    Error: 0, // 错误
    GroupList: 1,
    GroupChat: 2,
    SingleChat: 3
}
function createMessage(user, data) {
    return {
        user,
        data
    }
}
function sendAll() {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.GroupList, null,
                JSON.stringify(Array.from(wss.clients).map(item =>
                    item.user
                ))
            ))
        }
    });

}
module.exports = start