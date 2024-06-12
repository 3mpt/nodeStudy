const fs = require("fs")

// 创建目录
fs.mkdir("./avatar",(err)=>{
    // console.log(err);
    if(err && err.code==="EExist"){
        console.log("目录已经存在");
    }
})