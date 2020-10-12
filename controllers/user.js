//引入异常错误处理
const ErrorResponse = require("../utils/errorResponse")
//引入async处理
const aysncHandler = require('../middleware/async')
const User = require("../models/User")
exports.register = aysncHandler(async (req, res, next) => {
    console.log(req.body);
    const { name, role, password, createAt } = req.body;
    const user = await User.create({ name, password, role, createAt });
    //生成token
    const token = user.getSignedToken();
    res.status(200).json({ success: true, token })
})