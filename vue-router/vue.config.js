const path=require('path');
module.exports={
    chainWebpack:config=>{
        config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'));
    }
}