

module.exports= (app)=>{
    const UserModel=require("../../model/user.js")
    const Auth=require("../../controller/auth.controller")
    const express=require("express")
    const Router=express.Router()
    

    //================================
    const userController=require("../../controller/user.controller")
    Router.get('/list',userController.list())


    //===============================


    app.use("/api/admin",Auth(app),Router)


}