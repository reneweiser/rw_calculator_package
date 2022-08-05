import {Calculator} from "../src/Calculator";
import {Input} from "../src/Input";

describe("a calculator that receives variables and operators as input and evaluates a result", () => {
    it("should receive input values", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("1"));

        expect(calculator.expression).toBe("1");
    });
});