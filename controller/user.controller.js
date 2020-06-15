
class User {
    constructor() {
    }
    //获取某一
    async  Item(req, res, next) {
        try {
           
    } catch (error) {
        res.send({
            code: -1,
            msg: error.message
        })
    }
    }
    //列表
    async  list(req, res, next) {
        try {
           
    } catch (error) {
        res.send({
            code: -1,
            msg: error.message
        })
    }
    }
    //修改 
    async update(req, res, next) {
        try {
           
        } catch (error) {
            res.send({
                code: -1,
                msg: error.message
            })
        }

    }
     //删除
     async  delete(req, res, next) {
        try {
           
        } catch (error) {
            res.send({
                code: -1,
                msg: error.message
            })
        }
    }

}

module.exports = new User();