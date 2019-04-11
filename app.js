const express = require('express')
const path = require('path')
const app = express()
const mysql = require('mysql')

//使用art-template模板引擎
app.engine('html', require('express-art-template'))
app.set('view engine', 'html')
app.set('views', './views')

//托管node_modules静态资源目录
app.use('/node_modules', express.static('./node_modules'))

//导入router/index.js 路由模块
const router = require('./router/index.js')
app.use(router)

app.listen(3001, () => {
    console.log('sever running at http://127.0.0.1:3001/pages')
})