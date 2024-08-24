const crypto = require('crypto')
function checkSignature(req, res, next) {
    // 定义token
    const token = 'lost'
    // 获取微信发给我的信息
    const { signature, echostr, timestamp, nonce } = req.query
    // 将token、timestamp、nonce三个参数进行字典序排序
    const temStr = [token, timestamp, nonce].sort().join('')
    // 进行sha1加密
    const mySignature = crypto.createHash('sha1').update(temStr).digest('hex')
    // 开发者获得加密后的字符串可与(发送过来的)signature对比,确保来自于微信
    if (mySignature === signature) {
        res.send(echostr)
    } else {
        console.log(mySignature)
       console.log(signature)
        res.send('erro.')
    }
}
module.exports = checkSignature