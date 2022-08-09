"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tslog_1 = require("tslog");
require("./logger.interface");
class LoggerService {
    constructor() {
        this.logger = new tslog_1.Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false, //Определяет, должны ли отображаться имя класса и метода или функции.
        });
    }
    log(...args) {
        this.logger.info(...args);
    }
    error(...args) {
        this.logger.error(...args);
    }
    warn(...args) {
        this.logger.warn(...args);
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map