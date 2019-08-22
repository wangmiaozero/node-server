const express = require('express')
const app = express();
//app.set('views','./views')
//挂载静态资源
app.use(express.static('./views'))
// app.use('/semantic',express.static('./semantic'))
//app.use('/node_modules',express.static("./node_modules"))
const port = 808;
const ip ='127.0.0.1'
app.listen(port,`${ip}`,()=>{
    console.log(`Express server runing at http://${ip}:${port}`)
})