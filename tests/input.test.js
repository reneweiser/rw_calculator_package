"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = require("../src/Input");
describe("an input value for the calculator", () => {
    it("should be constructed by using an integer", () => {
        expect(() => new Input_1.Input("1")).not.toThrow();
        expect((new Input_1.Input("1")).value).toBe(1);
        expect((new Input_1.Input("123")).value).toBe(123);
    });
    it("should be constructed by using a float", () => {
        expect(() => new Input_1.Input("1.2")).not.toThrow();
        expect((new Input_1.Input("1.2")).value).toBe(1.2);
        expect((new Input_1.Input("123.123")).value).toBe(123.123);
    });
    it("should only be constructed using strings containing integers or floats", () => {
        expect(() => new Input_1.Input('test')).toThrowError('This value is no valid input: test');
    });
    it("should append more digits", () => {
        let input = new Input_1.Input("1");
        expect(input.append("2").value).toBe(12);
        input = new Input_1.Input("1")
            .append("2")
            .append("3")
            .append(".")
            .append("1");
        expect(input.value).toBe(123.1);
    });
    it("should not be possible to append more than one decimal point", () => {
        expect(new Input_1.Input("123.1").append(".").value).toBe(123.1);
    });
});
