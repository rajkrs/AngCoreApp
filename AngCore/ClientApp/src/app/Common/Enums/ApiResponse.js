var Status;
(function (Status) {
    Status[Status["failoure"] = 0] = "failoure";
    Status[Status["success"] = 1] = "success";
})(Status || (Status = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Info"] = 0] = "Info";
    MessageType[MessageType["Warn"] = 1] = "Warn";
    MessageType[MessageType["Error"] = 2] = "Error";
})(MessageType || (MessageType = {}));
var MessageCode;
(function (MessageCode) {
    //Error Code
    MessageCode[MessageCode["Other_Error"] = 1] = "Other_Error";
    MessageCode[MessageCode["Valiadtion_Error"] = 2] = "Valiadtion_Error";
    MessageCode[MessageCode["Network_Error"] = 3] = "Network_Error";
    MessageCode[MessageCode["Authentication_Error"] = 4] = "Authentication_Error";
    MessageCode[MessageCode["SqlServer_Error"] = 5] = "SqlServer_Error";
    MessageCode[MessageCode["FileNotFound_Error"] = 6] = "FileNotFound_Error";
    //Info Code
    MessageCode[MessageCode["Other_Info"] = 1] = "Other_Info";
    MessageCode[MessageCode["Valiadtion_Info"] = 2] = "Valiadtion_Info";
    MessageCode[MessageCode["Network_Info"] = 3] = "Network_Info";
    MessageCode[MessageCode["Authentication_Info"] = 4] = "Authentication_Info";
    MessageCode[MessageCode["SqlServer_Info"] = 5] = "SqlServer_Info";
    MessageCode[MessageCode["FileNotFound_Info"] = 6] = "FileNotFound_Info";
    //Info Code
    MessageCode[MessageCode["Other_Warning"] = 1] = "Other_Warning";
    MessageCode[MessageCode["Valiadtion_Warning"] = 2] = "Valiadtion_Warning";
    MessageCode[MessageCode["Network_Warning"] = 3] = "Network_Warning";
    MessageCode[MessageCode["Authentication_Warning"] = 4] = "Authentication_Warning";
    MessageCode[MessageCode["SqlServer_Warning"] = 5] = "SqlServer_Warning";
    MessageCode[MessageCode["FileNotFound_Warning"] = 6] = "FileNotFound_Warning";
})(MessageCode || (MessageCode = {}));
//# sourceMappingURL=ApiResponse.js.map