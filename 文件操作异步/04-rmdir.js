const fs = require("fs").promises

fs.readdir("./avatar").then(async (data) => {
    // let arr = []
    // data.forEach(item => {
    //     fs.unlink(`./avatar/${item}`)
    // })

    await Promise.all(data.map(item=>fs.unlink(`./avatar/${item}`)))
    await fs.rmdir("./avatar")
})