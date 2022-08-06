"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addition = void 0;
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.evaluate = function (inputA, inputB) {
        return inputA + inputB;
    };
    Addition.prototype.toString = function () {
        return "+";
    };
    Object.defineProperty(Addition.prototype, "rank", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return Addition;
}());
exports.Addition = Addition;
