# 认识nodejs
```
pnpm init

# 安装 Express
pnpm add express

```

```js
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
    
})
```
![请添加图片描述](https://i-blog.csdnimg.cn/direct/5584348ff2384bf88da5571c38a2c843.png)


# 初始化项目
```bash
pnpm dlx express-generator --ejs --view=ejs chatrobot
cd chatrobot
pnpm install
pnpm start
```
--ejs 和 --view=ejs
这两个选项用于指定视图模板引擎为 EJS (Embedded JavaScript)。
--ejs 和 --view=ejs 是等效的，表明你希望使用 EJS 作为视图引擎。视图引擎用于渲染动态内容到 HTML 页面。

整体含义：
这个命令会使用 pnpm dlx `临时下载并执行`（不需要全局安装的情况下，直接下载并运行一个 npm 包） express-generator，然后生成一个新的 Express 应用，项目目录名为 chatrobot，并使用 EJS 作为视图模板引擎。

```bash
# 安装
pnpm add nodemon --save-dev
```
确保 nodemon 被安装为项目的开发依赖。你可以通过 pnpm add 命令来安装它：
```json
 "scripts": {
    "start": "nodemon ./bin/www"
  }
```
`nodemon` 是一个用于自动重启 Node.js 应用程序的工具。它在开发过程中非常有用，可以自动检测代码文件的变化，并在检测到变化时重新启动应用程序，从而简化开发和测试过程。
![请添加图片描述](https://i-blog.csdnimg.cn/direct/7bfd362f0b3243bcadcfc718d28e67ea.png)




# 新建路由
![请添加图片描述](https://i-blog.csdnimg.cn/direct/99d60be42e044d02b11b563e9674d573.png)
## 编写chatrobot\routes\chatrobot.js
```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.query);
    res.send('ok')
    
});

module.exports = router;
```

# 处理消息
## 安装xmlParser
```bash
pnpm add express-xml-bodyparser
```