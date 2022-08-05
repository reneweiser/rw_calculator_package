import {Operation} from "./Operation";
import {Printable} from "./Printable";

export class Addition implements Operation, Printable {
    evaluate(inputA: number, inputB: number): number {
        return inputA + inputB;
    }

    toString(): string {
        return "+";
    }
}