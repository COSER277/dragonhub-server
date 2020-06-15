/*
后台接口模块
app:外传app实例
*/
module.exports= (app)=>{
    const UserModel=require("../../model/user.js")
    const Auth=require("../../controller/auth.controller")
    const express=require("express")
    const Router=express.Router()
    

    //================================
    const userController=require("../../controller/user.controller")
    Router.get('/user/list',userController.list())  //相当于 http://localhost:3333/api/admin/user/list


    //===============================

    //鉴权-后台接口需要登录后才可访问接口
    //中间价使用顺序 ==>
    // Auth(app):传入app实例 
    app.use("/api/admin",Auth(app),Router)


}