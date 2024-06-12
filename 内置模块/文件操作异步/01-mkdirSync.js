const fs = require("fs")

try {
    fs.mkdirSync("./avatar")
    //阻塞后面代码执行
} catch (error) {
    console.log('111',error);
}
