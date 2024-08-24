var express = require('express');
var router = express.Router();
const checkSignature = require('../controller/checkSignature')
const messageController = require('../controller/message')

// 验证消息来源于微信
router.get('/', checkSignature);

// 消息处理
router.post('/', messageController);

module.exports = router;