const returnData = require("./status");

// 客户端请求的语法错误，服务器无法理解
const STATUS_BAD_Request = returnData(400, "Bad Request")

// 请求要求用户的身份认证
const STATUS_Unauthorized = returnData(401, "Unauthorized")

// 保留，将来使用
// const STATUS_Payment_Required = returnData(402, "Payment Required")

// 服务器理解请求客户端的请求，但是拒绝执行此请求
const STATUS_Forbidden = returnData(403, "Forbidden")

// 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
const STATUS_NOT_FOUND = returnData(404, "Not Found")

// 客户端请求中的方法被禁止
const STATUS_Method_Not_Allowed = returnData(405, "Method Not Allowed")

// 服务器无法根据客户端请求的内容特性完成请求
const STATUS_Not_Acceptable = returnData(406, "Not Acceptable")

// 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
const STATUS_Proxy_Authentication_Required = returnData(407, "Proxy Authentication Required")

// 服务器等待客户端发送的请求时间过长，超时
const STATUS_Request_Timeout = returnData(408, "Request Time-out")

// 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突
const STATUS_Conflict = returnData(409, "Conflict")

// 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
const STATUS_Gone = returnData(410, "Gone")

//服务器无法处理客户端发送的不带Content-Length的请求信息
const STATUS_Length_Required = returnData(411, "Length Required");

// 客户端请求信息的先决条件错误
const STATUS_Precondition_Failed = returnData(412, "Precondition Failed");

// 由于请求的实体过大，服务器无法处理，因此拒绝请求。
// 为防止客户端的连续请求，服务器可能会关闭连接。
// 如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
const STATUS_Request_Entity_Too_Large = returnData(413, "Request Entity Too Large");

// 请求的URI过长（URI通常为网址），服务器无法处理
const STATUS_Request_URI_Too_Large = returnData(414, "Request-URI Too Large");

// 服务器无法处理请求附带的媒体格式
const STAUTS_Unsupported_Media_Type = returnData(415, "	Unsupported Media Type");

// 客户端请求的范围无效
const STATUS_Requested_Range_Not_Satisfiable = returnData(416, "Requested range not satisfiable");

// 服务器无法满足Expect的请求头信息
const STATUS_Expectation_Failed = returnData(417, "Expectation Failed");
module.exports = {
    STATUS_BAD_Request,
    STATUS_Unauthorized,
    // STATUS_Payment_Required,
    STATUS_Forbidden,
    STATUS_NOT_FOUND,
    STATUS_Method_Not_Allowed,
    STATUS_Not_Acceptable,
    STATUS_Proxy_Authentication_Required,
    STATUS_Request_Timeout,
    STATUS_Conflict,
    STATUS_Gone,
    STATUS_Length_Required,
    STATUS_Precondition_Failed,
    STATUS_Request_Entity_Too_Large,
    STATUS_Request_URI_Too_Large,
    STAUTS_Unsupported_Media_Type,
    STATUS_Requested_Range_Not_Satisfiable,
    STATUS_Expectation_Failed
};