function renderStatus(url){
    var arr = ["/list", "/home"]
    return arr.includes(url)?400:404
}

exports.renderStatus = renderStatus