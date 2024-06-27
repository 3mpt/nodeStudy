
// websocket响应
const WebSocket = require('ws');
const JWT = require('../util/JWT');
const { WebSocketServer } = WebSocket

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    console.log(req.url);
    const myURL = new URL(req.url, "http://127.0.0.1:3000")
    console.log(myURL.searchParams.get("token"));
    // 校验token
    const payload = JWT.verify(myURL.searchParams.get("token"))
    if (payload) {
        ws.send(createMessage(WebSocketType.GroupChat, null, "欢迎来到聊天室"));
        ws.user = payload
        // 群发
        sendAll()
    } else {
        ws.send(createMessage(WebSocketType.Error, null, "token过期"));
    }
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        // console.log('received: %s', data);
        // wss.clients.forEach(function each(client) {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //         client.send(data, { binary: false });
        //     }
        // });
        const msgObj = JSON.parse(data)
        switch (msgObj.type) {
            case WebSocketType.GroupList:
                console.log('@@@', Array.from(wss.clients).map(item =>
                    item.user
                ));

                // console.log("@@@",wss.clients);
                break;
            case WebSocketType.GroupChat:
                console.log(msgObj.data);
                // 转发给其他人
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(
                            createMessage(WebSocketType.GroupChat, ws.user, msgObj.data),
                            { binary: false });
                    }
                });
                break;
            case WebSocketType.SingleChat:
                wss.clients.forEach(function each(client) {
                    if (client.user.username===msgObj.to&&client.readyState === WebSocket.OPEN) {
                        client.send(
                            createMessage(WebSocketType.SingleChat, ws.user, msgObj.data),
                            { binary: false });
                    }
                });
                break;


        }
    });
    ws.on("close", () => {
        console.log(ws.user);
    })

});
const WebSocketType = {
    Error: 0, // 错误
    GroupList: 1,
    GroupChat: 2,
    SingleChat: 3
}
function createMessage(type, user, data) {
    return JSON.stringify({
        type,
        user,
        data
    })
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