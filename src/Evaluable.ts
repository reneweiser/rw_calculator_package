export interface Evaluable {
    get rank() : 0|1;
    evaluate(inputA: number, inputB: number): number;
}