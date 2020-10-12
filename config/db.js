/**
 * 数据库连接方法
*/
//引入mongoose
const mongoose = require('mongoose')
const connectDB = async () => {
    const mongooseDB = await mongoose.connect("mongodb+srv://chuyiran:chu518246315.@cluster0.h3oj5.mongodb.net/CardSalePro?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log(`Mongodb Commented:${mongooseDB.connection.host}`.blue.bold);
}
module.exports =connectDB;
