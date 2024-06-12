const fs = require("fs")

const rs = fs.createReadStream("./1.txt","utf-8")

rs.on("data",(chunck)=>{
    console.log(chunck);
})

rs.on("end",()=>{
    console.log("end");
})

rs.on("error",(err)=>{
    console.log(err);
})