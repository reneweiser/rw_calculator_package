import {Printable} from "./Printable";

export class Input implements Printable {
    private readonly _valuePattern: RegExp = /^-?\d+\.?\d*$/;
    private readonly _digitPattern: RegExp = /^\d|\.$/;
    private readonly _value: string;

    constructor(value: string) {
        if (!this._valuePattern.test(value))
            throw new Error(`This value is no valid input: ${value}`);

        this._value = value.replace(/^0(?!\.)(?=\d)/g, '');
    }

    get value(): number {
        return parseFloat(this._value);
    }

    get isEmpty(): boolean {
        return this._value === '';
    }

    append(digit: string): Input {
        if (!this._digitPattern.test(digit))
            throw new Error(`This value is no valid input: ${digit}`);

        if (digit === '.' && this._value.includes('.'))
            return this;

        return new Input(`${this._value}${digit}`);
    }

    toString(): string {
        return this._value;
    }
}
