const fs= require("fs")
// fs.readFile("./avatar/lucky8.txt",(err,data)=>{
//     if(!err){
//         console.log(data.toString("utf-8"));
//     }
// })
fs.readFile("./avatar/lucky8.txt","utf-8",(err,data)=>{
    if(!err){
        console.log(data);
    }
})