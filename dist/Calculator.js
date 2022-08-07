import { Input } from "./Input";
export class Calculator {
    constructor() {
        this._input = [];
    }
    get expression() {
        return this._input.map((item) => item.toString()).join(" ");
    }
    addInput(input) {
        if (this.isLastItemInput())
            return;
        if (input.isEmpty)
            return;
        this._input.push(input);
    }
    addOperation(operation) {
        if (!this.isLastItemInput())
            return;
        this._input.push(operation);
    }
    evaluate() {
        const result = this.evaluateRecursive(this._input);
        this._input.splice(0, this._input.length);
        this._input.push(new Input(result.toString()));
        return result;
    }
    evaluateRecursive(input) {
        if (input.length === 1) {
            const result = input[0];
            return result.value;
        }
        const operation = input[1];
        if (operation.rank === 1) {
            const a = input[0];
            const rest = input.filter((item, index) => index > 1);
            return operation.evaluate(a.value, this.evaluateRecursive(rest));
        }
        const a = input[0];
        const b = input[2];
        const rest = input.filter((item, index) => index > 2);
        return this.evaluateRecursive([new Input(operation.evaluate(a.value, b.value).toString()), ...rest]);
    }
    isLastItemInput() {
        return this._input[this._input.length - 1] instanceof Input;
    }
}
