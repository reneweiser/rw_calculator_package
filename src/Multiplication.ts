import {Operation} from "./Operation";

export class Multiplication implements Operation {
    evaluate(inputA: number, inputB: number): number {
        return inputA * inputB;
    }
}

