import {Evaluable} from "./Evaluable";
import {Printable} from "./Printable";

export class Addition implements Evaluable, Printable {
    evaluate(inputA: number, inputB: number): number {
        return inputA + inputB;
    }

    toString(): string {
        return "+";
    }

    get rank(): 0|1 {
        return 1;
    }
}