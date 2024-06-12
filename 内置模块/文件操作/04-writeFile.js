const fs = require("fs")
//覆盖
fs.writeFile("./avatar/lucky8.txt","hello",err=>{
    console.log(err);
})