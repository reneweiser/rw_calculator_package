import {Calculator} from "../src/Calculator";
import {Input} from "../src/Input";
import {Addition} from "../src/Addition";

describe("a calculator that receives variables and operators as input and evaluates a result", () => {
    it("should receive input values", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("1"));
        expect(calculator.expression).toBe("1");

        calculator.addOperation(new Addition());
        expect(calculator.expression).toBe("1 +");

        calculator.addInput(new Input("1"));
        expect(calculator.expression).toBe("1 + 1");
    });

    it("should evaluate addition operations", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("1"));
        calculator.addOperation(new Addition());
        calculator.addInput(new Input("1"));
        calculator.addOperation(new Addition());
        calculator.addInput(new Input("2"));

        expect(calculator.evaluate()).toBe(4);
    });
});