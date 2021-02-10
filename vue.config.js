module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            "/api":{
                target:"https://dss0.bdstatic.com/",
                changeOrigin:true,
                pathRewrite:{
                    "/api":''
                }
            }
        }
    }
}