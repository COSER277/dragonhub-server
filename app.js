const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const APPCONFIG=require("./config/app.config.json")
const RES=require("./utils/responseBody")//响应封装

//===================app设置区========================//
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }));

//数据库挂载
require("./database/mognodb")(app)
//路由api
require("./routes/back/index")(app)
//密钥
app.set("SECRET","dragonhub1234567890zxcvbnmasdfghjklqwertyuiop")
//==================app错误处理=======================//
app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        msg: err.message
    })
})


//====================开启服务========================//
app.use('/',(req,res,next)=>{
    res.send(RES.success(200,"后端服务正在服务中...",null))
})
app.listen(APPCONFIG.development.PORT,()=>{
    console.log(`http://${APPCONFIG.development.HOST}:${APPCONFIG.development.PORT}/`)
})