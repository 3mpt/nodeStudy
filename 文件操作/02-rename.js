const fs = require("fs")

fs.rename("./avatar","./avatar2",(err)=>{
    // console.log(err);
    if(err && err.code==="ENOENT"){
        console.log("目录不存在");
    }
})