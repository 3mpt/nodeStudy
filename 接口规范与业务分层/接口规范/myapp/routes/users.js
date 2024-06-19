var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.cookie("gender", "male")
  res.send({ name: "kerwin" });
});
// 响应前端post请求，增加用户
router.post("/user", (req, res) => {
  console.log(req.body);
  // 插入数据库
  // 1.创建一个模型(user,限制filed类型)， --对应数据库的集合(users)
  // user.create user.find user.delete user.update
  const { username, password, age } = req.body
  UserModel.create({
    username, password, age
  }).then(data => {
    console.log(data)
    res.send({
      ok: 1
    })
  })
})
// 动态路由，动态id
router.put("/user/:id", (req, res) => {
  console.log(req.body, req.params.id);
  const { username, password, age } = req.body
  UserModel.updateOne({ _id: req.params.id }, {
    username, password, age
  }).then(data => {
    res.send({
      ok: 1
    })
  })
})
router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({ _id: req.params.id }).then(data => {
    res.send({
      ok: 1
    })
  })
})

router.get("/user", (req, res) => {
  const {page,limit} =req.query
  UserModel.find({}, ['username', 'age'])
  .sort()
  .skip((page-1)*limit)
  .limit(req.query.limit)
  .then(data => {
    res.send(data)
  })
})


module.exports = router;
