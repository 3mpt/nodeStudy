var express = require('express');
const UserModel = require('../model/UserModel');
const UserController = require('../controllers/UserController');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.cookie("gender", "male")
  res.send({ name: "kerwin" });
});
// 响应前端post请求，增加用户
/**
 * 
 * @api {post} /api/user user
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * @apiParam  {File} avatar 头像
 * 
 * @apiSuccess (200) {number} ok 标示成功字段
 * 
 * @apiParamExample  {multipart/form} Request-Example:
 * {
 *     username : "kkk"
 *     password : "123"
 *     age : 100
 *     avatar : File
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
router.post("/user", upload.single("avatar"),UserController.addUser)
// 动态路由，获取id-更新用户
router.put("/user/:id", UserController.updateUser)
router.delete("/user/:id", UserController.deleteUser)

router.get("/user", UserController.getUser)
//登录校验
router.post("/login", UserController.login)
router.get("/logout", UserController.logout)

module.exports = router;
