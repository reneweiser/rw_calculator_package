import {Input} from "./Input";
import {Addition} from "./Addition";
import {Operation} from "./Operation";

export class Calculator {
    private readonly _input: (Input|Operation)[] = [];

    get expression() {
        return this._input.map(item => item.toString()).join(" ");
    }

    public addInput(input: Input): void {
        this._input.push(input);
    }

    public addOperation(addition: Addition): void {
        this._input.push(addition);
    }

    public evaluate(): number {
        return this.evaluateInput(this._input);
    }

    private evaluateInput(input: (Input|Operation)[]): number {
        if (input.length === 1) {
            const result = input[0] as Input;
            return result.value;
        }

        const inputA: Input = input[0] as Input;
        const operation: Operation = input[1] as Operation;
        const rest: (Input|Operation)[] = input.filter((item, index: number) => index > 1);

        return operation.evaluate(inputA.value, this.evaluateInput(rest));
    }
}
