import {Input} from "./Input";
import {Evaluable} from "./Evaluable";
import {Printable} from "./Printable";

export class Calculator {
    private readonly _input: (Input|Evaluable)[] = [];

    get expression() {
        return this._input.map((item: Printable) => item.toString()).join(" ");
    }

    public addInput(input: Input): void {
        if (this.isLastItemInput())
            return;

        if (input.isEmpty)
            return;

        this._input.push(input);
    }

    public addOperation(operation: Evaluable): void {
        if (!this.isLastItemInput())
            return;

        this._input.push(operation);
    }

    public evaluate(): number {
        const result = this.evaluateRecursive(this._input);
        this._input.splice(0, this._input.length);
        this._input.push(new Input(result.toString()));

        return result;
    }

    private evaluateRecursive(input: (Input|Evaluable)[]): number {
        if (input.length === 1) {
            const result = input[0] as Input;
            return result.value;
        }

        const operation = input[1] as Evaluable;

        if (operation.rank === 1) {
            const a: Input = input[0] as Input;
            const rest: (Input|Evaluable)[] = input.filter((item, index) => index > 1);

            return operation.evaluate(a.value, this.evaluateRecursive(rest));
        }

        const a: Input = input[0] as Input;
        const b: Input = input[2] as Input;
        const rest: (Input|Evaluable)[] = input.filter((item, index) => index > 2);

        return this.evaluateRecursive([new Input(operation.evaluate(a.value, b.value).toString()), ...rest]);
    }

    public isLastItemInput(): boolean {
        return this._input[this._input.length - 1] instanceof Input;
    }
}
