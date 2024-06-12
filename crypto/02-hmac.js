const crypto = require("crypto")

// const hash = crypto.createHash("md5")
const hash = crypto.createHmac("md5","ssss11")
hash.update("hello")

console.log(hash.digest("base64"));