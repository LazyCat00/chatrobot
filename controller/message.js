const { formatXml } = require('../utils/format')

function messageController(req, res, next) {
    // 接收公众号收到的消息
    const message = formatXml(req.body)

    const { tousername, fromusername } = message
    // 生成辅助信息
    const createTime = new Date().getTime()
    const content = '江南哥的小迷弟'

    // 回复信息
    // res.set('Content-Type','text/xml')
    res.render('reply', {
        tousername,
        fromusername,
        createTime,
        content
    })
}

module.exports = messageController