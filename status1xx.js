const returnData = require("./status");

// 继续 客户端应继续请求
const STATUS_Continue = () => {
    return returnData(100, "Continue");
}

// 切换协议， 服务器根据客户端的请求切换协议，只能切换到更高级的协议，例如切换到更高级的http协议
const STATUS_Switching_Protocols = () => {
    return returnData(101, "Switching Protocols");
}

module.exports = {
    STATUS_Continue, STATUS_Switching_Protocols
};