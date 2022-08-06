"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplication = void 0;
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.evaluate = function (inputA, inputB) {
        return inputA * inputB;
    };
    Multiplication.prototype.toString = function () {
        return "*";
    };
    Object.defineProperty(Multiplication.prototype, "rank", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    return Multiplication;
}());
exports.Multiplication = Multiplication;
