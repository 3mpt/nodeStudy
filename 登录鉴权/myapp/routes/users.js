var express = require('express');
const UserModel = require('../model/UserModel');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.cookie("gender", "male")
  res.send({ name: "kerwin" });
});
// 响应前端post请求，增加用户
router.post("/user", UserController.addUser)
// 动态路由，获取id-更新用户
router.put("/user/:id", UserController.updateUser)
router.delete("/user/:id", UserController.deleteUser)

router.get("/user",UserController.getUser)


module.exports = router;
