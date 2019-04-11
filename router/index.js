
//路由模块   只需要分配url地址到处理函数之间的对应关系即可
const express = require('express')
const router = express.Router()

const ctrl = require('../controller/index.js')


//项目首页 --前端问答库
router.get('/pages', ctrl.showIndexPage)

module.exports = router