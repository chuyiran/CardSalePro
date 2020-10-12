//引入mongoose模块
const mongoose = require('mongoose')
//引入加密解密模块
const bcrypt=require("bcryptjs")
//引入jsonwebtoken模块
const jwt=require("jsonwebtoken")

const UserSchema =new mongoose.Schema({
    name:{
        type:"string",
        required:[true,"请填写姓名!"],
        unique:true
    },
    password:{
        type:"string",
        required:[true,"请填写密码!"],
        minlength:6,
        select:false
    },
    role:{
        type:"string",
        enum:["admin","user","guest"],
        default:"guest",
    },
    createAt:{
        type:Number,
        required:[true,"创建时间不能为空"]
    }
})

//密码加密
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
//验证密码
UserSchema.methods.matchPassword=  function(enterPwd){
    return  bcrypt.compareSync(enterPwd,this.password)
}

//生成token
UserSchema.methods.getSignedToken = function () {
    return jwt.sign({
        id: this._id,
        name: this.name
    },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE //过期时间
        });
}

module.exports =mongoose.model("User",UserSchema)