function renderHTML(url){
    switch(url){
        case "/home":
            return `<html><div>home页面</div></html>`
        default:
            return `<html><div>404该页面没找到</div></html>`
    }
    
}
module.exports={
    renderHTML
}