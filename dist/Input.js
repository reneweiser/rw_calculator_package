"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var Input = /** @class */ (function () {
    function Input(value) {
        this._valuePattern = /^\d+\.?\d*$/;
        this._digitPattern = /^\d|\.$/;
        if (!this._valuePattern.test(value))
            throw new Error("This value is no valid input: ".concat(value));
        this._value = value;
    }
    Object.defineProperty(Input.prototype, "value", {
        get: function () {
            return parseFloat(this._value);
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.append = function (digit) {
        if (!this._digitPattern.test(digit))
            throw new Error("This value is no valid input: ".concat(digit));
        if (digit === '.' && this._value.includes('.'))
            return this;
        return new Input("".concat(this._value).concat(digit));
    };
    Input.prototype.toString = function () {
        return this._value;
    };
    return Input;
}());
exports.Input = Input;
