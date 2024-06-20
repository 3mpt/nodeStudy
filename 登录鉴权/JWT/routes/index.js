var express = require('express');
var router = express.Router();
var JWT = require("../util/JWT.js")
/* GET home page. */
router.get('/', function (req, res, next) {
  // 判断req.session.user
  res.render('index', { title: 'Express' });
});

// const token = JWT.generate({name:"kerwin"},"10s")
// console.log('@@@',token);
// console.log(JWT.verify(token));
// setTimeout(()=>{
//   console.log("@@@9s",JWT.verify(token));
// },9000)
// setTimeout(()=>{
//   console.log("@@@11s",JWT.verify(token));
// },11000)
module.exports = router;
