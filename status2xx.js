const returnData = require("./status");

// 请求成功 一般用于 GET POST 请求
const STATUS_OK = (data = {}) => returnData(200, "OK", data)

// 已创建 成功请求并创建了新的资源
const STATUS_Created = (data = {}) => {
    return returnData(201, "Created", data);
}

// 已接受 已经接受请求，但未处理完成
const STATUS_Accepted = (data = {}) => {
    return returnData(202, "Accepted", data);
}

// 非授权信息，请求成功但返回的meta信息不在原始的服务器，而是一个副本
const STATUS_Non_Authoritative_Information = () => {
    return returnData(203, "Non-Authoritative Information");
}

// 无内容 服务器成功处理但未返回内容，在未更新网页的情况下，可确保浏览器继续显示当前文档
const STATUS_No_Content = () => {
    return returnData(204, "No Content");
}

// 重置内容 服务器处理成功，用户终端应重置文档视图，可通过此返回码清除浏览器的表单域
const STATUS_Reset_content = () => {
    return returnData(205, "Reset Content");
}

// 部分内容 服务器成功处理了部分GET请求
const STATUS_Partial_Content = () => {
    return returnData(206, "Partial Content");
}

module.exports = {
    STATUS_OK,
    STATUS_Created,
    STATUS_Accepted,
    STATUS_Non_Authoritative_Information,
    STATUS_No_Content,
    STATUS_Reset_content,
    STATUS_Partial_Content
};