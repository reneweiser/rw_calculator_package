export class Input {
    private readonly _valuePattern: RegExp = /^\d+\.?\d*$/;
    private readonly _digitPattern: RegExp = /^\d|\.$/;
    private readonly _value: string;

    constructor(value: string) {
        if (!this._valuePattern.test(value))
            throw new Error(`This value is no valid input: ${value}`);

        this._value = value;
    }

    get value(): number {
        return parseFloat(this._value);
    }

    append(digit: string): Input {
        if (!this._digitPattern.test(digit))
            throw new Error(`This value is no valid input: ${digit}`);

        if (digit === '.' && this._value.includes('.'))
            return this;

        return new Input(`${this._value}${digit}`);
    }
}