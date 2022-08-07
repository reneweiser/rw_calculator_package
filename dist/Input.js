export class Input {
    constructor(value) {
        this._valuePattern = /^-?\d+\.?\d*$/;
        this._digitPattern = /^\d|\.$/;
        if (!this._valuePattern.test(value))
            throw new Error(`This value is no valid input: ${value}`);
        this._value = value.replace(/^0(?!\.)(?=\d)/g, '');
    }
    get value() {
        return parseFloat(this._value);
    }
    get isEmpty() {
        return this._value === '';
    }
    append(digit) {
        if (!this._digitPattern.test(digit))
            throw new Error(`This value is no valid input: ${digit}`);
        if (digit === '.' && this._value.includes('.'))
            return this;
        return new Input(`${this._value}${digit}`);
    }
    toString() {
        return this._value;
    }
}
