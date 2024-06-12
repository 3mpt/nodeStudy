const fs = require("fs").promises

// fs.mkdir("./avatar").then(data=>{
//     console.log(data);
// })

fs.readFile("./avatar/a.txt", "utf-8").then(data => {
    console.log(data);
})