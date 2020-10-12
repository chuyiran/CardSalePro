/**
 * 数据库连接方法
*/
//引入mongoose
const mongoose = require('mongoose')
const connectDB = async () => {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log(`Mongodb Commented:${mongooseDB.connection.host}`.blue.bold);
}
module.exports =connectDB;
