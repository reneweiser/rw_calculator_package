"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtraction = void 0;
var Subtraction = /** @class */ (function () {
    function Subtraction() {
    }
    Subtraction.prototype.evaluate = function (inputA, inputB) {
        return inputA - inputB;
    };
    Subtraction.prototype.toString = function () {
        return "-";
    };
    Object.defineProperty(Subtraction.prototype, "rank", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return Subtraction;
}());
exports.Subtraction = Subtraction;
