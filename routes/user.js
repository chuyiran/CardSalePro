const express = require('express')
const router = express.Router()
const User = require("../models/User")

//引入路由控制文件
const { register } = require("../controllers/user")

//http://localhost:5000/api/v1/user/register
router.post("/register", register)


module.exports = router