let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let jwt=require('jsonwebtoken');

let miyao='dabai';

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method.toLowerCase()==='options'){
        return res.end();
    }
    next();
})
app.use(bodyParser.json())
app.get('/user',(req,res)=>{
    res.json({name:'zf'});
})
app.post('/login',(req,res)=>{
    let {username}=req.body;
    if(username==='admin'){
        res.json({
            code:0,
            username:'admin',
            // 签名内容，签名秘钥，过期时间
            //把用户名通过服务端存到客户端（以前都是放到服务器上）
            token:jwt.sign({username:'admin'},miyao,{
                expiresIn:20//过期时间秒
            })
        })
    }else{
        res.json({
            code:1,
            data:'用户名不存在'
        })
    }
})
app.get('/validate',(req,res)=>{
    let token=req.headers.authorization;
    console.log(token)
    jwt.verify(token,miyao,(err,decode)=>{
        if(err){
            return res.json({
                code:1,
                data:'token失效了'
            })
        }else{
            //需要延长token时效
            res.json({
                username:decode.username,
                code:0,
                 token:jwt.sign({username:'admin'},miyao,{
                    expiresIn:20//过期时间秒
                })
            })
        }
    })
})
app.listen(3000);