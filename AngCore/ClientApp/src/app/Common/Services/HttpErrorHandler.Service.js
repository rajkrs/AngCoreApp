"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        var _this = this;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            console.log(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return rxjs_1.of(result);
        };
    };
    return HttpErrorHandler;
}());
exports.HttpErrorHandler = HttpErrorHandler;
//# sourceMappingURL=http-error-handler.service.js.map