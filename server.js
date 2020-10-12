//引入express模块
const express = require('express')
//引入环境变量模块
const dotenv = require('dotenv')
//引入异常错误处理模块
const errorHandler=require('./middleware/error')
//引入控制台文本颜色模块和apiurl打印(开发使用)
const morgan=require("morgan")
const colors = require('colors')
//引入数据库配置方法并连接到数据库模块
const connectDB = require("./config/db")
connectDB();
//环境变量配置
dotenv.config({
    path: "./config/config.env"
})
//引入路由 
const user=require("./routes/user")
//实例化
const app = new express();
//配置body解析
app.use(express.json())

//使用url打印
app.use(morgan("dev"))
//挂载路由
//挂载user路由
app.use("/api/v1/user",user)
//使用错误处理中间件(一定要在路由挂载之后使用)
app.use(errorHandler)
//定义端口
const prot = process.env.PROT || 5001;
//端口监听
app.listen(prot, () => {
    console.log(`Server is running  in ${process.env.NODE_ENV} node on prot ${prot}`);
})