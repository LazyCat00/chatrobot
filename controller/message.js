const { formatXml } = require('../utils/format')
const wake_on_lan = require('wake_on_lan');
//5700xt的mac地址
const macAddress = '00:E0:1D:23:90:77';

function messageController(req, res, next) {
    // 接收公众号收到的消息
    const message = formatXml(req.body)

    const { tousername, fromusername, content: receivedMessage } = message
    // 生成辅助信息
    const createTime = new Date().getTime()
    const content = '江南哥的小迷弟'

    console.log('收到消息：' + receivedMessage)

    if (receivedMessage === '开机') {
        console.log('执行开机命令')

        // 使用wake_on_lan库发送WOL信号 
        wake_on_lan.wake(macAddress, function (error) {
            if (error) {
                res.render('reply', {
                    tousername,
                    fromusername,
                    createTime,
                    content: '执行开机命令' + error
                })
            } else {

                res.render('reply', {
                    tousername,
                    fromusername,
                    createTime,
                    content: 'WOL命令已发送，设备应该正在被唤醒...'
                })
            }
        });




    } else {
        res.render('reply', {
            tousername,
            fromusername,
            createTime,
            content
        })
    }

    // 回复信息


}

module.exports = messageController