/// <reference path="jasmine.d.ts"/>
/// <reference path="../../WebApp/Scripts/simple.component.ts"/>
"use strict";
describe("NavMenuComponent", () => {

    const control: SimpleControl = new SimpleControl();

    it("foos", (): void => {
        expect(control.foo()).toBe(true);
    });

    it("bars", (): void => {
        expect(control.bar()).toBe(false);
    });

    it("ozes", (): void => {
        const a: string = "test";
        const b: string = "me";
        expect(control.oze(a, b)).toBe("test me");
    });

    it("rols", (): void => {
        const a: number = 5;
        const b: number = 12;
        expect(control.rol(a, b)).toBe(17);
    });

    it("zeds", (): void => {
        expect(control.zed).toThrowError();
    });

});