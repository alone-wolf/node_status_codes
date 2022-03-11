const returnData = require("./status");

// 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
const STATUS_Multiple_Choices = returnData(300, "Multiple Choices")
// 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
const STATUS_Moved_Permanently = returnData(301, "Moved Permanently");
// 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
const STATUS_Found = returnData(302, "Found")
// 查看其它地址。与301类似。使用GET和POST请求查看
const STATUS_See_Other = returnData(303, "See Other")
// 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
const STATUS_Not_Modified = returnData(304, "Not Modified")
// 使用代理 所有请求的资源必须通过代理访问
const STATUS_Use_Proxy = returnData(305, "Use Proxy")
// 已经被废弃的Http状态吗
const STATUS_Unused = returnData(306, "Unused")

// 临时重定向 与302类似 使用 get 请求重定向
const STATUS_Temporary_Redirect = returnData(307, "Temporary Redirec")

module.exports = {
    STATUS_Multiple_Choices,
    STATUS_Moved_Permanently,
    STATUS_Found,
    STATUS_See_Other,
    STATUS_Not_Modified,
    STATUS_Use_Proxy,
    STATUS_Unused,
    STATUS_Temporary_Redirect
};