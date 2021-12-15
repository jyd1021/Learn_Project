module.exports = {
    lintOnSave:false,
    //关闭eslint检验


    //代理跨域
    devServer:{
        proxy:{
            'api':{
                target:'http://39.98.123.211',
                //pathRewrite:{ '^/api': ''}
            }
        }
    }
}