const crypto = require("crypto")

function encrypt() {
    let dep = crypto.createCipheriv("aes-128-cbc", key,iv)

    return dep.update(data, 'binary', 'hex') + dep.final("hex")
}

function decrypt(key,iv,crypted) {
    crypted = Buffer.from(crypted,"hex").toString("binary")
    let dep = crypto.createDecipheriv("aes-128-cbc", key,iv)
    return dep.update(crypted,"binary",'utf8')+dep.final('utf8')
}
// 16*8=128
let key = 'abcdef1234567890'
let iv = 'abcdef1234567890'
let data = 'kerwin'
let cryted = encrypt(key, iv ,data)

console.log('加密结果',cryted);

let decrypted= decrypt(key,iv,cryted)
console.log('加密结果',decrypted)
