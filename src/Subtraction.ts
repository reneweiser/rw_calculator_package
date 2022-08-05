import {Operation} from "./Operation";

export class Subtraction implements Operation {
    evaluate(inputA: number, inputB: number): number {
        return inputA - inputB;
    }
}