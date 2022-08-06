"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Input_1 = require("./Input");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this._input = [];
    }
    Object.defineProperty(Calculator.prototype, "expression", {
        get: function () {
            return this._input.map(function (item) { return item.toString(); }).join(" ");
        },
        enumerable: false,
        configurable: true
    });
    Calculator.prototype.addInput = function (input) {
        this._input.push(input);
    };
    Calculator.prototype.addOperation = function (operation) {
        this._input.push(operation);
    };
    Calculator.prototype.evaluate = function () {
        return this.evaluateRecursive(this._input);
    };
    Calculator.prototype.evaluateRecursive = function (input) {
        if (input.length === 1) {
            var result = input[0];
            return result.value;
        }
        var _a = input, operation = _a[1];
        if (operation.rank === 1) {
            var _b = input, a_1 = _b[0], rest_1 = _b.slice(2);
            return operation.evaluate(a_1.value, this.evaluateRecursive(rest_1));
        }
        var _c = input, a = _c[0], b = _c[2], rest = _c.slice(3);
        return this.evaluateRecursive(__spreadArray([new Input_1.Input(operation.evaluate(a.value, b.value).toString())], rest, true));
    };
    return Calculator;
}());
exports.Calculator = Calculator;
