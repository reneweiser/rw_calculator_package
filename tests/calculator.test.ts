import {Calculator} from "../src/Calculator";
import {Input} from "../src/Input";
import {Addition} from "../src/Addition";
import {Subtraction} from "../src/Subtraction";
import {Multiplication} from "../src/Multiplication";
import {Division} from "../src/Division";

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

    it("should evaluate addition and subtraction operations", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("1"));
        calculator.addOperation(new Addition());
        calculator.addInput(new Input("1"));
        calculator.addOperation(new Subtraction());
        calculator.addInput(new Input("2"));

        expect(calculator.evaluate()).toBe(0);
    });

    it("should evaluate multiplication and division operations", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("2"));
        calculator.addOperation(new Multiplication());
        calculator.addInput(new Input("6"));
        calculator.addOperation(new Division());
        calculator.addInput(new Input("4"));

        expect(calculator.evaluate()).toBe(3);
    });

    it("should respect order of operations", () => {
        const calculator = new Calculator();

        calculator.addInput(new Input("3"));
        calculator.addOperation(new Multiplication());
        calculator.addInput(new Input("5"));
        calculator.addOperation(new Division());
        calculator.addInput(new Input("4"));
        calculator.addOperation(new Addition());
        calculator.addInput(new Input("9"));
        calculator.addOperation(new Subtraction());
        calculator.addInput(new Input("10"));
        calculator.addOperation(new Division());
        calculator.addInput(new Input("5"));

        expect(calculator.evaluate()).toBe(10.75);
    });
});