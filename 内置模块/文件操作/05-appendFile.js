const fs = require("fs")
//覆盖
fs.appendFile("./avatar/lucky8.txt","\n6666",err=>{
    console.log(err);
})