import {Input} from "./Input";
import {Evaluable} from "./Evaluable";
import {Printable} from "./Printable";

export class Calculator {
    private readonly _input: (Input|Evaluable)[] = [];

    get expression() {
        return this._input.map((item: Printable) => item.toString()).join(" ");
    }

    public addInput(input: Input): void {
        this._input.push(input);
    }

    public addOperation(operation: Evaluable): void {
        this._input.push(operation);
    }

    public evaluate(): number {
        return this.evaluateRecursive(this._input);
    }

    private evaluateRecursive(input: (Input|Evaluable)[]): number {
        if (input.length === 1) {
            const result = input[0] as Input;
            return result.value;
        }

        const [, operation] = input as [Input, Evaluable];

        if (operation.rank === 1) {
            const [a, , ...rest]: [Input, Evaluable, (Input|Evaluable)] = input as [Input, Evaluable, (Input|Evaluable)];
            return operation.evaluate(a.value, this.evaluateRecursive(rest));
        }

        const [a, , b, ...rest]: [Input, Evaluable, Input, (Input|Evaluable)] = input as [Input, Evaluable, Input, (Input|Evaluable)];
        return this.evaluateRecursive([new Input(operation.evaluate(a.value, b.value).toString()), ...rest]);
    }
}
