"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("../src/Calculator");
const Input_1 = require("../src/Input");
const Addition_1 = require("../src/Addition");
const Subtraction_1 = require("../src/Subtraction");
const Multiplication_1 = require("../src/Multiplication");
const Division_1 = require("../src/Division");
describe("a calculator that receives variables and operators as input and evaluates a result", () => {
    it("should receive input values", () => {
        const calculator = new Calculator_1.Calculator();
        calculator.addInput(new Input_1.Input("1"));
        expect(calculator.expression).toBe("1");
        calculator.addOperation(new Addition_1.Addition());
        expect(calculator.expression).toBe("1 +");
        calculator.addInput(new Input_1.Input("1"));
        expect(calculator.expression).toBe("1 + 1");
    });
    it("should evaluate addition and subtraction operations", () => {
        const calculator = new Calculator_1.Calculator();
        calculator.addInput(new Input_1.Input("1"));
        calculator.addOperation(new Addition_1.Addition());
        calculator.addInput(new Input_1.Input("1"));
        calculator.addOperation(new Subtraction_1.Subtraction());
        calculator.addInput(new Input_1.Input("2"));
        expect(calculator.evaluate()).toBe(0);
    });
    it("should evaluate multiplication and division operations", () => {
        const calculator = new Calculator_1.Calculator();
        calculator.addInput(new Input_1.Input("2"));
        calculator.addOperation(new Multiplication_1.Multiplication());
        calculator.addInput(new Input_1.Input("6"));
        calculator.addOperation(new Division_1.Division());
        calculator.addInput(new Input_1.Input("4"));
        expect(calculator.evaluate()).toBe(3);
    });
    it("should respect order of operations", () => {
        const calculator = new Calculator_1.Calculator();
        calculator.addInput(new Input_1.Input("3"));
        calculator.addOperation(new Multiplication_1.Multiplication());
        calculator.addInput(new Input_1.Input("5"));
        calculator.addOperation(new Division_1.Division());
        calculator.addInput(new Input_1.Input("4"));
        calculator.addOperation(new Addition_1.Addition());
        calculator.addInput(new Input_1.Input("9"));
        calculator.addOperation(new Subtraction_1.Subtraction());
        calculator.addInput(new Input_1.Input("10"));
        calculator.addOperation(new Division_1.Division());
        calculator.addInput(new Input_1.Input("5"));
        console.log(calculator.expression);
        expect(calculator.evaluate()).toBe(10.75);
    });
});
