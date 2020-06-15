const ResUtil={
     success(code,msg,data){
        var body={
            code:code||0,
            msg:msg,
            data:data||null
        }
        return body
    },
     fail(code,msg){
        var body={
            code:code||1,
            msg:msg,
        }
        return body
    },
      warn(msg){
        var body={
            code:502,
            msg:msg,
        }
        return body
    }
    
}

module.exports=ResUtil