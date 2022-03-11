const returnData = require("./status");

// 服务器内部错误，无法完成请求
const STATUS_Internal_Server_Error = returnData(500, "Internal Server Error")

// 服务器不支持请求的功能，无法完成请求
const STATUS_Not_Implemented = returnData(501, "Not Implemented")

// 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
const STATUS_Bad_Gateway = returnData(502, "Bad Gateway")

// 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
const STATUS_Service_Unavailable = returnData(503, "Service Unavailable")

// 充当网关或代理的服务器，未及时从远端服务器获取请求
const STATUS_Gateway_Timeout = returnData(504, "Gateway Time-out")

// 服务器不支持请求的HTTP协议的版本，无法完成处理
const STATUS_HTTP_Version_Not_Supported = returnData(505, "HTTP Version Not supported")

module.exports = {
    STATUS_Internal_Server_Error,
    STATUS_Not_Implemented,
    STATUS_Bad_Gateway,
    STATUS_Service_Unavailable,
    STATUS_Gateway_Timeout,
    STATUS_HTTP_Version_Not_Supported
};