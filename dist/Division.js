"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
var Division = /** @class */ (function () {
    function Division() {
    }
    Division.prototype.evaluate = function (inputA, inputB) {
        return inputA / inputB;
    };
    Division.prototype.toString = function () {
        return "/";
    };
    Object.defineProperty(Division.prototype, "rank", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    return Division;
}());
exports.Division = Division;
