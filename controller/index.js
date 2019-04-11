//业务处理模块
const conn = require('../db/index.js')

const showIndexPage = (req, res) => {
    //定义每页多少条数据
    const pageSize = 20
    //当前页码
    const nowPage = Number(req.query.page)||1
    const sql = `SELECT * FROM pages LIMIT ${(nowPage -1 ) * pageSize}, ${pageSize};
    SELECT COUNT(*) as count from pages`

    conn.query(sql, (err, result) => {
        if (err) {
            return res.render('index.html', {
                err: err.code
            })
        }
        //总页数
        const totalPage = Math.ceil(result[1][0].count / pageSize)
        //console.log(totalPage)
        res.render('index.html', {
            result: result[0],
            totalPage: totalPage,
            nowPage: nowPage
            // imgSrc: result.img,
            // modelname: result.modelname,
            // title: result.title,
            // visitNume: result.visitNume,
            // star: result.star,
            // timedate: result.timedate
        })
    })

}
module.exports = {
    showIndexPage

}