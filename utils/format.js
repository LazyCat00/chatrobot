function formatXml(xml) {
    // 获取 xml.xml 对象的所有键（即 XML 数据的标签名）
    const arr = Object.keys(xml.xml)
    // 使用 reduce 方法将 XML 数据转换为一个 JavaScript 对象
    const result = arr.reduce((obj, key) => {
        // 将 XML 数据的每个键的第一个值赋给结果对象
        obj[key] = xml.xml[key][0]
        return obj
    }, {})
   return result

}
module.exports = { formatXml }