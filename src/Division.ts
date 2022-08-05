import {Operation} from "./Operation";

export class Division implements Operation {
    evaluate(inputA: number, inputB: number): number {
        return inputA / inputB;
    }
}