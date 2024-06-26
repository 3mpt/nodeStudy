const express = require("express")
const app = express()
const mysql2 = require("mysql2")
app.get("/", async (req, res) => {
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise()
    var users = await promisePool
    .query("delete from student  where id=?",[2])
    console.log(users);
    res.send({
        ok: 1,
        data:users[0]
    })
})
app.listen(3001)

function getDBConfig() {
    return {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "123qwezxc",
        database: "demo",
        connectionLimit: 1
    }
}